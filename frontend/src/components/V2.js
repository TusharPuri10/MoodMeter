import { useNavigate } from "react-router";
import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import "../styles/Main.css";
import TweetBox from "./TweetBox";
import Post from "./Post"
import { cilSearch } from "@coreui/icons";
import { CButton } from "@coreui/react";
import CIcon from '@coreui/icons-react'
// import { cilHome } from '@coreui/icons'
// import { cilCode } from '@coreui/icons'
// import SidebarOption from './SidebarOption'
import Navbar from "./Navbar";
import '../styles/Sidebar.css'

const V2 = () => {
  const navigate = useNavigate();
  return (
    <div className="main">
      <div className="sidebar">
        <div className="twitter_icon" onClick={() => navigate("/")}><FaXTwitter size="xl" /></div>
      </div>
      <div className="feed">
        {/*Header */}
        <div className="feed__header">
          <h2>Home</h2>
          <CButton
            type="submit"
            // onClick={sendUsername}
            className="search_tweetButton"
            color="primary"
            shape="rounded-pill"
          >
            <div className="search_icon">
              <CIcon icon={cilSearch} size="sm" />
            </div>
          </CButton>
          <input
            // onChange={(e) => setUsername(e.target.value)}
            // value={Username}
            type="text"
            placeholder="Enter Username"
          />
        </div>

        {/* TweetBox */}
        <TweetBox />

        <Post
          displayName='TusharPuri'
          userName='TusharP78096727'
          text='Features I am going to release in Version 2:'
          label='0'
        />
        <Post
          displayName='TusharPuri'
          userName='TusharP78096727'
          text='Using Synthetic Minority Oversampling Technique (SMOTE) in new model, particularly SMOTE + ENN to tackle imbalanced datasets'
          label='0'
        />
        <Post
          displayName='TusharPuri'
          userName='TusharP78096727'
          text='Use the newly collected data from version 1 to train the model'
          label='0'
        />
        <Post
          displayName='TusharPuri'
          userName='TusharP78096727'
          text='Analysis of depressive tweets of a particular user by adding search functionality. I will try my best to add this feature without using twitter api 🥲'
          label='1'
        />
      </div>
      <div className="extra"></div>
    </div>
  );
}

export default V2;
