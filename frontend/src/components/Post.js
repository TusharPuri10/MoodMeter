import React from 'react'
import "../styles/Post.css"
function Post({
    displayName,
    text,
    label,
    imageURL
}) {
  function checksentiment() {
    if (label === 0 || label === '0')
    {
      return (
      <div className="Sentiment_positive">
        <p>Positive</p>
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
            <div className='profilepic'><img src={imageURL} alt='pfp'/></div>
            <h3>
                {displayName}
            </h3>
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
