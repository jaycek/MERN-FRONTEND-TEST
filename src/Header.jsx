import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

const Header = () => {

  const tokenrelease=()=>{
    sessionStorage.removeItem('userToken');
  }
  return (
    <div>
      <header className='navbar'>
        <nav className='links'>
            <ul>
                <li className='link'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='link'>
                    <Link to='/new'>New Blog</Link>
                </li>
                <li className='link'>
                    <Link to='/blogs'>Blogs</Link>
                </li>
                <li className='link'>
                    <Link to='/signup'>Sign Up</Link>
                </li>
                <li className='link'>
                    <Link to='/login'>Login</Link>
                </li>
                <li className='link'>
                    <Link to='/' onClick={tokenrelease}>Logout</Link>
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
