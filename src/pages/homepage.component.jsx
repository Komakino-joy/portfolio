import React from 'react'

import Banner from '../components/banner/banner.component'
import Section from '../components/homepage-section/homepage-section.component'

import workingImg from '../assets/person-coding.svg'
import lenditImg from '../assets/lendit-laptop.png'
import nasaImg from '../assets/nasa-mission-control-site.png'
import musShopImg from '../assets/mus-shop-laptop.png'
import crwnShopImg from '../assets/crwn-shop-laptop.png'

import htmlLogo from '../assets/html5.logo.svg'

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Section bgcolor='#ececec' image={lenditImg} alt='laptop with asset tracking app' tech1={htmlLogo} techAlt1='html five logo'/>
            <Section bgcolor='#ddd' image={nasaImg} alt='laptop with nasa app'/>
            <Section bgcolor='#ececec' image={musShopImg} alt='laptop with mus shop app'/>
            <Section bgcolor='#ddd' image={crwnShopImg} alt='laptop with crown shop app'/>
            <Section isFooter bgcolor='#ffffff' image={workingImg} alt='person coding at desk'/>
        </div>
    )
}

export default Homepage
