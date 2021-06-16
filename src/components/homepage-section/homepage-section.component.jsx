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
                    <li><img src={props.tech1} alt={props.techAlt1}/></li>
                    <li><img src={props.tech2} alt={props.techAlt2}/></li>
                    <li><img src={props.tech3} alt={props.techAlt3}/></li>
                    <li><img src={props.tech4} alt={props.techAlt4}/></li>
                    <li><img src={props.tech5} alt={props.techAlt5}/></li>
                    <li><img src={props.tech6} alt={props.techAlt6}/></li>
                    <li><img src={props.tech7} alt={props.techAlt7}/></li>
                    <li><img src={props.tech8} alt={props.techAlt8}/></li>
                    <li><img src={props.tech9} alt={props.techAlt9}/></li>
                    <li><img src={props.tech10} alt={props.techAlt10}/></li>
                </ul>

                </div> 
            <img className='section-image' src={image} alt={alt}></img>
        </div>
    )
}

export default Section
