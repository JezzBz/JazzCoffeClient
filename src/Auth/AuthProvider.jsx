import React,{Component,setState, useState} from "react";
import { withRouter } from "react-router";




export const Context=React.createContext({isAuthorized:false,authorize:()=>{}}); 
const state={isAuthorized:true,authorize:()=>{state.isAuthorized=true}}
class AuthProvider extends Component{
    
    authorize=()=>{
        
        state.isAuthorized=true;
        this.props.history.push("/admin")
    }
    
    
    render(){
    
        
        return(
            <Context.Provider value={{isAuthorized:state.isAuthorized,authorize:this.authorize}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export function withAuth(WrappedComponent) {
    return class AuthHOC extends Component{
        render(){
            return(
            <Context.Consumer>
                {contextProps=>(<WrappedComponent {...contextProps} {...this.props}/>)}
            </Context.Consumer>
            )
        }
    }
    
}
const withRouteProvider=withRouter(AuthProvider)
export  {withRouteProvider as AuthProvider}