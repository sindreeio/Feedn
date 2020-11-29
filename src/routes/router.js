import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Login from '../pages/authentication/login.js';
import Register from '../pages/authentication/register.js';
import Feed from '../pages/feed/feed.js'

function Router(){
    return(
        <BrowserRouter>
            <Route exact path="/">
                <Login/>
            </Route>
            <Route exact path="/registrer">
                <Register/>
            </Route>
            <Route exact path="/feed">
                <Feed/>
            </Route>
        </BrowserRouter>
    )
}

export default Router;