import React from 'react'
import bioImg from '../../assets/profile-image.png'

import './bio.style.css'

const Bio = () => {
    return (
        <div className='bio-container'>
            <div className='bio-image-container'>
                <img className='bio-image floating' src={bioImg} alt='bryan alvarez' ></img>
            </div>
            <div className='bio-text-container'>
            <h3 className='bio-text-header'>Hello World</h3>
                <p className='bio-text-detail'>
                    Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Curabitur porttitor lorem lacus, 
                    eget maximus eros dictum non. Maecenas condimentum 
                    ipsum quis pharetra malesuada. Mauris accumsan ut 
                    nisi at malesuada. Morbi lacus ligula, pellentesque 
                    id mi tempus, facilisis pharetra neque. Vivamus vel 
                    purus in metus consectetur feugiat. In vel tempus 
                    augue. Sed urna neque, tempus at eros et, rhoncus 
                    fermentum dui.
                </p>
            </div>
        </div>
    )
}

export default Bio
