import React from 'react'

import Banner from '../components/banner/banner.component'
import SectionTest from '../components/homepage-section/section-test'

import invViewImg from '../assets/inv-view-cropped.png'
import progressView from '../assets/progress_view.PNG'
import shrinkView from '../assets/shrink-page.png'
import reportUpload from '../assets/report-upload.png'

import lenditSignIn from '../assets/sign-in.png' 
import lenditHome from '../assets/lendit-home.png'
import lenditAssets from '../assets/assets-in-use.png'
import lenditActivity from '../assets/activity-tracking.png'

import launchControlHome from '../assets/launch-schedule-home.png'
import launchControlUpcoming from '../assets/launch-schedule-upcoming.png'
import launchControlHistory from '../assets/launch-schedule-history.png'


import proShopHome from '../assets/pro-home.png'
import proShopProduct from '../assets/pro-cam.png'
import proShopCheckout from '../assets/pro-checkout.png'
import proShopAdmin from '../assets/pro-admin.png'


import crwnHome from '../assets/crwn-shop.PNG'
import crwnShop from '../assets/shop-page.png'
import crwnSignIn from '../assets/sign-in-crwn.png'
import crwnCart from '../assets/crwn-checkout.png'

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

const html = () => (
    <TechLogo 
        href='https://developer.mozilla.org/en-US/docs/Web/HTML'
        image={htmlLogo}
        alt='html five logo'
    />
) 

const sass = () => (
    <TechLogo 
        href='https://sass-lang.com/'
        image={sassLogo}
        alt='sass logo'
    />
) 

const js = () => (
    <TechLogo 
        href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        image={jsLogo}
        alt='javascript logo'
    />
) 

const firebase = () => (
    <TechLogo 
        href='https://firebase.google.com/?gclid=CjwKCAjwwqaGBhBKEiwAMk-FtOODwv2rC8fOc37MnA1K6-ygdvkrHJM4pREmprtZtKHL5rkR27h73RoCWVUQAvD_BwE&gclsrc=aw.ds'
        image={firebaseLogo}
        alt='google firebase logo'
    />
) 

const mongodb = () => (
    <TechLogo 
        href='https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_united_states_search_brand_atlas_desktop&utm_term=mongodb%20docs&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=1718986498&gclid=CjwKCAjwwqaGBhBKEiwAMk-FtGMpoI5990hy209BQHDBq1aSl04wgK4LK_bRHwqpX7xfEulLjOny8hoCfcsQAvD_BwE'
        image={mongoLogo}
        alt='mongo db logo'
    />
) 


const vue = () => (
    <TechLogo 
        href='https://v3.vuejs.org/'
        image={vueLogo}
        alt='vue logo'
    />
) 


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
                image1={invViewImg} 
                image2={progressView} 
                image3={shrinkView} 
                image4={reportUpload} 
                alt='inventory view project'
                tech1={react()} 
                tech2={redux()} 
                tech3={saga()}
                tech4={css()} 
                tech5={node()}
                tech6={postgres()} 
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

            <SectionTest 
                projectName='Lendit Asset Tracking'
                bgcolor='#ececec' 
                image1={lenditSignIn} 
                image2={lenditHome} 
                image3={lenditAssets} 
                image4={lenditActivity} 
                alt='laptop with asset tracking app' 
                tech1={react()} 
                tech2={saga()} 
                tech3={node()} 
                tech4={postgres()} 

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

            <SectionTest 
                projectName='Launch Tracking App'
                bgcolor='#ddd' 
                image1={launchControlHome} 
                image2={launchControlUpcoming} 
                image3={launchControlHistory} 
                image4={launchControlHome} 
                tech1={react()} 
                tech2={saga()} 
                tech3={node()} 
                tech4={css()} 
                tech5={postgres()} 


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

            <SectionTest 
                projectName='Mus Shop'
                bgcolor='#ececec' 
                image1={proShopHome} 
                image2={proShopProduct} 
                image3={proShopCheckout} 
                image4={proShopAdmin} 
                tech1={react()} 
                tech2={redux()} 
                tech3={node()} 
                tech4={css()} 
                tech5={mongodb()} 


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

            <SectionTest 
                projectName='Crown Shop'
                bgcolor='#ddd' 
                image1={crwnHome} 
                image2={crwnShop} 
                image3={crwnCart} 
                image4={crwnSignIn} 
                tech1={react()} 
                tech2={saga()} 
                tech3={node()} 
                tech4={sass()} 
                tech5={firebase()} 


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

        </>
    )
}

export default Homepage
