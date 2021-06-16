import React from 'react'

import linkedIn from '../../assets/linkedin.logo.svg'
import gitHub from '../../assets/github.logo.svg'

import './header.styles.css'

const Header = () => {
    return (
        <div className='site-header'> 
            <a href='https://www.linkedin.com/in/bryan-alvarez-8b37b8132' target='_blank' rel="noreferrer">
                <img className='header-logo' src={linkedIn} alt='linked in logo'/>
            </a> 
                
            <a href='https://github.com/Komakino-joy' target='_blank' rel="noreferrer">
                <img className='header-logo github-logo' src={gitHub} alt='github logo'/>
            </a> 
        </div>
    )
}

export default Header
