import ylangLogo from '/ylang.svg'
import { Link, useLocation } from "react-router-dom";
import ButtonSidebar from "../ui/ButtonSidebar";

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
    <div>
    <div className={
        vertical
          ? "flex flex-col items-start gap-4"
          : "flex flex-row items-center justify-between py-2 pl-4"
      }>
      <Link className="flex flex-row items-center gap-x-2" to="/">
        <img src={ylangLogo} className="h-12" alt="ylang logo" />
        <h1> ylang</h1>
      </Link>
      </div>
      <div>
      <nav className={
        vertical
          ? "flex flex-col items-start gap-4"
          : "flex flex-row gap-x-2"
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
    </div>
  );
}

export default function GlobalSidebar() {
  return (
    <div className="fixed md:hidden">
      <ButtonSidebar>
        <SiteHeaderContent vertical={false} onItemClick={() => {}}/>
      </ButtonSidebar>
    </div>
  );
}
