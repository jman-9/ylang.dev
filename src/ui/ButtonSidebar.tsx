import { useState } from "react";
import { Menu, X } from "lucide-react";


export default function ButtonSidebar({children}: {children: React.ReactNode}) {
  const [isOverlaySidebarOpen, setIsOverlaySidebarOpen] = useState(false);

  return (
    <>
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

      <aside className={`fixed left-0 h-screen top-0 z-50 bg-gray-100 text-gray-800 p-4 border-r border-gray-300 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 transform transition-transform duration-100 ${isOverlaySidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <span onClick={() => setIsOverlaySidebarOpen(false)}>{children}</span>
      </aside>
    </>
  );
}
