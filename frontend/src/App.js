import './App.css';
// import Sidebar from './Sidebar';
import Feed from './Feed';
// import React, { useState } from 'react'
import './Sidebar.css'
// import axios from "axios";
import CIcon from '@coreui/icons-react'
import { cibTwitter } from '@coreui/icons'
import { cilHome } from '@coreui/icons'
import { cilCode } from '@coreui/icons'
import { cilSchool } from '@coreui/icons'
import { cilFire } from '@coreui/icons'

import SidebarOption from './SidebarOption'
function App() {
  return (
    // BEM
      <div className="App">

        <div className="sidebar">
          <div className="twitter_icon"><CIcon icon={cibTwitter} size="sm"/></div>
          <SidebarOption active Icon={cilHome} text="Home"/>
          <SidebarOption Icon={cilCode} text="About project"/>
          <SidebarOption Icon={cilSchool} text="About developer"/>
          <SidebarOption Icon={cilFire} text="Future plan"/>

      </div>

      {/* Feed */}
      <Feed/>

      {/* if About Project click */}
      {/* <Aboutproject/> */}

      {/* if About Developer click */}
      {/* <AboutDeveloper/> */}

      {/* if Future plan click */}
      {/* <FuturePlan/> */}

    </div>
  );
}

export default App;
