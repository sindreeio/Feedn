import React from 'react';
import { BrowserRouter, Route, Switch, useParams} from "react-router-dom";
import Login from '../pages/authentication/login.js';
import Register from '../pages/authentication/register.js';
import Feed from '../pages/feed/feed.js';
import FeedOverview from '../pages/feedsOverview/feedsOverview.js';

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route exact path="/registrer">
                    <Register/>
                </Route>
                <Route exact path="/feeds/:id">
                    <Feed/>
                </Route>
                <Route exact path="/feeds">
                    <FeedOverview/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;