import React from 'react'

import { 
    html, js, vue, react, redux, saga, css, sass, tailwind, bootstrap, apple,
    styled, node, postgres, mongodb, firebase, photoshop, postman, oracle, windows, python
} from '../tech-logo/logos'

import './logo-cloud.styles.css'
import '../../App.css'

import personCoding from '../../assets/person-coding.svg'

const LogoCloud = () => {
    
    const logoList = [
        html(),  js(), css(), vue(),  redux(),  saga(),  react(),  
        sass(), tailwind(), styled(), bootstrap(),  photoshop(), node(), 
         postman(), postgres(), oracle(), apple(),  windows(), firebase(), mongodb(),
         python(),
    ]
    

    return (
        <div id='skills-section'>
            <main>
                <ul className="container">
                <img 
                    className='grid-image' 
                    src={personCoding} 
                    alt='person-coding'
                />
                    {logoList.map((logo, index) => (
                        <div className={`l${index + 1}`}>
                            <li className='list-logo'>{logo}</li>
                        </div>
                    ))}
                </ul>

                {/* Classes for mobile views */}
                <div className='mobile-section-header-container' >
                    <h1 className='mobile-section-header'>Skills</h1>
                </div>
                <div className="mobile-container">
                <ul className='mobile-logo-list'>
                    {logoList.map((logo, index) => (
                        <div className='mobile-logo'>
                            <li>{logo}</li>
                        </div>
                    ))}
                </ul>
                    <img 
                        className='grid-image' 
                        src={personCoding} 
                        alt='person-coding'
                    />
                </div>

            </main>
        </div>
    )
}

export default LogoCloud
