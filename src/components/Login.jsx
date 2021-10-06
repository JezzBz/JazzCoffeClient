import axios from 'axios';
import React from 'react'
import '../styles/Login.css'
import { useContext, useState } from 'react';
import CryptoJS from 'crypto-js';
import { Context } from '../Auth/AuthProvider';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import Admin_Logined from './Admin_Logined';
const cookie = new Cookies();



export default function Login() {
    const context = useContext(Context)
    const apiURL = "https://localhost:44387/api/Admin/?hash=";
    const tryFetch = () => {
        var Access = false
        let config = {
            headers: {
                "Accept": "application/json",
                "Authorization": "Bearer " + cookie.get("token")
            }
        }
        axios.get("https://localhost:44387/api/admin/join", config).then(Access = true).catch(err => console.log(err.response),Access=false)
        
        return Access
    }
    const fetchData = async () => {
        const response = await axios.post(apiURL + CryptoJS.MD5(password))
        if (response.status === 200) {
            context.authorize()
            cookie.set('token', response.data)
        }
    }

    const [password, setPass] = useState("");
    
    if(context.isAuthorized){
        return <Redirect to="/admin"/>
    }
        return (
            <div className="AdminLoginPage">
                <div className="Form">
                    <div className="Logintext">Login</div>
                    <form className="LoginForm">
                        <input onChange={e => setPass(e.target.value)} value={password} type="password" id="Password" />
                    </form>
                    <button type="button" onClick={fetchData} className="Button" >Login</button>
                </div>
            </div>
        )
    


}

