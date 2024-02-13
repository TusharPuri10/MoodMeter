import React from "react";
import "../styles/Feed.css";
import { FaTwitter } from "react-icons/fa6";
import { cilHome } from '@coreui/icons'
import { cilCode } from '@coreui/icons'
import SidebarOption from './SidebarOption'
import '../styles/Sidebar.css'
import { useNavigate } from "react-router";
import ProjectInfo from "./ProjectInfo";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="content">
        <div class="basic-marquee">
          <p>
            The model is going to be deployed on EC2 instance next week 🖥️,  after that version 1 will be launched for data collection. Stay tuned for more updates. ✨ &nbsp; &nbsp;
            The model is going to be deployed on EC2 instance next week 🖥️,  after that version 1 will be launched for data collection. Stay tuned for more updates. ✨ &nbsp; &nbsp;
            The model is going to be deployed on EC2 instance next week 🖥️,  after that version 1 will be launched for data collection. Stay tuned for more updates. ✨ &nbsp; &nbsp;
            The model is going to be deployed on EC2 instance next week 🖥️, after that version 1 will be launched for data collection. Stay tuned for more updates. ✨ &nbsp; &nbsp;
          </p>
        </div>
      </div>
      <div className="main">
        <div className="sidebar">
          {/* <div className="twitter_icon" onClick={()=>navigate("/")}><FaXTwitter size="xl"/></div> */}
          <div className="twitter_icon" onClick={()=>navigate("/")}><FaTwitter size="xl"/></div>
          <SidebarOption Icon={cilHome} text="Home" route="/v1/home" />
          <SidebarOption Icon={cilCode} text="About project" route="/v1/about"/>
        </div>
        <div className="feed">
          <ProjectInfo />
        </div>
      </div>
    </div>
  );
}

export default About;
