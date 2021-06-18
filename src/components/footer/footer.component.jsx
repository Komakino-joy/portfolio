import React from 'react'

import personCoding from '../../assets/person-coding.svg'

import './footer.styles.css'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <img className='footer-image' src={personCoding} alt='person-coding'></img>
            <footer>Thank you for stopping by...</footer>
        </div>
    )
}

export default Footer
