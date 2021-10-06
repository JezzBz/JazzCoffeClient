import React from 'react'
import Robo from '../source/roboto.svg'
import '../styles/NotFound.css'
export default function NotFound() {
    return (
        <div className="NotFound">
            <div className="Container">
               <h1>PageNotGound!</h1>
            <img src={Robo} alt="s" /> 
            </div>
             
        </div>
    )
}
