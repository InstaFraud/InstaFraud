import React, { useState } from 'react'
import Login from '../../Components/Login/Login'
import SignUp from '../../Components/SignUp/SignUp'
import './LandingStyle.css'

function LandingPage() {
    const [logedin, setLogedin] =useState(false)
    
  return (
    <main className='land-page'>
      <div className='landingpage'>
        <header className='app-name'>
            <span className='insta'>Insta</span><span className='faud'>Fraud</span>
        </header>
        {logedin ? <Login/> : <SignUp/>}
      </div>
    </main>
  )
}

export default LandingPage