import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-rust";

function CodeBlock({ code, lang = "rust" }: {code: string; lang?: string; }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code]);

  let clsName = lang ? `language-${lang}` : '';
  clsName += ' rounded-lg bg-gray-50 p-4 overflow-x-auto text-base';

  return (
    <pre className={clsName}>
      <code ref={ref}>
        {code}
      </code>
    </pre>
  );
}

export default function Download() {
  return <div className='text-left'>
    <h1 className='pt-8 mb-2'>Download <em>ylang</em></h1>
    <p className='pt-4 text-3xl'>Get started with <em>ylang</em> — portable, lightweight, and ready to run.</p>
    <hr className='my-4 mb-10 border-cyan-200 border-3'/>

    <h2 className='mb-6'>Installation</h2>
    <p><em>ylang</em> is distributed as a <strong>portable binary</strong> — no installer required. Just download, extract, and run. The entire package is incredibly small, making it perfect for quick deployment and experimentation.</p>

    <div className='mt-6'>
      <h3 className='mb-3 font-semibold'>Windows</h3>
      <ol className='list-decimal list-inside pl-4 space-y-2'>
        <li>Download <a href="https://github.com/jman-9/ylang/releases/download/v0.1.4/ylang-0.1.4-windows-x64.zip" className="text-cyan-600 hover:text-cyan-700 hover:underline underline-offset-2 decoration-1 transition-colors" target="_blank" rel="noopener noreferrer">ylang-0.1.4-windows-x64.zip</a> <span className='text-xl text-gray-600 dark:text-gray-400'>(~515 KB)</span></li>
        <li>Extract the downloaded <code className='bg-gray-100 dark:bg-gray-800 px-1 rounded text-base font-bold'>.zip</code> file</li>
        <li>Navigate to the extracted directory</li>
        <li>Run <code className='bg-gray-100 dark:bg-gray-800 px-1 rounded text-base font-bold'>bin\ylang</code></li>
      </ol>
      <CodeBlock code={`# Start REPL (interactive mode)
> bin\\ylang

# Execute a ylang program
> bin\\ylang hello.y`} lang='' />
    </div>

    <div className='mt-8'>
      <h3 className='mb-3 font-semibold'>Linux</h3>
      <ol className='list-decimal list-inside pl-4 space-y-2'>
        <li>Download <a href="https://github.com/jman-9/ylang/releases/download/v0.1.4/ylang-0.1.4-linux-x86_64.tar.gz" className="text-cyan-600 hover:text-cyan-700 hover:underline underline-offset-2 decoration-1 transition-colors" target="_blank" rel="noopener noreferrer">ylang-0.1.4-linux-x86_64.tar.gz</a> <span className='text-xl text-gray-600 dark:text-gray-400'>(~466 KB)</span></li>
        <li>Extract the downloaded <code className='bg-gray-100 dark:bg-gray-800 px-1 rounded text-base font-bold'>.tar.gz</code> file</li>
        <li>Navigate to the extracted directory</li>
        <li>Run <code className='bg-gray-100 dark:bg-gray-800 px-1 rounded text-base font-bold'>bin/ylang</code></li>
      </ol>
      <CodeBlock code={`# Start REPL (interactive mode)
$ bin/ylang

# Execute a ylang file
$ bin/ylang hello.y`} lang='' />
    </div>

    <h2 className='mt-12 mb-6'>Build from Source</h2>
    <p>To build <em>ylang</em> from source, visit the <a href="https://github.com/jman-9/ylang" className="text-cyan-600 hover:text-cyan-700 hover:underline underline-offset-2 decoration-1 transition-colors" target="_blank" rel="noopener noreferrer">GitHub repository</a> for build instructions.</p>

    <h2 className='mt-12 mb-6'>Previous Releases</h2>
    <p>For older versions, visit the <a href="https://github.com/jman-9/ylang/releases" className="text-cyan-600 hover:text-cyan-700 hover:underline underline-offset-2 decoration-1 transition-colors" target="_blank" rel="noopener noreferrer">Releases page</a> on GitHub.</p>
  </div>
}
