import React from 'react'
import logo from '../source/Logo_Green.svg'
import '../styles/Header.css'
export default function Header() {
    return (
        <div className="Header">
            <div className="Container">
                <a href="/"><div className="Logo">
                   <img src={logo} alt="logo" width="110" height="100" />
                  <div className="LogoText" >JackCoffe</div> 
                </div></a>
                
             
             <div className="Btns">
                  <a href="#" className="HeaderBtn">About us</a>
                  <a href="#" className="HeaderBtn">Delivery</a>
             </div>
            
          </div>
        </div>
    )
}
