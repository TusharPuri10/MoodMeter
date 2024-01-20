import React, { useState, useEffect } from "react";
import "../styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "../styles/Post.css";
// import { CIcon } from "@coreui/icons-react";
import { cilSearch } from "@coreui/icons";
import { CButton } from "@coreui/react";
import db from "./Firebase";
import axios from "axios";
import { FaXTwitter } from "react-icons/fa6";
import { cilHome } from '@coreui/icons'
import { cilCode } from '@coreui/icons'
import SidebarOption from './SidebarOption'
import '../styles/Sidebar.css'

function About() {
  const [Username, setUsername] = useState("");

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
        <div className="twitter_icon"><FaXTwitter size="xl"/></div>
        <SidebarOption Icon={cilHome} text="Home" route="/home" />
        <SidebarOption Icon={cilCode} text="About project" route="/about"/>
      </div>
      <div className="feed">
            About
      </div>
    </div>
  );
}

export default About;
