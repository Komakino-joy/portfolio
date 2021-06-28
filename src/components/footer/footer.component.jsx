import React from 'react'

import LogoCloud from '../logo-cloud/logo-cloud.component'


import personCoding from '../../assets/person-coding.svg'

import './footer.styles.css'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <img className='footer-image' src={personCoding} alt='person-coding'></img>
        </div>
    )
}

export default Footer
