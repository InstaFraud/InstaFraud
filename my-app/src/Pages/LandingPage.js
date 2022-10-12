import React from 'react'
import SignUp from '../Components/SignUp'

function LandingPage() {
  return (
    <div className='landingpage'>
        <header className='app-name'>
            <span className='insta'>Insta</span><span className='faud'>Fraud</span>
        </header>
        <SignUp/>
    </div>
  )
}

export default LandingPage