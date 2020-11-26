/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getUserDetails } from 'utils/helper';

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            { ...rest }
            render={ props =>
                getUserDetails().token ?
                    (<Redirect to={ { pathname: '/client-management', state: { from: props.location } } } />)
                    :
                    (<Component { ...props } />)
            }
        />
    )
}
export default PublicRoute;