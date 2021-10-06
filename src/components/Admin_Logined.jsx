import React,{useState} from 'react'
import '../styles/Admin.css'
export default function Admin_Logined() {
    const [style,setStyle]= useState("");
    
    return (
        <div>
            <div className="dropdown">
                <button className="mainmenubtn" type="button" onClick={()=>setStyle("display:block")} >Главное меню</button>
                <div className="dropdown-child"  style={{style}}>
                    <a href="http://www.вашдомен.ru/page1.html">Подраздел 1</a>
                    <a href="http://www.вашдомен.ru/page2.html">Подраздел 2</a>
                    <a href="http://www.вашдомен.ru/page3.html">Подраздел 3</a>
                    <a href="http://www.вашдомен.ru/page4.html">Подраздел 4</a>
                    <a href="http://www.вашдомен.ru/page5.html">Подраздел 5</a>
                </div>
            </div>
        </div>
    )
}
