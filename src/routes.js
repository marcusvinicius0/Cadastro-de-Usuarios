import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; //switch encontra direto a rota que precisa - melhora a performance - 

import Home from './containers/Home/index'
import Users from './containers/Users/index'

function Routes(){

    return(
        <Router>
            <Switch>
            <Route exact path='/' component={Home} />   
            <Route exact path='/usuarios' component={Users} /> 
            </Switch>     
        </Router>
    )
}

export default Routes                                              