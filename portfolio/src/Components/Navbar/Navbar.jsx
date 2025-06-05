import React from 'react'
import './Navbar.css'
import drimt from '../../assets/DriMt.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={drimt} alt="DriMt Logo" className="navbar-logo" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar
