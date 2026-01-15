import { Route, Routes } from 'react-router-dom';
import Sidebar, { type Menu, type MenuItem } from '../../components/Sidebar';
import ModuleView from './ModuleView';

const menuItems: MenuItem[] = [
    { label: "builtin functions", path: "/builtin-functions" },
    { label: "str", path: "/str" },
    { label: "list", path: "/list" },
    { label: "dict", path: "/dict" },
    { label: "math", path: "/math" },
    { label: "rand", path: "/rand" },
    { label: "sys", path: "/sys" },
    { label: "file", path: "/file" },
    { label: "json", path: "/json" },
    { label: "time", path: "/time" },
    { label: "shell", path: "/shell" },
    { label: "fs", path: "/fs" },
];

const menu: Menu = {
  base: "/reference",
  menuItems: menuItems
};

export default function Reference() {
  return <div className="flex min-h-screen">
    <div className="fixed left-0 h-screen">
      <Sidebar sidebarProps={{menu}}/>
    </div>
    <div className='flex-col p-4 md:pl-64'>
      <Routes>
        <Route path="/str" element={<ModuleView moduleName="str" />} />
        <Route path="/list" element={<ModuleView moduleName="list" />} />
        <Route path="/dict" element={<ModuleView moduleName="dict" />} />
        <Route path="/math" element={<ModuleView moduleName="math" />} />
        <Route path="/rand" element={<ModuleView moduleName="rand" />} />
        <Route path="/sys" element={<ModuleView moduleName="sys" />} />
        <Route path="/file" element={<ModuleView moduleName="file" />} />
        <Route path="/json" element={<ModuleView moduleName="json" />} />
        <Route path="/time" element={<ModuleView moduleName="time" />} />
        <Route path="/shell" element={<ModuleView moduleName="shell" />} />
        <Route path="/fs" element={<ModuleView moduleName="fs" />} />
        <Route path="/builtin-functions" element={<ModuleView moduleName="builtin-functions" />} />
        <Route path="/" element={<ModuleView moduleName="builtin-functions" />} />
      </Routes>
    </div>
  </div>
}
