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

const Section = ({ projectName, description, images, mobileImage, techStack, liveDemo, githubRepo}) => {

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
            { width > 800 ?
                (
                    <div className='section-wrapper'>
                        <div className='section-text'>
                            <h3 className='section-header'>{projectName}</h3>
                            <h4 className='section-title'>Project Description</h4>
                            <p className='section-detail'> {description} </p>
                            <br/>
                            <h4 className='github-title'>GitHub Repository</h4>
                            <a href={githubRepo} target='_blank' rel='noreferrer'>
                                <p className='section-link'> {githubRepo} </p>
                            </a>
                            { liveDemo &&
                                (<> 
                                    <h4 className='section-title'>Live Demonstration</h4>
                                    <a href={liveDemo} target='_blank' rel='noreferrer'>
                                        <p className='section-link'> {liveDemo} </p>
                                    </a>
                                </>)
                            }
                            <br/>
                            <h4 className='section-title'>Technologies Used</h4>
                            <ul className='tech-stack'>
                                {
                                    techStack.map( tech => (
                                        <li key={tech.props.title} className='tech-item'> {tech} </li>
                                    ))
                                }
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
                                interval={3000}
                                >
                                {
                                    images.map(image => (
                                        <img 
                                            key={image.id} 
                                            className='c-img'
                                            src={image.img}
                                            alt={image.alt}
                                        />
                                    ))
                                }
                            </Carousel>
                        </div>
                    </div>
                ) : (
                <Accordion allowZeroExpanded className='accordion'>
                    <AccordionItem className='accordion-item'>
                        <AccordionItemHeading className='accordion-item-heading' onClick={expandSection}>
                            <AccordionItemButton className='accordion-item-button'>
                                <i className={ !isExpanded ?  'fas fa-angle-right dropdown-icon' : 'fas fa-angle-down dropdown-icon' }></i>
                                {projectName}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className='accordion-item-panel'>
                            <div className='section-wrapper'>
                                <div className='section-text'>
                                    <h3 className='section-header'>{projectName}</h3>
                                    <h4 className='section-title'>Project Description</h4>
                                    <p className='section-detail'> {description} </p>
                                    <br/>
                                    <h4 className='github-title'>GitHub Repository</h4>
                                    <a href={githubRepo} target='_blank' rel='noreferrer'>
                                        <p className='section-link'> {githubRepo} </p>
                                    </a>
                                    {liveDemo &&
                                        <>
                                            <h4 className='section-title'>Live Demonstration</h4>
                                            <a href={liveDemo} target='_blank' rel='noreferrer'>
                                                <p className='section-link'> {liveDemo} </p>
                                            </a>
                                        </>
                                    }
                                    <br/>
                                    <h4 className='section-title'>Technologies Used</h4>
                                    <ul className='tech-stack'>
                                        {
                                            techStack.map( tech => (
                                                <li key={tech.props.title} className='tech-item'> {tech} </li>
                                            ))
                                        }
                                    </ul>
                            </div>
                                <img className='mobile-image' src={mobileImage} alt='iphone'/>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            )}
        </>
    )
}

export default Section
