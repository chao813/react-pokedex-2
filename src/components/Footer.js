import React from 'react';
import love from '../images/love-icon.png'

const Footer = () => (
    <footer className='footer' style={{gap: '5px'}}>
        <p>Made with</p>
        <img src={love} alt='love' style={{ height: '20px', width: '20px',  }} />
        <p>by</p>

        <a href= 'https://github.com/Grace-00' target='_blank' rel="noreferrer"  style={{ textDecoration: 'none', color: '#000000' }}>
            <p>Grace</p>
        </a>
    </footer>
)


export default Footer
