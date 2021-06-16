import React from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import laptopFrame from '../../assets/laptop_blank.svg'
import laptopBase from '../../assets/lendit-laptop.png'

import './homepage-section.styles.css'


const SectionTest = ({isFooter, bgcolor, projectName, ...props}) => {
    return (
        <div className={`${isFooter ? 'section-test-footer-wrapper' : null } 
                        section-test-wrapper`} style={{backgroundColor:bgcolor}}>
                    {
            isFooter ? null : (
                <div className='section-test-text'>
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
                </ul>

                </div>
            )
        }
            <div className='laptop-container'>
                <img className='laptop-frame' src={laptopBase} alt='laptop frame'/>
                <Carousel 
                    className='laptop-screen' 
                    showThumbs={false} 
                    showStatus={false} 
                    renderIndicator={false}
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    >

                    <img className='c-img' src={props.image} alt={props.alt} />
                    <img className='c-img'src={props.image2} alt={props.alt2} />
                    <img className='c-img'src={props.image3} alt={props.alt2} />
                    <img className='c-img'src={props.image4} alt={props.alt2} />
                    <img className='c-img'src={props.image5} alt={props.alt2} />
                </Carousel>
            </div>
            
        </div>
    )
}



export default SectionTest
