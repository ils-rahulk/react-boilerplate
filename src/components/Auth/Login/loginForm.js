/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { Col, Row, Button } from 'reactstrap';
import { renderField } from 'utils/formUtils';
import { loginValidate as validate } from 'utils/validate';
// import { getRememberDetail } from 'utils/helper';
import { SimpleInputOverlap } from './style';

const LoginForm = (props) => {
    // const { initialize, requestLogin } = props;
    // const [ passwordShown, setPasswordShown ] = useState(false);
    // const [ rememberCheck, setRememberCheck ] = useState(false);
    // useEffect(() => {
    //     const rememberDetail = getRememberDetail();
    //     if(rememberDetail && rememberDetail.email && rememberDetail.password) {
    //         initialize({
    //             email: rememberDetail.email,
    //             password: rememberDetail.password,
    //         });
    //         setRememberCheck(true);
    //     }
    // }, [ initialize ]);

    const submitForms = () => {
        const { history } = props;
        history.push('/2fa');
        // const { email, password, rememberPassword } = formData;
        // const data = { email, password, rememberPassword };
        // requestLogin(data);
    }
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit((formData) => submitForms(formData)) } className="bottom-border-input">
            <div className="text-center">
                <h4 className="form_head">Welcome Back!</h4>
                <p className="form_pera">Please login to proceed.</p>
            </div>

            <Field
                label="Username"
                name="email"
                type="text"
                component={ renderField }
                placeholder={ 'Enter your username' }
            />
            <SimpleInputOverlap className="showpasswordField">
                <Field
                    label="Password"
                    name="password"
                    type={ 'password' }
                    component={ renderField }
                    placeholder={ 'Enter your password' }
                />
            </SimpleInputOverlap>
            <Row>
                <Col xs="12" className="text-right">
                    <NavLink to="/forgot-password" >Forgot password?</NavLink>
                </Col>
                <Col xs="12" className="mt-md-3 mt-2 ">
                    <Button type="submit" color="primary" className="btn-block  py-xxl-3 orangeButton  py-2">SIGN IN TO YOUR ACCOUNT</Button>
                </Col>
            </Row>
        </form>
    )
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func,
    initialize: PropTypes.func,
    requestLogin: PropTypes.func,
    history: PropTypes.object
}

export default reduxForm({
    form: 'loginForm',
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: false,
    validate,
})(LoginForm);