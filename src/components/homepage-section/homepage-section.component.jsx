import React from 'react'

import './homepage-section.styles.css'

const Section = ({isFooter, bgcolor, image, alt, tech1, techAlt1 }) => {
    return (
        <div className={`${isFooter ? 'section-footer-wrapper' : null } section-wrapper`} style={{backgroundColor:bgcolor}}>
        {
            isFooter ? null : (
                <div className='section-text'>
                    <h3>Project Title</h3>

                    <h4>Project brief</h4>
                    <p>
                        Ad sunt laborum ut quis magna magna commodo sit occaecat qui sit. 
                        Ex ea nisi sunt irure mollit occaecat anim sint magna. Ex incididunt minim nisi laboris elit sunt ex. 
                        Tempor proident elit laborum quis commodo id voluptate mollit do nostrud nisi. 
                        Reprehenderit sunt reprehenderit adipisicing et cupidatat ea proident proident voluptate ut Lorem esse do aute.
                        Ex pariatur consectetur aliquip occaecat cupidatat nostrud cillum
                    </p>
                    
                    <br/>

                    <h4>My role</h4>
                    <p>
                        Ad sunt laborum ut quis magna magna commodo sit occaecat qui sit. 
                        Ex ea nisi sunt irure mollit occaecat anim sint magna. Ex incididunt minim nisi laboris elit sunt ex. 
                        Tempor proident elit laborum quis commodo id voluptate mollit do nostrud nisi. 
                        Reprehenderit sunt reprehenderit adipisicing et cupidatat ea proident proident voluptate ut Lorem esse do aute.
                        Ex pariatur consectetur aliquip occaecat cupidatat nostrud cillum
                    </p>

                    <br/>

                    <h4>Browser support</h4>
                    <p>
                        Ad sunt laborum ut quis magna magna commodo sit occaecat qui sit. 
                        Ex ea nisi sunt irure mollit occaecat anim sint magna. Ex incididunt minim nisi laboris elit sunt ex. 
                        Tempor proident elit laborum quis commodo id voluptate mollit do nostrud nisi. 
                        Reprehenderit sunt reprehenderit adipisicing et cupidatat ea proident proident voluptate ut Lorem esse do aute.
                        Ex pariatur consectetur aliquip occaecat cupidatat nostrud cillum
                    </p>

                <ul className='tech-stack'>
                    <li><img src={tech1} alt={techAlt1}/></li>
                    <li>code1</li>
                    <li>code1</li>
                    <li>code1</li>
                </ul>

                </div>
            )
        }
            <img className='section-image' src={image} alt={alt}></img>
        </div>
    )
}

export default Section
