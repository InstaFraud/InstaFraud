import React from 'react'
import Avatar from '../Avatar/Avatar'
import './CommentStyle.css'
import {comments} from '../../Context/MockData/UsersData'
import { InstFraudContext } from '../../Context/Context'
function Comment({className=''}) {
    const {viewComment}= React.useContext(InstFraudContext)
  return (<div className={viewComment ? 'commentContainer':'commentContainer2'}>
                {comments.map((singleComment)=>{
                    return <div key={singleComment.id}>
                                <Avatar name={`${singleComment.firstName} ${singleComment.lastName}`} imageUrl={singleComment.AvatarImage}/>
                                <p className="commenttext"> {singleComment.postText}</p>
                           </div>
                    })
                }
        </div>)
}

export default Comment