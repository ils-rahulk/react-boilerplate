import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getUserDetails } from 'utils/helper';
// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            { ...rest }
            render={ (props) => getUserDetails().token
                ? <Component { ...props } />
                : <Redirect to={ { pathname: '/login' } } /> }
        />
    )
}