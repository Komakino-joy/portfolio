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
                    <i class="fas fa-address-card menu-icon"/>ABOUT
                </Link>
                <Link 
                    onClick={setOpen}
                    activeClass="active" 
                    to="projects-section" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                    <i class="fas fa-tools menu-icon"></i>PROJECTS
                </Link>
                <Link 
                    onClick={setOpen}
                    activeClass="active" 
                    to="skills-section" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                    <i class="fas fa-toolbox menu-icon"></i>SKILLS
                </Link>
            </Menu>
        </>
    )
}

export default BurgerMenu
