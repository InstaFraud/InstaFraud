import React from 'react'
import './postStyle.css'
import Avatar from '../Avatar/Avatar'
import {InstFraudContext} from '../../Context/Context'
import ReadMoreLess from './../ReadMoreLess/ReadMoreLess'
import PostReaction from '../PostReaction/PostReaction';

function Post() {
  const {userPosts,viewImagehandler} = React.useContext(InstFraudContext)

  return (<>
    {
      userPosts.map((post)=>{
        return <div className='post-card' key={post.id}>
                  <Avatar className='namefont' name={`${post.firstName} ${post.lastName}`} imageUrl={post.url}/>
                  <div className='post-content'>
                    <ReadMoreLess>{post.postText}</ReadMoreLess>
                  </div>
                  <img src={post.url} alt="" className='post-image' onClick={()=>viewImagehandler(post.id)}/>
                  <PostReaction/>
            </div>
      })
    }
    </>)
}

export default Post