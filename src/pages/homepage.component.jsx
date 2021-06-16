import React from 'react'

import Banner from '../components/banner/banner.component'
import Section from '../components/homepage-section/homepage-section.component'
import SectionTest from '../components/homepage-section/section-test'

import lenditImg from '../assets/lendit-laptop.png'
import nasaImg from '../assets/nasa-mission-control-site.png'
import musShopImg from '../assets/mus-shop-laptop.png'
import crwnShopImg from '../assets/crwn-shop-laptop.png'

import invViewImg from '../assets/inv-view-cropped.png'
import progressView from '../assets/progress_view.PNG'
import shrinkView from '../assets/shrink-page.png'
import countDetail from '../assets/count-detail.png'
import reportUpload from '../assets/report-upload.png'

import htmlLogo from '../assets/html5.logo.svg'
import cssLogo from '../assets/css3.logo.svg'
import sassLogo from '../assets/sass.logo.svg'
import jsLogo from '../assets/js.logo.svg'
import reactLogo from '../assets/react.logo.svg'
import reduxLogo from '../assets/redux.logo.svg'
import sagaLogo from '../assets/redux-saga.logo.svg'
import firebaseLogo from '../assets/firebase.logo.svg'
import pgLogo from '../assets/postgres.logo.svg'
import mongoLogo from '../assets/mongodb.logo.svg'
import nodeLogo from '../assets/nodejs.logo.svg'
import vueLogo from '../assets/vue.logo.svg'


import TechLogo from '../components/tech-logo/tech-logo.component'

const react = () => (
    <TechLogo 
        href='https://reactjs.org/docs/getting-started.html'
        image={reactLogo}
        alt='react logo'
    />
) 

const redux = () => (
    <TechLogo 
        href='https://redux.js.org/'
        image={reduxLogo}
        alt='redux logo'
    />
) 

const saga = () => (
    <TechLogo 
        href='https://redux-saga.js.org/'
        image={sagaLogo}
        alt='redux saga logo'
    />
) 


const css = () => (
    <TechLogo 
        href='https://developer.mozilla.org/en-US/docs/Web/CSS'
        image={cssLogo}
        alt='css logo'
    />
) 


const node = () => (
    <TechLogo 
        href='https://nodejs.org/en/docs/'
        image={nodeLogo}
        alt='node logo'
    />
) 


const postgres = () => (
    <TechLogo 
        href='https://www.postgresql.org/'
        image={pgLogo}
        alt='postgres logo'
    />
) 


const Homepage = () => {
    return (
        <>
            <Banner/>

            <SectionTest 
                projectName='Inventory View'
                bgcolor='#ddd' 
                image={invViewImg} 
                image2={progressView} 
                image3={shrinkView} 
                image4={countDetail} 
                image5={reportUpload} 
                alt='inventory view project'
                tech1={react()} techAlt1='react logo'
                tech2={redux()} techAlt2='redux logo'
                tech3={saga()} techAlt3='redux saga logo'
                tech4={css()} techAlt4='css three logo'
                tech5={node()} techAlt5='node logo'
                tech6={postgres()} techAlt6='postgres logo'
                desc1='
                    The Lendit Asset Tracking application is a simple to use check-in/check-out system that
                    facilitates asset management. The application solves keeping track of all transactions 
                    made. Users of the app can pull reports for assets that are available, in use, and
                    those in quarantine. The historical data of all assets can also be pulled from this app.
                '
                desc2='
                    Designed the layout and components; 
                    built front-end and back-end;
                    tested application in development;
                    deployed to production. 
                '/>

            <Section 
                projectName='Lendit Asset Tracking'
                bgcolor='#ececec' 
                image={lenditImg} 
                alt='laptop with asset tracking app' 
                tech1={react()} 
                tech2={saga()} techAlt2='redux saga logo'
                tech3={node()} techAlt3='node logo'
                tech4={postgres()} techAlt4='postgres logo'


                desc1='
                    The Lendit Asset Tracking application is a simple to use check-in/check-out system that
                    facilitates asset management. The application solves keeping track of all transactions 
                    made. Users of the app can pull reports for assets that are available, in use, and
                    those in quarantine. The historical data of all assets can also be pulled from this app.
                '
                desc2='
                    Designed the layout and components; 
                    built front-end and back-end;
                    tested application in development;
                    deployed to production. 
                '
    
                />

            <Section bgcolor='#ddd' image={nasaImg} alt='laptop with nasa app'/>

            <Section bgcolor='#ececec' image={musShopImg} alt='laptop with mus shop app'/>

            <Section bgcolor='#ddd' image={crwnShopImg} alt='laptop with crown shop app'/>



        </>
    )
}

export default Homepage
