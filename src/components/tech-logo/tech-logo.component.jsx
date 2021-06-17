import React from 'react'

import './tech-logo.styles.css'

const TechLogo = ({ image, href, alt }) => {
    return (
        <a href={href} target='blank'>
            <img className='tech-logo' src={image} alt={alt} />
        </a>
    )
}

export default TechLogo
