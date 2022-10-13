import React, { useState } from 'react'
import Login from '../Components/Login'
import SignUp from '../Components/SignUp'

function LandingPage() {
    const [logedin, setLogedin] =useState(false)
  return (
    <div className='landingpage'>
        <header className='app-name'>
            <span className='insta'>Insta</span><span className='faud'>Fraud</span>
        </header>
        {logedin ? <Login/> :<SignUp/>}
    </div>
  )
}

export default LandingPage