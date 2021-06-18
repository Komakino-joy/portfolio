import React from 'react'

import './tech-logo.styles.css'

const TechLogo = ({ image, href, alt, title }) => {
    return (
        <a href={href} target='blank' title={title}>
            <img className='tech-logo' src={image} alt={alt} />
        </a>
    )
}

export default TechLogo
