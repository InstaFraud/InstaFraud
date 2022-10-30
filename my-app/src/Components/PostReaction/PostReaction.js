import React from 'react'
import { FcLike } from "react-icons/fc"
import { AiOutlineMessage } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import {InstFraudContext} from '../../Context/Context'
import './PostReactionStyle.css'

function PostReaction() {
    const {likeAmount,LikeClickhandeler} = React.useContext(InstFraudContext)
  return (
    <div>
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
  )
}

export default PostReaction