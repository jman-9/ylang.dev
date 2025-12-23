import construction from '/construction-kid-3.svg'
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CursorGlowBlackButton } from "../../ui/CursorGlowBlackButton";
import RoundedButton from "../../ui/RoundedButton";
import Sidebar, { type Menu, type MenuItem } from '../../components/Sidebar';
import QuickStart from './QuickStart';

const menuItems: MenuItem[] = [
    { label: "Quick Start", path: "/" },
];

const menu: Menu = {
  base: "/learn",
  menuItems: menuItems
};

export default function Learn() {
  const navigate = useNavigate();

  return <div className="flex min-h-screen">
    <div className="fixed left-0 h-screen">
      <Sidebar sidebarProps={{menu}}/>
    </div>
    <div className='flex-col p-4 md:pl-64'>
      <Routes>
        <Route path="/" element={<QuickStart />} />
      </Routes>
    </div>

    <div className="hidden pt-15 justify-items-center">
      <img src={construction} className="logo react h-50" alt="ylang logo" />
      <h1 className='text-6xl pt-2 pb-4'>Under Construction...</h1>
      <div className="flex justify-end gap-3">
        <CursorGlowBlackButton title="Learn" fontSize="1.4rem" glowSize="40px" onClick={()=>navigate('/')}>Home</CursorGlowBlackButton>
        <RoundedButton size="medium" onClick={()=>navigate('/about')}>About</RoundedButton>
      </div>
    </div>
  </div>
}
