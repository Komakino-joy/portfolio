import React, { useState, useEffect, useCallback } from 'react'
import BurgerMenu from '../burger-menu/burger-menu.component'

import classnames from "classnames";

import linkedIn from '../../assets/linkedin.logo.svg'
import gitHub from '../../assets/github.logo.svg'

import './header.styles.css'

const Header = () => {

    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true)

    const handleScroll = useCallback(
        () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollpos > currentScrollPos;
            
            setPrevScrollpos(currentScrollPos);
            setVisible(visible);
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
        <BurgerMenu/>
        <div className={classnames("site-header", {
            "header--hidden": !visible
          })}> 
            
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
