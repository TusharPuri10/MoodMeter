import React from 'react'
import CIcon from '@coreui/icons-react'
import "../styles/SidebarOption.css"
import "../styles/Sidebar.css"
import { useLocation, useNavigate } from "react-router-dom";

function SidebarOption({active, text, Icon, route}) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={`sidebarOption ${(route===location.pathname) && 'sidebarOption--active'}`} onClick={()=>navigate(route)}>
        <div className="logo">
            <CIcon icon={Icon} size="sm"/>
        </div>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
