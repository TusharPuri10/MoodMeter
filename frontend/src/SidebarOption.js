import React from 'react'
import CIcon from '@coreui/icons-react'
import "./SidebarOption.css"
import "./Sidebar.css"

function SidebarOption({active, text, Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <div className="logo">
            <CIcon icon={Icon} size="sm"/>
        </div>
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
