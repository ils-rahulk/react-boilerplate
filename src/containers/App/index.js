/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Switch, Redirect, withRouter } from 'react-router-dom';
import PublicRoute from 'hoc/routeHoc/publicRoute';
// import PrivateRoute from 'routeHoc/privateRoute';
import RaterPage from 'containers/RaterPage';
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
                    <PublicRoute exact path="/energy-rater" name="Energy Rater Page" component={ RaterPage }/>
                    <Redirect from="/" to="/energy-rater" />
                </Switch>
            </React.Suspense>
        );
    }
}

export default withRouter(App);
