import React from 'react'
import "./Post.css"
import CIcon from '@coreui/icons-react'
import { cilUser } from '@coreui/icons'
function Post({
    displayName,
    userName,
    text,
    label
}) {

  function checksentiment() {
    if (label == 0)
    {
      return (
      <div className="Sentiment_positive">
        <p>Cheerful</p>
      </div>
      )
    }
    else
    {
      return (
        <div className="Sentiment_negative">
          <p>Depressive</p>
        </div>
        )
    }
  }
  
  return (
    <div className="post">
      <div className='post__body'>
        <div className='post__headerText'>
            <div className='profilepic'><CIcon icon={cilUser} size="sm"></CIcon></div>
            <h3>
                {displayName}
            </h3>
            <h4>
                @{userName}
            </h4>
        </div>

        <div className='post__headerDescription'>
            <p>{text}</p>
        </div>
      </div>
      {checksentiment()}
    </div>
  )
}

export default Post
