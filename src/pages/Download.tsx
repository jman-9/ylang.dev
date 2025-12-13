import construction from '/construction-boy.svg'
import { useNavigate } from 'react-router-dom';
import { CursorGlowBlackButton } from "../ui/CursorGlowBlackButton";
import RoundedButton from "../ui/RoundedButton";

export default function Download() {
  const navigate = useNavigate();

  return <div className="pt-15 justify-items-center">
    <img src={construction} className="logo react h-50" alt="ylang logo" />
    <h1 className='text-6xl pt-2 pb-4'>Under Construction...</h1>
    <div className="flex justify-end gap-3">
      <CursorGlowBlackButton title="Learn" fontSize="1.4rem" glowSize="40px" onClick={()=>navigate('/')}>Home</CursorGlowBlackButton>
      <RoundedButton size="medium" onClick={()=>navigate('/about')}>About</RoundedButton>
    </div>
  </div>
}
