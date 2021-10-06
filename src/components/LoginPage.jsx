import {React,useState,useContext} from 'react'
import axios from 'axios';
import CryptoJs from 'crypto-js'
import { Context } from '../Auth/AuthProvider';
export default function LoginPage() {
    const context = useContext(Context)
    const apiURL = "https://localhost:44387/api/Login?hash=";
    const [password,setPass]=useState("");
    const fetchData = async () => {
        const response = await axios.post(apiURL+CryptoJs.MD5(password))
        if(response.data) {context.authorize()}
  }
    return (
        <div className="AdminLoginPage">
            <div className="Form">
                <div className="Logintext">Login</div>
            <form   className="LoginForm">
                
                <input onChange={e=>setPass(e.target.value)} value={password} type="password" id="Password"  />
               
            </form>
           
            <button type="button" onClick={fetchData} className="Button" >Login</button>
         
            </div>
            
        </div>)
    
}
