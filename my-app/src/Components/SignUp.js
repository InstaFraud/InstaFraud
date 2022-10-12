import React from 'react'

function SignUp() {
  return (
    <form className='signup-form'>
        <div className='input username'><input type='text' placeholder='User name or email address'></input></div>
        <div className='input password'><input type='text' placeholder='Password'></input></div>
        <div className='landing-btn'>
            <button className='signin-btn' type='submit'>Sign-In</button>
            <button className='register-btn' type='submit'>Register</button>  
        </div>
    </form>
  )
}

export default SignUp