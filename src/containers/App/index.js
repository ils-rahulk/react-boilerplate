/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import PublicRoute from 'hoc/routeHoc/publicRoute';
// import PrivateRoute from 'routeHoc/privateRoute';
import Login from 'containers/AuthPage/LoginPage';
import TwoFa from 'containers/AuthPage/TwoFaPage';
import HomePage from 'containers/HomePage';
import Loader from 'shared/Loader';

const loading = (
    <Loader />
)

// Containers
// const TheLayout = React.lazy(() => import('containers/DefaultLayout/TheLayout'));

// Pages
// const Login = React.lazy(() => import('containers/LoginPage'));

class App extends Component {
    render() {
        return (
            <React.Suspense fallback={ loading }>
                <Switch>
                    <PublicRoute exact path="/login" name="Login Page" component={ Login }/>
                    <PublicRoute exact path="/2fa" name="Two Fa Page" component={ TwoFa }/>

                    <PublicRoute exact path="/home" name="Two Fa Page" component={ HomePage }/>
                    {/* <PrivateRoute path="/" name="Home" component={ TheLayout } /> */}
                    <Redirect from="/" to="/home" />
                </Switch>
            </React.Suspense>
        );
    }
}

export default withRouter(App);
