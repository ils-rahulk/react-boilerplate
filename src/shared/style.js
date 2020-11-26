import styled from 'styled-components';
import { cssvariable } from 'shared/cssvariable';

export const DatePickerContainer = styled.div`
position:relative;
label{
    position: absolute;
    top: 17px;
    left: 0;
    pointer-events: none;
    transition: .3s;
    right: 0;
    font-size: 11px;
    text-indent: 14px;
    color: ${ cssvariable.formLabelColor };
    max-width: 370px;
    width: 100%;
    display: block;
    margin: 0 auto;
    z-index: 1;
}
.react-datepicker-wrapper{
    width:100%;
    display:block;
    
    input{
        border-radius: 10px;
        min-height: 50px;
        border: 1px solid ${ cssvariable.formFieldBorderColor };
        max-width: 370px;
        padding: 17px 12px 6px 12px ;
        font-size: 13px;
        letter-spacing: 1px;
        color: ${ cssvariable.inputValueColor };
        margin-left: auto;
        margin-right: auto;
        width:100%;
        display:block;
        &:focus{
            box-shadow:0 0 0 0.2rem rgba(0,123,255,.25);
            outline: 0;
        }
    }
    
}
`;

export const MessageContainer = styled.div`
    &.text-success{
        color:${ cssvariable.themePrimary } !important
    }
`;