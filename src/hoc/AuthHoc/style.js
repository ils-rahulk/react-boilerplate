import styled from 'styled-components';
import { cssvariable } from 'shared/cssvariable';

export const FormWraper = styled.div`
        // flex:1;
        // display:flex;
        // align-items:center;
        // justify-content: center;
        .remeberCheckBox input[type="checkbox"] {
            margin-top: 0;
            top: 50%;
            transform: translateY(-50%);
        }
        form{
            width:576px;
            @media only screen and (max-width:1440px) and (min-width:1099px){
                max-width: 100%;
            }
            @media only screen and (max-width:1098px) and (min-width:991px){
                max-width: 100%;
            }
        }

        .form_head{
            font-size: 35px;
            color: ${ cssvariable.blueText };
            font-family: "Lato";
            font-weight: 600;
            @media only screen and (max-width:1366px){
                font-size:35px ;
            }
            @media only screen and (max-width:991px){
                font-size:25px ;
            }
            @media only screen and (max-width:767px){
             color:#fff;
            }
        }
        
        .form_pera{
            color: ${ cssvariable.blueText };
            font-size: 24px;
            font-weight: 500;
            @media only screen and (max-width:767px){
                color:#fff !important;
            }
        }
        
        .form-check-label {
            color: ${ cssvariable.formLabelColor };
            @media only screen and (max-width:1099px){
                font-size:14px;
            }
            @media only screen and (max-width:767px){
                color:#fff;
                font-size:12px;
            }
        }
        .forgotPassword a {
            color: #32c5ff;
        }
        .dontHaveAC{
            font-size:18px;
            @media only screen and (max-width:767px){
                color:#fff;
            }
}
`
