import React from 'react';

import logo from '../../images/logob.png'
import './style.scss'

const Header = () => {
    return (
        <>
            <div className='image-container'>
            <img src={logo } alt="where to med logo"/>
            </div>

      {/**  <img src={devices} alt="devices"/>*/} 
        </>
    )
}

export default Header