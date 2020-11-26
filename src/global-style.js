import { createGlobalStyle } from 'styled-components'
import { cssvariable } from 'shared/cssvariable';
export const GlobalStyle = createGlobalStyle`
    .bottom-border-input .form-control {
        border: none;
        border-bottom: 1px solid ${ cssvariable.formFieldBorderColor };
        padding: 5px 0px;
        outline: none;
    }
    .bottom-border-input .form-control:focus {
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
        transition: 0.4s;

        ::-webkit-input-placeholder {
            background-color: rgba(20, 185, 184, 0.11);
        }
        :-moz-placeholder { 
            color: red;
            // min-height: 60px;
            background: yellow;
            line-height: normal; 
        }
        ::-moz-placeholder { 
            color: red;
            // min-height: 60px;
            background: yellow;
            line-height: normal; 
        }
        :-ms-input-placeholder { 
            color: red;
            min-height: 60px;
            background: yellow;
            line-height: normal; 
        }
        
    }

    .form-control {
        min-height: 60px;
        color: ${ cssvariable.formLabelColor };
        
        @media only screen and (max-width:1366px){
            min-height: 50px;
        }
        & + p{
            min-height:26px;
            padding-top:5px;
            font-size:14px;
            margin-bottom: 0;
            text-indent: 17px;
            color: #c6572a;
            @media only screen and (max-width:767px){
                color:#fff;
            }

        }
    }
    .btn-primary {
        background-color: ${ cssvariable.themePrimary } !important;
        border-color: ${ cssvariable.themePrimary } !important;
        font-family: 'Lato';
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.19;
        letter-spacing: 0.8px;
        text-align: center;
        color: #ffffff;
    
        &:hover,&:focus,&.focus{
            background-color: #208a89 !important;
            border-color: #208a89 !important;
            box-shadow: 0 0 0 0.2rem ${ cssvariable.themePrimary }  !important;
    
        }
    }
    a{
        font-family: 'Lato';
        color: #4c677b!important;
    }
`