import React from 'react'
import { FcLike } from "react-icons/fc"
// import { FiMessageSquare } from "react-icon/md"
function Post() {
  return (
    <div className='post-card'>
      <div className='author'>
        <img src='https://thumbs.dreamstime.com/b/beautiful-woman-sexy-face-looks-camera-attractive-model-fashion-makeup-beauty-long-curly-hair-closeup-portrait-180076401.jpg' alt="pict" />
        <p className='post-text'>Elsa Barbara</p>
      </div>
      <p className='post-content'> when i was bla bla</p>
      <img src="https://i.pinimg.com/736x/76/2e/50/762e502a09ad48eff94361fa113d8b0a.jpg" alt="" className='post-image'/>
      <div className='post-reaction'>
        <FcLike/>
       {/* <AiOutlineMessage/> */}
      </div>
      <div id='comment-section'>
      <input type="text" placeholder='Add comment'></input>
      {/* <button id='post-btn'>Post</button> */}
      </div>
    </div>
  )
}

export default Post