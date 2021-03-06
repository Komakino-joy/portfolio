import React, { useState, useEffect, useCallback } from 'react'
import BurgerMenu from '../burger-menu/burger-menu.component'

import linkedIn from '../../assets/linkedin.logo.svg'
import gitHub from '../../assets/github.logo.svg'

import './header.styles.css'

const Header = () => {

    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true)
    

    const handleScroll = useCallback(
        () => {
            const currentScrollPos = window.pageYOffset;
            const topOfPage = window.pageYOffset === 0;
            const bottomOfPage = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
            const userScrolledUp = prevScrollpos > currentScrollPos && currentScrollPos !== 0;
            setPrevScrollpos(currentScrollPos);
            
            if ( !userScrolledUp || bottomOfPage ) {
                setVisible(false);
            } 
            if ( userScrolledUp || topOfPage) {
                setVisible(true);
            }

        },
        [prevScrollpos],
    )
    
    useEffect(() => {
            window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [handleScroll])

    return (
        <>
        <div className={!visible ? 'site-header header--hidden' : 'site-header'}> 
        <BurgerMenu />
            <a href='https://github.com/Komakino-joy' target='_blank' rel="noreferrer">
                <img className='header-logo github-logo' src={gitHub} alt='github logo'/>
            </a> 
            <a href='https://www.linkedin.com/in/bryan-alvarez-8b37b8132' target='_blank' rel="noreferrer">
                <img className='header-logo' src={linkedIn} alt='linked in logo'/>
            </a> 
        </div>
        
        </>
    )
}

export default Header
