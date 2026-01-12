import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css'
import SiteHeader from './components/SiteHeader'
import Home from './pages/Home'
import About from './pages/About'
import Learn from './pages/Learn/Learn'
import Reference from './pages/Reference'
import Download from './pages/Download'
import { useEffect, useRef } from "react";

const webBasePath = typeof _WEB_BASE_PATH_ === "string" && _WEB_BASE_PATH_.length > 0 ? _WEB_BASE_PATH_ : "/";

function ScrollToTop({scrollRef}: {scrollRef: React.RefObject<HTMLElement | null>}) {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollRef?.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, []);

  return null;
}

export default function App() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <BrowserRouter basename={webBasePath}>
      <RedirectHandler />
      <div className="h-screen flex flex-1 flex-col overflow-hidden dark:bg-gray-950 dark:text-gray-100">
        <SiteHeader />
        <ScrollToTop scrollRef={scrollRef} />
        <div ref={scrollRef} className="overflow-auto flex-1 min-h-0">
          <div className="min-h-full min-w-0 max-w-7xl mx-auto px-4 flex flex-1 flex-col ">
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/learn/*" element={<Learn />} />
                <Route path="/reference" element={<Reference />} />
                <Route path="/download" element={<Download />} />
              </Routes>
            </main>
            <footer className="text-center py-4 bg-none text-xl text-gray-600 dark:text-gray-100">
              <p>© {new Date().getFullYear()} JMAN — MIT License · Krafted with React, RTK, tailwindcss · <span className="text-sm text-gray-600">🐙 </span>View on <a href="https://github.com/jman-9/ylang.dev" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </footer>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
