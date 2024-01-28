import React, { useState, useEffect, Component } from "react";
import "../styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post"
// import { CIcon } from "@coreui/icons-react";
import { cilSearch } from "@coreui/icons";
import { CButton } from "@coreui/react";
import db from "./Firebase";
import axios from "axios";
import CIcon from '@coreui/icons-react'
// import { FaXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { cilHome } from '@coreui/icons'
import { cilCode } from '@coreui/icons'
import SidebarOption from './SidebarOption'
import '../styles/Sidebar.css'
import { useNavigate } from "react-router";

function Feed() {
  const [Username, setUsername] = useState("");
  const navigate = useNavigate();
  const sendUsername = async (e) => {
    e.preventDefault();

    await axios
      .post("/user_tweet", {
        // displayName : "",
        username: Username,
        // text : "",
        // label : 0
      })
      .then((response) => {
        const res = response.data;
        console.log(response.data);
        for (let i = 0; i < res.length; i++) {
          db.collection("posts").add({
            displayName: res.tweets[i].displayName,
            userName: Username,
            text: res.tweets[i].text,
            label: res.tweets[i].label,
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
    setUsername("");
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="App">
      <div className="sidebar">
        {/* <div className="twitter_icon" onClick={()=>navigate("/")}><FaXTwitter size="xl"/></div> */}
        <div className="twitter_icon" onClick={()=>navigate("/")}><FaTwitter size="xl"/></div>
        <SidebarOption Icon={cilHome} text="Home" route="/v1/home" />
        <SidebarOption Icon={cilCode} text="About project" route="/v1/about"/>
      </div>
      <div className="feed">
        {/*Header */}
        <div className="feed__header">
          <h2>Home</h2>
          <CButton
            type="submit"
            onClick={sendUsername}
            className="search_tweetButton"
            color="primary"
            shape="rounded-pill"
          >
            <div className="search_icon">
              <CIcon icon={cilSearch} size="sm" />
            </div>
          </CButton>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={Username}
            type="text"
            placeholder="Enter Username"
          />
        </div>

        {/* TweetBox */}
        <TweetBox />

        {posts.map((post) => (
          <Post
            displayName={post.displayName}
            userName={post.userName}
            text={post.text}
            label={post.label}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
