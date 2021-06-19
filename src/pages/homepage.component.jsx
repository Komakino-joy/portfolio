import React from 'react'

import Banner from '../components/banner/banner.component'
import Section from '../components/homepage-section/homepage-section'

import invViewMobile from '../assets/mobile-inv-view.png'
import invViewImg from '../assets/inv-view-cropped.png'
import progressView from '../assets/progress_view.PNG'
import shrinkView from '../assets/shrink-page.png'
import reportUpload from '../assets/report-upload.png'

import lenditMobile from '../assets/mobile-lendit.png'
import lenditSignIn from '../assets/sign-in.png' 
import lenditHome from '../assets/lendit-home.png'
import lenditAssets from '../assets/assets-in-use.png'
import lenditActivity from '../assets/activity-tracking.png'

import launchMobile from '../assets/mobile-launch-app.png'
import launchControlHome from '../assets/launch-schedule-home.png'
import launchControlUpcoming from '../assets/launch-schedule-upcoming.png'
import launchControlHistory from '../assets/launch-schedule-history.png'

import proMobile from '../assets/mobile-mus-shop.png'
import proShopHome from '../assets/pro-home.png'
import proShopProduct from '../assets/pro-cam.png'
import proShopCheckout from '../assets/pro-checkout.png'
import proShopAdmin from '../assets/pro-admin.png'

import crwnMobile from '../assets/mobile-crwn.png'
import crwnHome from '../assets/crwn-shop.png'
import crwnShop from '../assets/shop-page.png'
import crwnSignIn from '../assets/sign-in-crwn.png'
import crwnCart from '../assets/crwn-checkout.png'

import { 
    html, js, react, redux, saga, css, sass, bootstrap, 
    styled, node, postgres, mongodb, firebase} from '../components/tech-logo/logos.js'

const Homepage = () => {
    return (
        <>
            <Banner/>

            <Section 
                projectName='Inventory View'
                bgcolor='#ddd' 
                mobileImage={invViewMobile}
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
                    The Inventory View application is an elegant overview of inventory in a large scale logistics
                    environment. The app displays important inventory metrics. Users can upload large excel spreadsheets
                    containing hundreds of thousands of rows in an asynchronous non-blocking manner so that their 
                    browsing experience will not be interrupted while the data finishes uploading. 
                '
                githubRepo='https://github.com/Komakino-joy/inv_view_v3'
                
                />

            <Section 
                projectName='Lendit Asset Tracking'
                bgcolor='#ececec' 
                mobileImage={lenditMobile}
                image1={lenditSignIn} 
                image2={lenditHome} 
                image3={lenditAssets} 
                image4={lenditActivity} 
                alt='laptop with asset tracking app' 
                tech1={react()} 
                tech2={saga()} 
                tech3={styled()}
                tech4={node()} 
                tech5={postgres()} 

                desc1="
                    The Lendit Asset Tracking application is a simple to use check-in/check-out system that
                    facilitates asset management. The application solves keeping track of all transactions 
                    made. Users of the app can pull reports for assets that are available, in use, and
                    those in quarantine. The historical data of all assets can also be pulled from this app.
                "
                githubRepo='https://github.com/Komakino-joy/lendit'
                githubRepo2='https://github.com/Komakino-joy/lendit_api'

                liveDemo='https://lendit-asset-tracker.herokuapp.com/home'
    
                />

            <Section 
                projectName='Launch Tracking App'
                bgcolor='#ddd' 
                mobileImage={launchMobile}
                image1={launchControlHome} 
                image2={launchControlUpcoming} 
                image3={launchControlHistory} 
                image4={launchControlHome} 
                tech1={react()} 
                tech2={node()} 
                tech3={css()} 
                tech4={postgres()} 


                desc1="
                    The Launch tracking application is a fun application that parses NASA's publicly 
                    available exoplanet data and determines which are capable of harboring life. Users are
                    able to schedule launch missions to those particular planets. The app also uses the SpaceX API
                    to list all planned and historical launches made by SpaceX. This application is not affiliated
                    with NASA or SpaceX in any way.  
                "
                githubRepo='https://github.com/Komakino-joy/NASA-PROJECT'

                liveDemo='https://launch-schedule-app.herokuapp.com/'
    
                />

            <Section 
                projectName='Mus Shop'
                bgcolor='#ececec' 
                mobileImage={proMobile}
                image1={proShopHome} 
                image2={proShopProduct} 
                image3={proShopCheckout} 
                image4={proShopAdmin} 
                tech1={react()} 
                tech2={redux()} 
                tech3={node()} 
                tech4={bootstrap()} 
                tech5={mongodb()} 


                desc1='
                    The Mus Shop application is a template for an e-commerce platform. 
                    User functionalities include: browsing through categories; adding items to cart; and processing payments.
                    Admin functionalities include: adding products; removing products and users.
                    All styles are made using React Bootstrap5 components.  
                    The app utilizes the PayPal API to handle and process secure payments from the customer. Shop data 
                    and user credentials are stored in MongoDB and user authentication is handled with Node js.
                '
                githubRepo='https://github.com/Komakino-joy/ProShop'

                liveDemo='https://app-mus-shop.herokuapp.com/'
    
            />

            <Section 
                projectName='Crown Shop'
                bgcolor='#ddd' 
                mobileImage={crwnMobile}
                image1={crwnHome} 
                image2={crwnShop} 
                image3={crwnCart} 
                image4={crwnSignIn} 
                tech1={react()} 
                tech2={saga()} 
                tech3={sass()} 
                tech4={firebase()} 


                desc1="
                    The CRWN shop application is a template for an e-commerce platform. 
                    Functionalities include: browsing through categories; adding items to cart; and processing payments.
                    The app utilizes the Stripe API to handle and process secure payments from the customer. Shop data 
                    and user credentials are stored in Google Cloud Firestore and 
                    user authentication is handled by Google as well.
                "
                githubRepo='https://github.com/Komakino-joy/mus/tree/master/client'

                liveDemo='https://mus-shop.herokuapp.com/'
    
            />

        </>
    )
}

export default Homepage
