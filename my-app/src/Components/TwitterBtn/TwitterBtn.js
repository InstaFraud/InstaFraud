import React from 'react'
import './twitterBtnStyle.css'

function TwitterBtn({className=''}) {
  return (
    <button className={`tweet-btn ${className}`}>Tweet</button>
  )
}

export default TwitterBtn