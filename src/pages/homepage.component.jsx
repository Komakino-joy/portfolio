import React from 'react'

import Banner from '../components/banner/banner.component'
import Bio from '../components/bio/bio.component'
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
    vue, react, redux, saga, css, sass, tailwind, bootstrap, 
    styled, node, postgres, mongodb, firebase} from '../components/tech-logo/logos.js'

import '../App.css'

const Homepage = () => {
    return (
        <div className='homepage-wrapper'>
         <Banner/> 
            <section  id={'about-section'}></section>
            <Bio/>
            {/* Project Header will only render in mobile view */}
            <section  id={'projects-section'}></section>
            <div className='mobile-section-header-container' >
                <h1 className='mobile-section-header'>Projects</h1>
            </div>
            <Section 
                projectName='Inventory View'
                alt='inventory view project'
                description='
                    The Inventory View application is an elegant overview of inventory in a large scale logistics
                    environment. The app displays important inventory metrics. Users can upload large excel spreadsheets
                    containing hundreds of thousands of rows in an asynchronous non-blocking manner so that their 
                    browsing experience will not be interrupted while the data finishes uploading. 
                '
                mobileImage={invViewMobile}
                images={[
                    {
                        id: 'Inventory View',
                        img: invViewImg,
                        alt: 'Inventory view site home screen preview'
                    },
                    {
                        id: 'Progress View',
                        img: progressView,
                        alt: 'Inventory view site dashboard screen preview'
                    },
                    {
                        id: 'Inventory Shrink View',
                        img: shrinkView,
                        alt: 'Inventory view site shrink report screen preview'
                    },
                    {
                        id: 'Inventory Report Upload',
                        img: reportUpload,
                        alt: 'Inventory view site report upload screen preview'
                    }
                ]}
                techStack={[ react(), redux(), saga(), css(), node(), postgres() ]}
                githubRepo='https://github.com/Komakino-joy/inv_view_v3'
            />

            <Section 
                projectName='Lendit Asset Tracking' 
                mobileImage={lenditMobile}
                images={[
                    {
                        id: 'Lendit Sign In',
                        img: lenditSignIn,
                        alt: 'Lendit asset tracking site sign in screen preview'
                    },
                    {
                        id: 'Lendit Home',
                        img: lenditHome,
                        alt: 'Lendit asset tracking site home screen preview'
                    },
                    {
                        id: 'Lendit Assets',
                        img: lenditAssets,
                        alt: 'Lendit asset tracking site asset report screen preview'
                    },
                    {
                        id: 'Lendit Activity',
                        img: lenditActivity,
                        alt: 'Lendit asset tracking site activity tracking screen preview'
                    }
                ]}

                alt='laptop with asset tracking app' 
                techStack={[react(), saga(), styled(), node(), postgres()]}
                description="
                    The Lendit Asset Tracking application is a user-friendly check-in/check-out system that
                    facilitates asset management. Users can quickly determine the status of all assets by running the 
                    built in reports. All transactions are recorded so that historical data for any assets in only a 
                    few clicks away.
                "
                githubRepo='https://github.com/Komakino-joy/lendit'

                liveDemo='https://lendit-asset-tracker.com/'
    
                />
            <Section 
                projectName='Music Player'
                mobileImage={musicMobile}
                images={[
                    {
                        id: 'Music Home',
                        img: musicHome,
                        alt: 'Music Home screen preview'
                    },
                    {
                        id: 'Music Song',
                        img: musicSong,
                        alt: 'Music Song screen preview'
                    },
                    {
                        id: 'Music SignIn',
                        img: musicSignIn,
                        alt: 'Music SignIn screen preview'
                    },
                    {
                        id: 'Music Register',
                        img: musicRegister,
                        alt: 'Music Register screen preview'
                    }
                ]}
                techStack={[ vue(), tailwind(), firebase() ]}
                description="
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
                mobileImage={launchMobile}
                images={[
                    {
                        id: 'Launch Home',
                        img: launchControlHome,
                        alt: 'Launch control site home screen preview'
                    },
                    {
                        id: 'Launch Upcoming',
                        img: launchControlUpcoming,
                        alt: 'Launch control site upcoming launches screen preview'
                    },
                    {
                        id: 'Launch History',
                        img: launchControlHistory,
                        alt: 'Launch control site historical launches screen preview'
                    }
                ]}
                techStack={[ react(), node(), css(), postgres() ]}
                description="
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
                mobileImage={proMobile}
                images={[
                    {
                        id: 'Pro Shop Home',
                        img: proShopHome,
                        alt: 'Pro Shop site home screen preview'
                    },
                    {
                        id: 'Pro Shop Product',
                        img: proShopProduct,
                        alt: 'Pro Shop site product screen preview'
                    },
                    {
                        id: 'Pro Shop Checkout',
                        img: proShopCheckout,
                        alt: 'Pro Shop site checkout screen preview'
                    },
                    {
                        id: 'Pro Shop Admin',
                        img: proShopAdmin,
                        alt: 'Pro Shop site admin screen preview'
                    }
                ]}
                techStack={[ react(), redux(), node(), bootstrap(), mongodb() ]}
                description='
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
                mobileImage={crwnMobile}
                images={[
                    {
                        id: 'Pro Shop Home',
                        img: crwnHome,
                        alt: 'Crown site home screen preview'
                    },
                    {
                        id: 'Pro Shop Product',
                        img: crwnShop,
                        alt: 'Crown site shop screen preview'
                    },
                    {
                        id: 'Pro Shop Checkout',
                        img: crwnCart,
                        alt: 'Crown site cart screen preview'
                    },
                    {
                        id: 'Pro Shop Admin',
                        img: crwnSignIn,
                        alt: 'Crown site sign in screen preview'
                    }
                ]}
                techStack={[ react(), redux(), saga(), sass(), firebase() ]}
                description="
                    The CRWN shop application is a template for an e-commerce platform. 
                    Users are able to browse through categories, add items to their cart, and make payments.
                    This app features Stripe integration to handle and process secure payments from the customer. 
                    Shop data and user credentials are stored in Google Cloud Firestore and 
                    user authentication is handled by Google as well.
                "
                githubRepo='https://github.com/Komakino-joy/mus/tree/master/client'
                liveDemo='https://mus-shop.herokuapp.com/'
            />
        </div>
    )
}

export default Homepage
