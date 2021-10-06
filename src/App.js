
import Header from './components/Header'
import "./styles/App.css"
import Main from './components/Main';
import { BrowserRouter, Route, HashRouter,Router,Switch} from "react-router-dom";
import NotFound from './components/NotFound';


import {AuthProvider,withAuth} from './Auth/AuthProvider'
import {React} from 'react';
import { PrivateRoute } from './Auth/PrivateRoute';
import Admin_Logined from './components/Admin_Logined';
import Login from './components/Login';

function App() {
  
  
  return (
   
    <div>
      
      <Header/>
      
      <BrowserRouter>
      <AuthProvider>
      <Switch>
      
      <Route exact path="/" component={Main}/>
      
      <Route path="/login" component={Login}/>)
      <PrivateRoute path="/admin" component={Admin_Logined}/>
      
      <Route component={NotFound}/>
      
      </Switch>
      </AuthProvider>
      </BrowserRouter>
      
      
      
      
      
    </div>
    
  );
}

export default App;
