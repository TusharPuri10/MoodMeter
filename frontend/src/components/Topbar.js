import '../styles/Topbar.css';
import { useNavigate } from "react-router-dom";
import { FaTwitter } from "react-icons/fa6";
import { UserButton } from "@clerk/clerk-react";

function Topbar() {
    const navigate = useNavigate();
    return (
        <div class="topbar">
      <button class="button" onClick={()=>navigate('/')}>
        <FaTwitter size="sm"/>
      </button>
    <UserButton afterSignOutUrl="https://mood-meter-one.vercel.app/"/>
    </div>
    )
}

export default Topbar;