import React, { useState, useEffect} from "react";
import "../styles/Main.css";
import TweetBox from "./TweetBox";
import Post from "./Post"
import { cilSearch } from "@coreui/icons";
import { CButton } from "@coreui/react";
import db from "./Firebase";
import axios from "axios";
import CIcon from '@coreui/icons-react'
import { FaTwitter } from "react-icons/fa6";
import { cilHome } from '@coreui/icons'
import { cilCode } from '@coreui/icons'
import SidebarOption from './SidebarOption'
import '../styles/Sidebar.css'
import { useNavigate } from "react-router";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { UserButton } from "@clerk/clerk-react";
import { cilChevronTop } from "@coreui/icons";

function Feed() {

  const [isScrolledToTop, setIsScrolledToTop] = useState(true);
  const handleScrollTop = () => {
    if (!isScrolledToTop) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY + window.innerHeight, document.body.scrollHeight);
      const isTop = window.scrollY === 0;
      setIsScrolledToTop(isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div>
      <div class="content">
        <div class="basic-marquee">
          <p>
            The model will soon be deployed on EC2 instance 🌐,  after that version 1 will be launched for data collection. Stay tuned for more updates. ✨ &nbsp; &nbsp;
            The model will soon be deployed on EC2 instance 🌐,  after that version 1 will be launched for data collection. Stay tuned for more updates. ✨ &nbsp; &nbsp;
            The model will soon be deployed on EC2 instance 🌐,  after that version 1 will be launched for data collection. Stay tuned for more updates. ✨ &nbsp; &nbsp;
            The model will soon be deployed on EC2 instance 🌐,  after that version 1 will be launched for data collection. Stay tuned for more updates. ✨ &nbsp; &nbsp;
          </p> 
        </div>
      </div>
      <div className="main">
        {/* Topbar */}
        <Topbar />
        <div className="sidebar">
          {/* <div className="twitter_icon" onClick={()=>navigate("/")}><FaXTwitter size="xl"/></div> */}
          <div className="fixed">
            <div className="twitter_icon" onClick={()=>navigate("/")}><FaTwitter size="xl"/></div>
            <SidebarOption Icon={cilHome} text="Home" route="/v1/home" />
            <SidebarOption Icon={cilCode} text="About project" route="/v1/about"/>
          </div>
        </div>
        <div className="feed">
          {/*Header */}
          <div className="feed-header">
            <div className="feed-header-1">
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
              <UserButton afterSignOutUrl="https://mood-meter-one.vercel.app//"/>
            </div>
            <TweetBox />
          </div>

          {/* TweetBox */}

          {posts.sort((a, b) => b.time - a.time).map((post) => (
            <Post
              displayName={post.displayName}
              text={post.text}
              label={post.label}
              imageURL={post.imageURL}
            />
          ))}
        </div>
        {/* Navbar */}
        <Navbar />
        {!isScrolledToTop && <button className="scroll-to-top" onClick={handleScrollTop}>
            <CIcon icon={cilChevronTop} size="sm" />
          </button>}
        <div className="extra"></div>
      </div>
    </div>
  );
}

export default Feed;
