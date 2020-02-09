import React from 'react';

import logo from '../../images/logob.png'
import './style.scss'

const Header = () => {
    return (
        <container>
            <div className='image-container'>
            <img src={logo } alt="where to med logo"/>
            </div>

      {/**  <img src={devices} alt="devices"/>*/} 
        </container>
    )
}

export default Header