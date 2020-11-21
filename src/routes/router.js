import React from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Login from '../pages/login/login.js'

function Router(){
    return(
        <BrowserRouter>
            <Route exact path="/">
                <Login></Login>
            </Route>
        </BrowserRouter>
    )
}

export default Router;