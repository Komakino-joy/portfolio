import htmlLogo from '../../assets/html5.logo.svg'
import cssLogo from '../../assets/css3.logo.svg'
import sassLogo from '../../assets/sass.logo.svg'
import jsLogo from '../../assets/js.logo.svg'
import reactLogo from '../../assets/react.logo.svg'
import reduxLogo from '../../assets/redux.logo.svg'
import sagaLogo from '../../assets/redux-saga.logo.svg'
import firebaseLogo from '../../assets/firebase.logo.svg'
import pgLogo from '../../assets/postgres.logo.svg'
import mongoLogo from '../../assets/mongodb.logo.svg'
import nodeLogo from '../../assets/nodejs.logo.svg'
import vueLogo from '../../assets/vue.logo.svg'


import TechLogo from './tech-logo.component'

export const html = () => (
    <TechLogo 
        href='https://developer.mozilla.org/en-US/docs/Web/HTML'
        image={htmlLogo}
        alt='html five logo'
    />
) 

export const sass = () => (
    <TechLogo 
        href='https://sass-lang.com/'
        image={sassLogo}
        alt='sass logo'
    />
) 

export const js = () => (
    <TechLogo 
        href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        image={jsLogo}
        alt='javascript logo'
    />
) 

export const firebase = () => (
    <TechLogo 
        href='https://firebase.google.com/?gclid=CjwKCAjwwqaGBhBKEiwAMk-FtOODwv2rC8fOc37MnA1K6-ygdvkrHJM4pREmprtZtKHL5rkR27h73RoCWVUQAvD_BwE&gclsrc=aw.ds'
        image={firebaseLogo}
        alt='google firebase logo'
    />
) 

export const mongodb = () => (
    <TechLogo 
        href='https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_americas_united_states_search_brand_atlas_desktop&utm_term=mongodb%20docs&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=1718986498&gclid=CjwKCAjwwqaGBhBKEiwAMk-FtGMpoI5990hy209BQHDBq1aSl04wgK4LK_bRHwqpX7xfEulLjOny8hoCfcsQAvD_BwE'
        image={mongoLogo}
        alt='mongo db logo'
    />
) 


export const vue = () => (
    <TechLogo 
        href='https://v3.vuejs.org/'
        image={vueLogo}
        alt='vue logo'
    />
) 


export const react = () => (
    <TechLogo 
        href='https://reactjs.org/docs/getting-started.html'
        image={reactLogo}
        alt='react logo'
    />
) 

export const redux = () => (
    <TechLogo 
        href='https://redux.js.org/'
        image={reduxLogo}
        alt='redux logo'
    />
) 

export const saga = () => (
    <TechLogo 
        href='https://redux-saga.js.org/'
        image={sagaLogo}
        alt='redux saga logo'
    />
) 


export const css = () => (
    <TechLogo 
        href='https://developer.mozilla.org/en-US/docs/Web/CSS'
        image={cssLogo}
        alt='css logo'
    />
) 


export const node = () => (
    <TechLogo 
        href='https://nodejs.org/en/docs/'
        image={nodeLogo}
        alt='node logo'
    />
) 


export const postgres = () => (
    <TechLogo 
        href='https://www.postgresql.org/'
        image={pgLogo}
        alt='postgres logo'
    />
) 
