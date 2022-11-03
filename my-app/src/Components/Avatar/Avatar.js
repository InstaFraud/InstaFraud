import React from 'react'
import './AvatarStyle.css'

function Avatar({name, imageUrl, className=''}) {
 
  return (
    <div className='author'>
    <img src={`${imageUrl ||'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbX0lZHrfSwrUBz8gcmZ1mlUEXB8ULTGoJll6sEtiQ4VUiX-LwYUkOl9lv3MqgmRquack&usqp=CAU'} `} alt="user picture" />
    <p className={`post-text ${className}`}>{name || 'User'}</p>
  </div>
  )
}

export default Avatar