import styled from 'styled-components';
import LeftImg from 'assets/img/login_bg.jpg';
import { cssvariable } from 'shared/cssvariable';

export const AuthContainer = styled.div`
    display: block;
    width: 100%;
    .left-auth {
        background : url(${ LeftImg });
        height: 100vh;
        width: 100%;
        background-size: cover;
        postion:relative;
        @media only screen and (max-width:767px){
            height:100%;
        }
    }
    .loginForm{
        flex:1
    }
    @media only screen and (max-width:767px){
        .absoluteInMobile{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
        } 
        .mobile_main{
            padding-top:100px;
            padding-bottom:58px;
            background-color:transparent;
            min-height: 100vh;
        }
    }
    
`;

export const SimpleInputOverlap = styled.div`
`;
