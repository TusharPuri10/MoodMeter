import React , {useState} from 'react'
import "../styles/TweetBox.css"
import  {CButton} from '@coreui/react'
import db from './Firebase'
import axios from "axios";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweetMessage = e => {
    e.preventDefault();
    
//  ssssssssssssssssssssssssssssssss
  axios.post("/tweet",
    {
      displayName : "Tushar",
      userName : "tushakasfj",
      text : tweetMessage,
      label : 0
  }
  )
  .then((response) => {
    const res =response.data
    if(response.status === 200){
      db.collection('posts').add({
        displayName: 'Tushar Puri',
        userName: 'TusharP78096727',
        text: tweetMessage,
        label: res.label
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
      <form>
        <div className="tweetBox__input">
            <input 
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            type="text" 
            placeholder="What's happening?" />
        </div>
        <CButton type="submit" onClick={sendTweetMessage} className="tweetbox_tweetButton" color="primary" shape="rounded-pill">Tweet</CButton>
      </form>
    </div>
  )
}
export default TweetBox
