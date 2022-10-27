import React, { useState } from 'react'
import { FcLike } from "react-icons/fc"
import { AiOutlineMessage } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import './postStyle.css'
import Avatar from '../Avatar/Avatar'
import {InstFraudContext} from '../../Context/Context'
import ReadMoreLess from './../ReadMoreLess/ReadMoreLess'

function Post() {
  const {InstUsers, userPosts,likeAmount,LikeClickhandeler} = React.useContext(InstFraudContext)

  return (<>
    {
      userPosts.map((post)=>{
        return <div className='post-card'>
                  <Avatar className='namefont' name={`${post.firstName} ${post.lastName}`} imageUrl={post.url}/>
                  <div className='post-content'>
                    <ReadMoreLess>{post.postText}</ReadMoreLess>
                  </div>
                  <img src={post.url} alt="" className='post-image'/>
                  <div className='post-reaction'>
                      <div className='icons'><FcLike onClick={LikeClickhandeler}/> <span>{likeAmount}</span></div>
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
      })
    }
    </>)
}

export default Post