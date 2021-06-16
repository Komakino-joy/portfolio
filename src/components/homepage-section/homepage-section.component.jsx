import React from 'react'

import './homepage-section.styles.css'

const Section = ({ bgcolor, projectName, image, alt, ...props}) => {
    return (
        <div className='section-wrapper' style={{backgroundColor:bgcolor}}>
                <div className='section-text'>
                    <h3 className='section-header'>{projectName}</h3>

                    <h4 className='section-title'>Project brief</h4>
                    <p className='section-detail'> {props.desc1} </p>
                    
                    <br/>

                    <h4 className='section-title'>My role</h4>
                    <p className='section-detail'> {props.desc2} </p>

                    <br/>

                    <h4 className='section-title'>Technologies Used</h4>

                <ul className='tech-stack'>
                    <li className='tech-item'>{props.tech1}</li>
                    <li className='tech-item'>{props.tech2}</li>
                    <li className='tech-item'>{props.tech3}</li>
                    <li className='tech-item'>{props.tech4}</li>
                    <li className='tech-item'>{props.tech5}</li>
                    <li className='tech-item'>{props.tech6}</li>
                    <li className='tech-item'>{props.tech7}</li>
                    <li className='tech-item'>{props.tech8}</li>
                    <li className='tech-item'>{props.tech9}</li>
                    <li className='tech-item'>{props.tech10}</li>
                </ul>

                </div> 
            <img className='section-image' src={image} alt={alt}></img>
        </div>
    )
}

export default Section
