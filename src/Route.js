import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing';

const route =(
    <Switch>
        <Route path='/' component={Landing} exact/>
    </Switch>
)

export default route;
