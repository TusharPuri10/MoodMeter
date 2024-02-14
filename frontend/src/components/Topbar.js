import '../styles/Topbar.css';
import { useNavigate } from "react-router-dom";
import { FaTwitter } from "react-icons/fa6";

function Topbar() {
    const navigate = useNavigate();
    return (
        <div class="topbar">
      <button class="button" onClick={()=>navigate('/')}>
        <FaTwitter size="sm"/>
      </button>
    </div>
    )
}

export default Topbar;