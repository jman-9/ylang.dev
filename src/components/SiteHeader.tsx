import { useState } from "react";
import ylangLogo from '/ylang.svg'
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function SiteHeaderContent({ onItemClick, vertical = false }: { onItemClick?: () => void;  vertical?: boolean; }) {
  const location = useLocation();

  const menu = [
    { label: "About", path: "/about", target: "_self" },
    { label: "Learn", path: "/learn", target: "_self" },
    { label: "Reference", path: "/reference", target: "_self" },
    { label: "Download", path: "/download", target: "_self" },
    { label: "Github", path: "https://github.com/jman-9/ylang", target: "_blank" },
  ];

  return (
    <div className={
        vertical
          ? "flex flex-col items-start gap-4"
          : "flex flex-row items-center justify-between py-2 pl-4"
      }>
      <Link className="flex flex-row items-center gap-x-2" to="/">
        <img src={ylangLogo} className="h-12" alt="ylang logo" />
        <h1> ylang</h1>
      </Link>
      <nav className={
        vertical
          ? "flex flex-col items-start gap-4"
          : "flex flex-row gap-x-5"
      }>
        {menu.map(({ label, path, target }) => {
          const isActive = location.pathname === path;
          return (
            <Link className={isActive ? "text-blue-800 font-bold dark:bg-blue-900 dark:text-white" : ""} key={path} to={path} onClick={onItemClick} target={target}>
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default function SiteHeader() {
  const [isOverlaySidebarOpen, setIsOverlaySidebarOpen] = useState(false);

  return (
    <div className="items-center">
      <div className="items-center pl-4 pr-16 hidden md:block bg-gray-50 text-gray-800  dark:bg-gray-900 dark:text-gray-100">
        <SiteHeaderContent />
      </div>

      <button
        className="fixed top-4 right-4 md:hidden z-60 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md"
        onClick={() => setIsOverlaySidebarOpen((prev) => !prev)}
        aria-label="Toggle sidebar"
      >
        {isOverlaySidebarOpen ? <X className="w-6 h-6 text-gray-800 dark:text-gray-200" /> : <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />}
      </button>

      {isOverlaySidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOverlaySidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside className={`fixed md:hidden top-0 left-0 h-full w-64 z-50 bg-gray-100 text-gray-800 p-4 border-r border-gray-300 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 transform transition-transform duration-100 ${isOverlaySidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <SiteHeaderContent onItemClick={() => setIsOverlaySidebarOpen(false)} vertical={true} />
      </aside>
    </div>
  );
}
