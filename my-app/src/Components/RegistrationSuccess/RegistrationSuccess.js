import React from 'react'
import { Link } from 'react-router-dom'

function RegistrationSuccess() {
  return (
    <div>
    <h1>Registration Successful!!!</h1>
    <Link to='/signin'>SignIn</Link>
    </div>
  )
}

export default RegistrationSuccess