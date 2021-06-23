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

import musicMobile from '../assets/mobile-vue-music.png'
import musicHome from '../assets/vue-music-home.png'
import musicSong from '../assets/vue-music-song-page.png'
import musicRegister from '../assets/vue-music-register.png'
import musicSignIn from '../assets/vue-music-sign-in.png'

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
    html, js, vue, react, redux, saga, css, sass, tailwind, bootstrap, 
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
                alt1={'Inventory view site home screen preview'}
                image2={progressView} 
                alt2={'Inventory view site dashboard screen preview'}
                image3={shrinkView} 
                alt3={'Inventory view site shrink report screen preview'}
                image4={reportUpload} 
                alt4={'Inventory view site report upload screen preview'}
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
                alt1={'Lendit asset tracking site sign in screen preview'}
                image2={lenditHome} 
                alt2={'Lendit asset tracking site home screen preview'}
                image3={lenditAssets} 
                alt3={'Lendit asset tracking site asset report screen preview'}
                image4={lenditActivity} 
                alt4={'Lendit asset tracking site activity tracking screen preview'}
                alt='laptop with asset tracking app' 
                tech1={react()} 
                tech2={saga()} 
                tech3={styled()}
                tech4={node()} 
                tech5={postgres()} 

                desc1="
                    The Lendit Asset Tracking application is a user-friendly check-in/check-out system that
                    facilitates asset management. Users can quickly determine the status of all assets by running the 
                    built in reports. All transactions are recorded so that historical data for any assets in only a 
                    few clicks away.
                "
                githubRepo='https://github.com/Komakino-joy/lendit'
                githubRepo2='https://github.com/Komakino-joy/lendit_api'

                liveDemo='https://lendit-asset-tracker.herokuapp.com/home'
    
                />
            <Section 
                projectName='Music Player'
                bgcolor='#ddd' 
                mobileImage={musicMobile}
                image1={musicHome} 
                alt1={'Music Home screen preview'}
                image2={musicSong} 
                alt2={'Music Song screen preview'}
                image3={musicSignIn} 
                alt3={'Music SignIn screen preview'}
                image4={musicRegister} 
                alt4={'Music Register screen preview'}
                tech1={vue()} 
                tech2={tailwind()} 
                tech3={firebase()} 


                desc1="
                    The music player application is a straight-forward,  
                    distraction-free music streaming application. Users can browse through
                    the site and enjoy the songs uploaded by others. They are also given the 
                    option to register an account and flex their own creative muscle by uploading music for other music
                    enthusiasts to enjoy and comment on. 
                "
                githubRepo='https://github.com/Komakino-joy/vue-music'

                liveDemo='https://vue-music-omega.vercel.app/'
    
                />

            <Section 
                projectName='Launch Tracking App'
                bgcolor='#ececec' 
                mobileImage={launchMobile}
                image1={launchControlHome} 
                alt1={'Launch control site home screen preview'}
                image2={launchControlUpcoming} 
                alt2={'Launch control site upcoming launches screen preview'}
                image3={launchControlHistory} 
                alt3={'Launch control site historical launches screen preview'}
                image4={launchControlHome} 
                alt4={'Launch control site home screen preview'}
                tech1={react()} 
                tech2={node()} 
                tech3={css()} 
                tech4={postgres()} 


                desc1="
                    The Launch tracking application is a fun application that parses NASA's publicly 
                    available exoplanet data and determines which are capable of harboring life. Users are
                    able to schedule launch missions to the exoplanets. The app also makes use of the SpaceX API
                    to list all of SpaceX's planned and historical rocket launches. This application is not affiliated
                    with NASA or SpaceX in any way.  
                "
                githubRepo='https://github.com/Komakino-joy/NASA-PROJECT'

                liveDemo='https://launch-schedule-app.herokuapp.com/'
    
                />

            <Section 
                projectName='Mus Shop'
                bgcolor='#ddd' 
                mobileImage={proMobile}
                image1={proShopHome} 
                alt1={'Pro Shop site home screen preview'}
                image2={proShopProduct} 
                alt2={'Pro Shop site product screen preview'}
                image3={proShopCheckout} 
                alt3={'Pro Shop site checkout screen preview'}
                image4={proShopAdmin} 
                alt4={'Pro Shop site admin screen preview'}
                tech1={react()} 
                tech2={redux()} 
                tech3={node()} 
                tech4={bootstrap()} 
                tech5={mongodb()} 


                desc1='
                    The Mus Shop application is a template for an e-commerce platform. 
                    Users can, browse through categories, add items to cart, and make payments.
                    Users with administrator privileges are able to add products and remove products or users.
                    The site is styled using React Bootstrap5 components.  
                    Secure payments to the site are handled using the PayPal API. 
                '
                githubRepo='https://github.com/Komakino-joy/ProShop'

                liveDemo='https://app-mus-shop.herokuapp.com/'
    
            />

            <Section 
                projectName='Crown Shop'
                bgcolor='#ececec' 
                mobileImage={crwnMobile}
                image1={crwnHome} 
                alt1={'Crown site home screen preview'}
                image2={crwnShop} 
                alt2={'Crown site shop screen preview'}
                image3={crwnCart} 
                alt3={'Crown site cart screen preview'}
                image4={crwnSignIn} 
                alt4={'Crown site sign in screen preview'}
                tech1={react()} 
                tech2={saga()} 
                tech3={sass()} 
                tech4={firebase()} 


                desc1="
                    The CRWN shop application is a template for an e-commerce platform. 
                    Users are able to browse through categories, add items to their cart, and make payments.
                    This app features Stripe integration to handle and process secure payments from the customer. 
                    Shop data and user credentials are stored in Google Cloud Firestore and 
                    user authentication is handled by Google as well.
                "
                githubRepo='https://github.com/Komakino-joy/mus/tree/master/client'

                liveDemo='https://mus-shop.herokuapp.com/'
    
            />

        </>
    )
}

export default Homepage
