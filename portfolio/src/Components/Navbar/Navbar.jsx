import React from 'react'
import './Navbar.css'
import drimt from '../../assets/DriMt.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={drimt} alt="DriMt Logo" className="navbar-logo" />
        </div>
    )
}

export default Navbar
