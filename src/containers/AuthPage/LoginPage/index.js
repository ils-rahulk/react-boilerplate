import React from 'react';
import Login from 'components/Auth/Login';
import { connect } from 'react-redux';
import { loginRequest } from 'actions/Auth/authAction';
import browserHistory from 'utils/history';
const LoginPage = (props) => {
    return <Login { ...props }/>;
}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    requestLogin: data => dispatch(loginRequest(data, browserHistory))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginPage)