import ylangLogo from '/ylang.svg'
import { useNavigate } from 'react-router-dom';
import { CursorGlowBlackButton } from "../ui/CursorGlowBlackButton";
import RoundedButton from "../ui/RoundedButton";

export default function Home() {
  const navigate = useNavigate();

  return <div className="pt-15 justify-items-center">
    <img src={ylangLogo} className="logo react h-50" alt="ylang logo" />
    <h1 className='text-6xl font-sans'>ylang</h1>
    <p className='text-4xl p-8 text-cyan-950'>Retro, C-like, and Pythonic</p>
    <div className="flex justify-end gap-3">
      <CursorGlowBlackButton title="Learn" fontSize="1.4rem" glowSize="40px" onClick={()=>navigate('/learn')}>Learn <em>ylang</em></CursorGlowBlackButton>
      <RoundedButton size="medium" onClick={()=>navigate('/reference')}>API Reference</RoundedButton>
    </div>
  </div>
}
