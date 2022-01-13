import React from 'react'
import './styles/Header.scss'
import hero from './images/illustration-intro.png'
import bgMobile from './images/bg-curvy-mobile.svg'
import bgDesktop from './images/bg-curvy-desktop.svg'


export default function Header(props) {
    

    return (
        <header>
            <img src={hero} alt="hero" className='hero' />
            <div className="bgCurvy">
                <picture>
                        <source media="(max-width:375px)" srcSet={bgMobile}/>
                        <source media="(min-width:1440px)" srcSet={bgDesktop}/>
                        <img src={bgMobile} alt="bg" />
                </picture>    
                <div className="text">
                    <h1>All your files in one secure location, accessible anywhere.</h1>
                    <p className='fylo'> Fylo stores all your most important files in one secure location. Access them wherever 
                        you need, share and collaborate with friends family, and co-workers.</p> */
                    <div className='btn-wrap'>
                        <button className='btn button'>Get Started</button>
                    </div>
                </div>
            </div>

            
        </header>
    )
}
