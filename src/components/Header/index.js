import React from 'react';

import logo from '../../images/logob.png'
import './style.css'

const Header = () => {
    return (
        <container>
            <div className='image-container'>
            <img src={logo } alt="where to med logo"/>
            </div>
        
        <ul>
            <li>Home</li>
            <li>The Solution</li>
            <li>Our Team</li>
            <li>Partnerships</li>
            <li>Contact Us</li>
            <li>Join</li>
        </ul>
        </container>
    )
}

export default Header