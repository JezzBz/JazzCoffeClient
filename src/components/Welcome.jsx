import React from 'react'
import LogoGrey from '../source/Logo_Grey.svg'
import '../styles/Welcome.css'
export default function Welcome() {
    return (
        <div className="Welcome">
         <div className="WelcomeContainer">
            <img className="LogoGrey" src={LogoGrey} alt="yah"/>
        
            <p className="WelcomeText">New coffee shop in Moscow</p>
          </div>
        
        
        </div>
    )
}
