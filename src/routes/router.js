import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Login from '../pages/authentication/login.js';
import Register from '../pages/authentication/register.js';

function Router(){
    return(
        <BrowserRouter>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/registrer">
                <Register/>
            </Route>
        </BrowserRouter>
    )
}

export default Router;