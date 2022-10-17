import React, { useState } from 'react'
import { FcLike } from "react-icons/fc"
import { AiOutlineMessage } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import './postStyle.css'
import {InstFraudContext} from '../../Context/Context'

function Post() {
  const {InstUsers} = React.useContext(InstFraudContext)

  return (
    <div className='post-card'>
      <div className='author'>
        <img src='https://media.istockphoto.com/photos/beautiful-successful-latin-woman-smiling-picture-id1369508766?b=1&k=20&m=1369508766&s=170667a&w=0&h=xr3pk8VTmDoC9JXzEqMPL_4jZLiyIJWUMzKrBlVQiPI=' alt="pict" />
        <p className='post-text'>Elsa Barbara</p>
      </div>
      <p className='post-content'> when i was bla bla</p>
      <img src="https://i.pinimg.com/736x/76/2e/50/762e502a09ad48eff94361fa113d8b0a.jpg" alt="" className='post-image'/>
      <div className='post-reaction'>
          <div className='icons'><FcLike/> <span>100</span></div>
          <div className='icons'> <AiOutlineMessage/><span>500</span></div>
          <div className='icons'><FaShareAlt/><span>30</span></div>
      </div>
      <div id='comment-section'>
         <div id="commentArea">
           <textarea name=""  placeholder='Add your comment'></textarea>
         </div>
         <div className='post-btn'>
           <button id='post-btn'>Post</button>
          </div>
      </div>
    </div>
  )
}

export default Post