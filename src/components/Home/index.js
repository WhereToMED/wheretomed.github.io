import React from 'react';
import './style.scss'
import devices from '../../images/dashboard_full_3.png'

const Home = () => {
    return (
        <container>
            <main className='home'>

                <div>
                    <div className='text'> 
                        <h2>Find better choices near you.</h2>
                        <p>The days of running shop to shop to find the most affordable good quality medicine are over. WhereToMED brings you instant medicine comparison to save you time and money.</p>
                    </div>
                    <button className='get-started'>Get Started</button>
                </div>

                <div >
                 <img className='devices' src={devices} />
                </div>
            
            </main>
        </container>
    )
}

export default Home