import React from 'react';
import { AuthLogo } from './style';
import LogoImg from 'assets/svg/logo.svg';

const LogoAuth = () => {
    return (<AuthLogo>
        <img src={ LogoImg } alt="logo"/>
    </AuthLogo>)
};

export default LogoAuth;