import React from 'react'
import Post from '../../Components/Post/Post'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Suggestion from '../../Components/FriendSuggestion/Suggestion'
import Friends from '../../Components/Friends/Friends'
import TwitterBtn from '../../Components/TwitterBtn/TwitterBtn'
import PostFormModal from '../../Components/PostFormModal/PostFormModal'
import './DashboardStyle.css'
import {InstFraudContext} from '../../Context/Context'


function DashboardPage() {
  const {isTwittClicked, setIsTwittClicked} = React.useContext(InstFraudContext)

  return (<>
    <NavBar/>
    <div className='dashboardcontainer'>
      <div>
        <Friends/>
        <div onClick={()=>setIsTwittClicked(true)}>
          <TwitterBtn className ='trail'/>
        </div>
        
      </div>
      <Post/>
      <Suggestion/>
    </div>
    {isTwittClicked && <PostFormModal/>}
    <Footer/>
  </>
    
  )
}

export default DashboardPage