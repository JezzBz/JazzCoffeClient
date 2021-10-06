import { Component, React, useContext } from 'react'
import { withAuth } from './AuthProvider'
import { Route, Redirect } from 'react-router-dom'
import { Context } from './AuthProvider';


export const PrivateRoute = withAuth( ({ component:RouteComponent ,...rest }) => {
    const context = useContext(Context);
    
        return(<Route
            {...rest}
            render={
                
                
                routeProps => (
                    
                    context.isAuthorized ? (<RouteComponent props={routeProps} />) 
                    : (<Redirect to={"/login"} />)
                    
                
            )} />)

                });
export default { PrivateRoute }



