import React, { useState,useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import '../styles/Assortment.css'
export default function Assortment() {
    
    const [cards,setItems]= useState([])
    
    const apiURL = "https://localhost:44387/api/Assortment";
    const fetchData = async () => {
        const response = await axios.get(apiURL)
        setItems(response.data) 
    }
    useEffect(() => {
    fetchData()
      }, [])
    return (
        <div className="Assortment">
            <div className="AssortmentContiner">
                <div className="AssotmentHeadline">Assortment</div>

                <div className="Cards">
                
                {cards.map(card=><Card name={card.name} description={card.description} imgPath={card.imgPath} cost={card.cost} key={card.id}/>)}
                
             </div>
            </div>
            
            
      
        </div>
    );
  }
    

