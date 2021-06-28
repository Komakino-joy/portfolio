import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-scroll'

import './burger-menu.styles.css'

const BurgerMenu = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Menu isOpen={ open }>
                <Link 
                    onClick={setOpen}
                    activeClass="active" 
                    to="about-section" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                    ABOUT
                </Link>
                <Link 
                    onClick={setOpen}
                    activeClass="active" 
                    to="projects-section" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                    PROJECTS
                </Link>
                <Link 
                    onClick={setOpen}
                    activeClass="active" 
                    to="skills-section" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                    SKILLS
                </Link>
            </Menu>
        </>
    )
}

export default BurgerMenu
