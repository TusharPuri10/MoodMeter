import '../styles/Navbar.css';
import { useLocation, useNavigate } from "react-router-dom";
import CIcon from '@coreui/icons-react'
import { cilCode } from '@coreui/icons'
import { cilHome } from '@coreui/icons'
import { cilSearch } from '@coreui/icons'
import { cilPen } from '@coreui/icons';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <div class="navbar">
      <button class="button" onClick={()=>navigate('/')}>
        <CIcon icon={cilHome} size="sm"/>
      </button>
      <button className={`${(location.pathname==='/v1/home')?'button--active':'button'}`} onClick={()=>navigate('/v1/home')}>
        <CIcon icon={cilPen} size="sm"/>
      </button>
      <button className={`${(location.pathname==='/v1/about')?'button--active':'button'}`} onClick={()=>navigate('/v1/about')}>
        <CIcon icon={cilCode} size="sm"/>
      </button>
      {/* <button class="button">
        <CIcon icon={cilSearch} size="sm"/>
      </button> */}
    </div>
    )
}

export default Navbar;