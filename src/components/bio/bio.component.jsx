import React from 'react'
import bioImg from '../../assets/profile-image.png'

import './bio.style.css'

const Bio = () => {
    return (
        <>
            <div className='mobile-section-header-container' >
                <h1 className='mobile-section-header'>Bio</h1>
            </div>
            <div className='bio-container'>
                <div className='bio-image-container'>
                    <img className='bio-image floating' src={bioImg} alt='bryan alvarez' ></img>
                </div>
                <div className='bio-text-container'>
                <h3 className='bio-text-header'>About Me</h3>
                    <p className='bio-text-detail'>
                    Hello, my name is Bryan Alvarez. I am a full stack web developer. I specialize on the React Framework, but also have experience with the Vue Framework and traditional (JS, CSS, HTML).  I attended college for computer information systems and computer science. I am continuously working to expand my expertise in the ever-changing world of web development. I also have a strong background in customer service, data analysis, and system administration. I am a self-starter who enjoys facing challenging problems head on and the satisfaction that comes with finding a solution.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Bio
