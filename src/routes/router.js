import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Login from '../pages/authentication/login.js';
import Register from '../pages/authentication/register.js';
import Feed from '../pages/feed/feed.js';
import FeedOverview from '../pages/feedsOverview/feedsOverview.js';

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
            <Route exact path="/feeds">
                <FeedOverview/>
            </Route>
        </BrowserRouter>
    )
}

export default Router;