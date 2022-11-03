import React from 'react'
import Avatar from '../Avatar/Avatar'
import './FriendSuggestionStyle.css'

function Suggestion() {
  return (
    <div className='suggestion-container'>
      <div className='suggestion-header'>
        <p className='friends'>Suggestion For You</p>
        <p>See all</p>
      </div>
      <div className='suggested-friends'>
        <Avatar name ='' imageUrl ='' className='fontAdjuster'/>
        <button className='follow-btn'>Follow</button>
      </div>
    </div>
    
  )
}

export default Suggestion