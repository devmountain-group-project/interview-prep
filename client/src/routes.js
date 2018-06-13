import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AdminDash from './components/AdminDash';
import LandingPage from './components/LandingPage';
import Problems from './components/Problems';
import ProblemView from './components/ProblemView';
import Submission from './components/Submission';


export default(
        <Switch>
            <Route component={LandingPage} exact path = '/' />
            <Route component={Dashboard} path = '/dashboard'/>
            <Route component={AdminDash} path = '/admin' />
            <Route component={Problems} path = '/problems' />
            <Route component={ProblemView} path = '/problemview' />
            <Route component={Submission} path = '/submission' />
        </Switch>
) 