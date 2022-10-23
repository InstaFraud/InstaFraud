import React, { useState } from 'react'
import './LoginStyle.css'
import SignUp from '../SignUp/SignUp'
import { InstFraudContext } from '../../Context/Context'

function Login() {
  const {registerClicked, setRegisterClicked} = React.useContext(InstFraudContext)

  return (<>
    {registerClicked ? <SignUp/>:
    <form className='signin-form'>
        <div className='input username'><input type='text' placeholder='User name or email address'></input></div>
        <div className='input password'><input type='text' placeholder='Password'></input></div>
        <div className='landing-btn'>
            <button className='signin-btn' type='submit'>Sign-In</button>
            <button className='register-btn' type='submit' onClick={()=>setRegisterClicked(true)}>Register</button> 
        </div>
    </form>
    }
    </>
  )
}

export default Login