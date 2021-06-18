import React from 'react'


import './banner.styles.css'

import laptopLogo from '../../assets/banner.svg'

const Banner = () => {
    return (
        <div className='banner-wrapper'>
            <img className='laptop-logo ' src={laptopLogo} alt='laptop outline with code brackets on screen'/>
            <p className='banner-header'>Bryan Alvarez</p>
            <p className='banner-subheader'>FULL STACK WEB DEVELOPER</p>
        </div>
    )
}

export default Banner
