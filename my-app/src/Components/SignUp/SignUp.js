import React from 'react'
import './SignupStyle.css'

function SignUp() {
  return (
    <form className='signup-form'>
        <div className='input Firstname'><input type='text' placeholder='First Name'></input></div>
        <div className='input Lastname'><input type='text' placeholder='Last Name'></input></div>
        <div className='input Email'><input type='text' placeholder='Email address'></input></div>
        <div className='input Phone'><input type='text' placeholder='Phone Number'></input></div>
        <div className='input password'><input type='text' placeholder='Password'></input></div>
        <div className='input Confirmpassword'><input type='text' placeholder='Confirm Password'></input></div>
        <div className='register-btn'>
            <button className='submit-btn' type='submit'>Submit</button>
        </div>
    </form>
  )
}

export default SignUp