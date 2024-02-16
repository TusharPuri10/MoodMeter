import React , {useState} from 'react'
import "../styles/TweetBox.css"
import  {CButton} from '@coreui/react'
import db from './Firebase'
import axios from "axios";
import {useUser} from "@clerk/clerk-react";

function TweetBox() {
  const { user } = useUser();
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweetMessage = e => {
    e.preventDefault();
    
//  ssssssssssssssssssssssssssssssss
  axios.post("/tweet",
    {
      text : tweetMessage,
  }
  )
  .then((response) => {
    const res =response.data
    if(response.status === 200){
      db.collection('posts').add({
        displayName: user.fullName,
        text: tweetMessage,
        label: res.label,
        time: new Date(),
        imageURL: user.imageUrl
      })
    }
  }).catch((error) => {
    // if (error.response) {
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
      // }
  })
    setTweetMessage("")
  }

  return (
    <div className="tweetBox">
        <div className="tweetBox__input">
            <input 
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            type="text" 
            placeholder="What's happening?"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendTweetMessage(e);
              }
            }}
             />
        </div>
        <div className="tweetbox_tweetButton">
            <CButton type="submit" onClick={sendTweetMessage} color="primary" shape="rounded-pill">Tweet</CButton>
        </div>
    </div>
  )
}
export default TweetBox
