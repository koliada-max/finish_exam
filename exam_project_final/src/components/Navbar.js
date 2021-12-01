import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../bar1.svg'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <Link to='/'>
                    <img src={logo} alt='cocktail logo'
                        className='logo'></img>
                </Link>
                <ul className='nav-links'>
                    <li className='nav_link'>
                        <Link to='/'>
                            Cocktails
                        </Link>
                    </li>
                    <li className='nav_link'>
                        <Link to='/menu'>
                            Foods
                        </Link>
                    </li>
                    <li className='nav_link'>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
