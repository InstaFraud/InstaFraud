import React from 'react'
import Post from '../../Components/Post/Post'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import './DashboardStyle.css'


function DashboardPage() {
  return (<>
    <NavBar/>
    <Post/>
    <Footer/>
  </>
    
  )
}

export default DashboardPage