import React from 'react'
import Avatar from '../Avatar/Avatar'
import TwitterBtn from '../TwitterBtn/TwitterBtn'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import CloseIcon from '@mui/icons-material/Close';
import './PostFormStyle.css'
import {InstFraudContext} from '../../Context/Context'

function PostFormModal() {
  const {setIsTwittClicked} = React.useContext(InstFraudContext)

  return (
    <div className='modalContainer'>
    <div className='modalCardCont'>
      <div className='closebtn' onClick={()=>setIsTwittClicked(false)}>
        <CloseIcon />
      </div>
      <Avatar className='namefontWeight'/>
      <textarea placeholder='What is in your mind?'/>
      <div className='CTA-action'>
        <div className='postContol'>
          <InsertPhotoOutlinedIcon/>
          <EmojiEmotionsOutlinedIcon/>
          <div className='twitt-btn'>
           <TwitterBtn/>
          </div>
        </div>
    </div>
      
        
      </div>
    </div>
  )
}

export default PostFormModal