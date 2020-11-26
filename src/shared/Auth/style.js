import styled from 'styled-components';

export const RightContainer = styled.div`
    .left-auth {
        height:100%;
        width: 100%;
        background-size: cover;
    }
`;

export const AuthLogo = styled.div`
    padding-bottom: 50px;
    text-align: center;
`;

export const RightBottomContainer = styled.div`
    h4{
        position: absolute;
        bottom: 19px;
        left: 20px;
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        margin-bottom:0;

        @media only screen and (max-width:1600px){
            font-size:16px;
        }
        @media only screen and (max-width:767px){
            font-size:14px;
        }
    }
`;