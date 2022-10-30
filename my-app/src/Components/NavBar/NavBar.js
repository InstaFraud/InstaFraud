import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import './Nav.css'


function NavBar({inputData}) {
  return (
    <div className='nav-outercontainer'>
      <div className='nav-innercontainer'>
        <Link to='/dashboard'>
          <div className='logo'>
            <span className='insta-span'>Insta</span>
            <span className='faud-span'>Fraud</span>
          </div>
        </Link>
        <div className='search'>
          <div className='search-input'>
            <input type="text" placeholder='Search' />
            <div className='search-icon'>
              <CiSearch/>
            </div>
          </div>
        </div>
        <Link to='/profile'>
          <div className='logout-avatar'>
            <button className='logout-btn'>Logout</button>
            <img className= 'avatar' src="https://media.istockphoto.com/photos/beautiful-successful-latin-woman-smiling-picture-id1369508766?b=1&k=20&m=1369508766&s=170667a&w=0&h=xr3pk8VTmDoC9JXzEqMPL_4jZLiyIJWUMzKrBlVQiPI=" alt="" />
          </div>
        </Link>
      </div>
      
    </div>
  )
}

export default NavBar