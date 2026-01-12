import { Route, Routes } from 'react-router-dom';
import Sidebar, { type Menu, type MenuItem } from '../../components/Sidebar';
import ModuleView from './ModuleView';

const menuItems: MenuItem[] = [
    { label: "str", path: "/str" },
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
        <Route path="/" element={<ModuleView moduleName="str" />} />
      </Routes>
    </div>
  </div>
}
