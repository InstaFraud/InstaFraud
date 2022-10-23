import React from 'react'
import './AvatarStyle.css'

function Avatar({name, imageUrl, className=''}) {
  return (
    <div className='author'>
    <img src='https://media.istockphoto.com/photos/beautiful-successful-latin-woman-smiling-picture-id1369508766?b=1&k=20&m=1369508766&s=170667a&w=0&h=xr3pk8VTmDoC9JXzEqMPL_4jZLiyIJWUMzKrBlVQiPI=' alt="pict" />
    <p className={`post-text ${className}`}>Elsa Barbara</p>
  </div>
  )
}

export default Avatar