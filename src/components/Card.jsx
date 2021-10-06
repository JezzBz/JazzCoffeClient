import React from 'react'
import "../styles/Card.css"
export default function Card(props) {
   
    return (
        <div className="Card">
            <img src={"https://localhost:44387/source/"+props.imgPath} alt="load"  className="Card_Img"/>
             <div className="CardTextBlock">
                 <h2>{props.name}</h2>
                 <p>{props.description}</p>
                 <div className="CardBottom">
                    <button className="AddToCartBtn">
                 <div className="Cost">{props.cost}</div>
                 </button> 
                 </div>
                 
             </div>
        </div>
    )
}
