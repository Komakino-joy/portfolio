import React from 'react'

const TechLogo = ({ image, href, alt }) => {
    return (
        <a href={href} target='blank'>
            <img src={image} alt={alt} height='60px'/>
        </a>
    )
}

export default TechLogo
