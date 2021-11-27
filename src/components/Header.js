import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/pokeball-icon.png'

const Header = () => (
    <nav className='header' >
        <Link to='/' className=''>
            <img src={logo} alt='pokeball' style={{ height: '40px', width: '40px' }} />
        </Link>
        <Link to='/' style={{textDecoration: 'none', color: '#ffffff'}}>
            <div className="header__title">
                <h1>Pokedex</h1>
            </div>
        </Link>
    </nav>
)

export default Header
