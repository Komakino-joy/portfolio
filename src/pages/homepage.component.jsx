import React from 'react'

import Banner from '../components/banner/banner.component'
import SectionTest from '../components/homepage-section/section-test'

import invViewImg from '../assets/inv-view-cropped.png'
import progressView from '../assets/progress_view.PNG'
import shrinkView from '../assets/shrink-page.png'
import reportUpload from '../assets/report-upload.png'

import lenditMobile from '../assets/mobile-lendit.svg'
import lenditSignIn from '../assets/sign-in.png' 
import lenditHome from '../assets/lendit-home.png'
import lenditAssets from '../assets/assets-in-use.png'
import lenditActivity from '../assets/activity-tracking.png'

import launchMobile from '../assets/mobile-launch-app.svg'
import launchControlHome from '../assets/launch-schedule-home.png'
import launchControlUpcoming from '../assets/launch-schedule-upcoming.png'
import launchControlHistory from '../assets/launch-schedule-history.png'

import proMobile from '../assets/mobile-mus-shop.svg'
import proShopHome from '../assets/pro-home.png'
import proShopProduct from '../assets/pro-cam.png'
import proShopCheckout from '../assets/pro-checkout.png'
import proShopAdmin from '../assets/pro-admin.png'


import crwnHome from '../assets/crwn-shop.PNG'
import crwnShop from '../assets/shop-page.png'
import crwnSignIn from '../assets/sign-in-crwn.png'
import crwnCart from '../assets/crwn-checkout.png'

import { html, js, react, redux, saga, css, sass, node, postgres, mongodb, firebase} from '../components/tech-logo/logos.js'

const Homepage = () => {
    return (
        <>
            <Banner/>

            <SectionTest 
                projectName='Inventory View'
                bgcolor='#ddd' 
                mobileImage={null}
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
                mobileImage={lenditMobile}
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
                mobileImage={launchMobile}
                image1={launchControlHome} 
                image2={launchControlUpcoming} 
                image3={launchControlHistory} 
                image4={launchControlHome} 
                tech1={react()} 
                tech2={node()} 
                tech3={css()} 
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
                mobileImage={null}
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
