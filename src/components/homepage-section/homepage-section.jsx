import React, { useEffect,  useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import laptopBase from '../../assets/laptop.png'

import './homepage-section.styles.css'

const Section = ({isFooter, bgcolor, projectName, ...props}) => {

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    const [width, setWidth] = useState(window.innerWidth);
    const [isExpanded, setIsExpanded] = useState(false);

    const updateWidth = () => {
        setWidth(window.innerWidth);
      };


    const expandSection = () => {
        setIsExpanded(!isExpanded);
    };  

    return (
        <>
            {width > 800 ?
                (
                    <div className='section-wrapper' style={{backgroundColor:bgcolor}}>
                        <div className='section-text'>
                            <h3 className='section-header'>{projectName}</h3>
                            <h4 className='section-title'>Project Description</h4>
                            <p className='section-detail'> {props.desc1} </p>
                            <br/>
                            <h4 className='github-title'>GitHub Repository</h4>
                            <a href={props.githubRepo}>
                                <p className='section-link'> {props.githubRepo} </p>
                            </a>
                            <a href={props.githubRepo2}>
                                <p className='section-link'> {props.githubRepo2} </p>
                            </a>
                            {props.liveDemo ?
                                (<> 
                                    <h4 className='section-title'>Live Demonstration</h4>
                                    <a href={props.liveDemo}>
                                        <p className='section-link'> {props.liveDemo} </p>
                                    </a>
                                </>)
                            : null
                            }
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
                            </ul>
                    </div>
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
                                <img className='c-img' src={props.image1} alt={props.alt1} />
                                <img className='c-img' src={props.image2} alt={props.alt2} />
                                <img className='c-img' src={props.image3} alt={props.alt3} />
                                <img className='c-img' src={props.image4} alt={props.alt4} />
                            </Carousel>
                        </div>
                    </div>
                ) : (
                
                <Accordion allowZeroExpanded className='accordion'>
                    <AccordionItem className='accordion-item'>
                        
                        <AccordionItemHeading className='accordion-item-heading' onClick={expandSection}>
                            <AccordionItemButton className='accordion-item-button'>
                            {/* <i class="fas fa-chevron-right dropdown-icon"></i> */}
                            <i class={ !isExpanded ?  'fas fa-angle-right dropdown-icon' : 'fas fa-angle-down dropdown-icon' }></i>
                                {projectName}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='accordion-item-panel'>
                            <div className='section-wrapper' style={{backgroundColor:bgcolor}}>
                                <div className='section-text'>
                                    <h3 className='section-header'>{projectName}</h3>
                                    <h4 className='section-title'>Project Description</h4>
                                    <p className='section-detail'> {props.desc1} </p>
                                    <br/>
                                    <h4 className='github-title'>GitHub Repository</h4>
                                    <a href={props.githubRepo}>
                                        <p className='section-link'> {props.githubRepo} </p>
                                    </a>
                                    <a href={props.githubRepo2}>
                                        <p className='section-link'> {props.githubRepo2} </p>
                                    </a>
                                    {props.liveDemo ?
                                        <>
                                            (<h4 className='section-title'>Live Demonstration</h4>
                                            <a href={props.liveDemo}>
                                                <p className='section-link'> {props.liveDemo} </p>
                                            </a>)
                                        </>
                                    : null
                                    }
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
                                    </ul>
                            </div>
                                <img className='mobile-image' src={props.mobileImage} alt='iphone'/>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>

            )}
        </>
    )
}



export default Section
