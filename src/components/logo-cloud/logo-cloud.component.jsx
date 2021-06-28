import React from 'react'
import Particles from 'react-particles-js'

import { 
    html, js, vue, react, redux, saga, css, sass, tailwind, bootstrap, 
    styled, node, postgres, mongodb, firebase} from '../../components/tech-logo/logos.js'

import test from '../../assets/bootstrap-5.svg';

const LogoCloud = () => {
    return (
        <>
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 8,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "speed": 1,
                        "out_mode": "out"
                    },
                    "shape": {
                        "type": [
                            "image",
                            "circle"
                        ],
                        "image": [
                            {
                                "src": html,
                                "height": 20,
                                "width": 23
                            },
                            {
                                "src": test,
                                "height": 20,
                                "width": 20
                            },
                            {
                                "src": test,
                                "height": 20,
                                "width": 20
                            }
                        ]
                    },
                    "color": {
                        "value": "#CCC"
                    },
                    "size": {
                        "value": 30,
                        "random": false,
                        "anim": {
                            "enable": true,
                            "speed": 4,
                            "size_min": 10,
                            "sync": false
                        }
                    }
                },
                "retina_detect": false
            }} />
        </>
    )
}

export default LogoCloud
