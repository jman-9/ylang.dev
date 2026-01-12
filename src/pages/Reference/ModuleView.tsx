import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Prism from "prismjs";
import "prismjs/components/prism-rust";

interface ModuleViewProps {
  moduleName: string;
}

export default function ModuleView({ moduleName }: ModuleViewProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [moduleContent, setModuleContent] = useState<string>("");
  const location = useLocation();
  const prevHashRef = useRef<string>("");
  const scrollPositionBeforeHashRef = useRef<number>(0);
  const isHandlingPopStateRef = useRef<boolean>(false);

  // 실제 스크롤 컨테이너 찾기 (overflow-auto 클래스를 가진 부모 요소)
  const getScrollContainer = (): HTMLElement | null => {
    if (!contentRef.current) return null;
    let parent: HTMLElement | null = contentRef.current.parentElement;
    while (parent) {
      if (parent.classList.contains('overflow-auto')) {
        return parent;
      }
      parent = parent.parentElement;
    }
    // 부모에서 못 찾으면 document에서 찾기
    return document.querySelector('.overflow-auto') as HTMLElement | null;
  };

  useEffect(() => {
    // 동적으로 모듈 markdown 파일 로드
    if (moduleName === "str") {
      import("/docs/ref/str.md?raw")
        .then((m) => setModuleContent(m.default))
        .catch(() => setModuleContent(`# Module Not Found\n\nModule "${moduleName}" documentation is not available.`));
    } else {
      setModuleContent(`# Module Not Found\n\nModule "${moduleName}" documentation is not available.`);
    }
  }, [moduleName]);

  // 코드 블록 하이라이팅
  useEffect(() => {
    if (contentRef.current) {
      const codeBlocks = contentRef.current.querySelectorAll('pre code');
      codeBlocks.forEach((block) => {
        Prism.highlightElement(block as HTMLElement);
      });
    }
  }, [moduleContent]);

  // URL의 hash가 변경될 때 해당 위치로 스크롤 (링크 클릭 시)
  useEffect(() => {
    if (!moduleContent) return; // 모듈 콘텐츠가 로드되기 전에는 실행하지 않음
    if (isHandlingPopStateRef.current) return; // popstate 처리 중이면 무시

    const currentHash = location.hash;
    const prevHash = prevHashRef.current;

    // hash가 실제로 변경된 경우에만 처리
    if (currentHash !== prevHash) {
      prevHashRef.current = currentHash;

      if (currentHash) {
        // hash가 있을 때는 해당 위치로 스크롤
        setTimeout(() => {
          const id = currentHash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'auto', block: 'start' });
          }
        }, 100);
      }
    }
  }, [location.hash, moduleContent]);

  // popstate 이벤트 리스너 (뒤로가기/앞으로가기)
  useEffect(() => {
    if (!moduleContent) return;

    const handlePopState = () => {
      isHandlingPopStateRef.current = true;

      // 즉시 현재 hash 확인
      const currentHash = window.location.hash;
      prevHashRef.current = currentHash;

      // 다음 프레임에서 스크롤 처리
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!currentHash) {
            // hash가 없을 때는 저장된 스크롤 위치로 복원
            const scrollContainer = getScrollContainer();
            if (scrollContainer) {
              scrollContainer.scrollTop = scrollPositionBeforeHashRef.current;
            }
          } else {
            // hash가 있을 때는 해당 위치로 스크롤
            const id = currentHash.substring(1);
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: 'auto', block: 'start' });
            }
          }

          isHandlingPopStateRef.current = false;
        });
      });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [moduleContent]);

  return (
    <div ref={contentRef} className='text-left'>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => (
            <h1 className="pt-2 mb-4 border-b-2 border-gray-300 dark:border-gray-700 pb-1" {...props} />
          ),
          h2: ({node, ...props}) => <h2 className="pt-4 mb-3" {...props} />,
          h3: ({node, children, ...props}) => {
            // 함수명인지 확인 (괄호가 포함되어 있으면 함수명)
            const text = String(children);
            const isFunction = text.includes('(') && text.includes(')');

            if (isFunction) {
              // 함수명에서 id 생성 (테이블 링크 형식과 맞춤)
              // 예: "empty()" -> "empty", "find(start, substr)" -> "findstart-substr"
              const id = text
                .replace(/[()]/g, '')  // 괄호 제거
                .replace(/,\s*/g, '-')  // 쉼표와 공백을 하이픈으로
                .replace(/\s+/g, '-')  // 나머지 공백을 하이픈으로
                .toLowerCase();
              return (
                <h3 id={id} className="mt-8 mb-3 font-mono text-lg font-semibold bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded border-l-4 border-cyan-500 scroll-mt-4" {...props}>
                  {children}
                </h3>
              );
            }
            return <h3 className="pt-8 mb-2" {...props}>{children}</h3>;
          },
          p: ({node, ...props}) => <p className="mb-4" {...props} />,
          hr: ({node, ...props}) => <hr className="my-4 border-cyan-200 border-3" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc list-inside pl-4 mb-4" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal list-inside pl-4 mb-4" {...props} />,
          li: ({node, ...props}) => <li className="mb-1" {...props} />,
          strong: ({node, children, ...props}) => {
            const text = String(children);
            // Parameters, Returns, Example 같은 서브 섹션 헤더인지 확인
            if (text.endsWith(':') && (text.includes('Parameters') || text.includes('Returns') || text.includes('Example'))) {
              return <strong className="font-bold mt-6 mb-0 block leading-none" {...props}>{children}</strong>;
            }
            return <strong className="font-bold" {...props}>{children}</strong>;
          },
          em: ({node, ...props}) => <em className="italic" {...props} />,
          pre: ({node, ...props}) => (
            <pre className="rounded-lg bg-gray-50 p-4 overflow-x-auto text-base dark:bg-gray-800 mb-4" {...props} />
          ),
          code({ node, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || '');
            const lang = match ? match[1] : '';
            const inline = !lang;

            if (!inline && lang) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
                {children}
              </code>
            );
          },
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props} />
          ),
          table: ({node, ...props}) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700" {...props} />
            </div>
          ),
          thead: ({node, ...props}) => (
            <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
          ),
          tbody: ({node, ...props}) => (
            <tbody {...props} />
          ),
          tr: ({node, ...props}) => (
            <tr className="border-b border-gray-300 dark:border-gray-700" {...props} />
          ),
          th: ({node, ...props}) => (
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-left font-bold" {...props} />
          ),
          td: ({node, ...props}) => (
            <td className="border border-gray-300 dark:border-gray-700 px-4 py-2" {...props} />
          ),
          a: ({node, href, ...props}) => {
            // 앵커 링크인 경우 스크롤 처리
            if (href?.startsWith('#')) {
              return (
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    // 현재 스크롤 위치 저장 (hash로 이동하기 전) - 실제 스크롤 컨테이너에서 저장
                    const scrollContainer = getScrollContainer();
                    if (scrollContainer) {
                      scrollPositionBeforeHashRef.current = scrollContainer.scrollTop;
                    }
                    const id = href.substring(1);
                    const element = document.getElementById(id);
                    if (element) {
                      // history에 추가하고 prevHashRef 업데이트
                      window.history.pushState(null, '', `${location.pathname}${href}`);
                      prevHashRef.current = href;
                      // 직접 스크롤 처리
                      requestAnimationFrame(() => {
                        element.scrollIntoView({ behavior: 'auto', block: 'start' });
                      });
                    }
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  {...props}
                />
              );
            }
            return <a href={href} className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />;
          },
        }}
      >
        {moduleContent}
      </ReactMarkdown>
    </div>
  );
}
