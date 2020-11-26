import React from 'react'
// import PropTypes from 'prop-types';
import AuthHoc from "hoc/AuthHoc";
import { AuthContainer } from '../Login/style';

const TwoFa = (props) => {
    return (
        <AuthContainer className="container-fluid">           
            <AuthHoc>
                <div>two fa page</div>
            </AuthHoc>
           
        </AuthContainer>
    )
}

TwoFa.propTypes = {
}
export default TwoFa;
