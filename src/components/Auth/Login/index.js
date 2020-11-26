import React from 'react'
import PropTypes from 'prop-types';
import AuthHoc from 'hoc/AuthHoc';
import Loader from 'shared/Loader';
import LoginForm from './loginForm';
import { AuthContainer } from './style';

const Login = (props) => {
    const { auth } = props;
    return (
        <AuthContainer className="container-fluid">
            {
                auth && auth.loading && <Loader />
            }
            <AuthHoc>
                <LoginForm { ...props } className="loginForm"/>
            </AuthHoc>

        </AuthContainer>
    )
}

Login.propTypes = {
    auth: PropTypes.object,
}
export default Login;
