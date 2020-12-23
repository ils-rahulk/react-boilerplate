import styled from 'styled-components';
import RaterBackground from 'assets/svg/rater-background.svg'
export const RaterContainer = styled.div``;

export const RaterTopBox = styled.div``;

export const LogoContainer = styled.div`
`;

export const LogoCenterSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 28px;
    padding-bottom: 35px;
    @media screen and (max-width:767px){        
        padding-top: 25px;
        padding-bottom: 10px;
    }
    .center-logo {
        width: 270px;
        @media screen and (max-width:767px){
            width: 170px;
        }
    }
    .divider-logo {
        border-left: solid 2px #a0b9d2;
        height: 50px;
        margin-left: 18px;
        margin-right: 18px;
        @media screen and (max-width:767px){
            margin-right: 15px;
            height: 38px;
        }
    }
    .center-logo-text {
        color: #316ab1;
        p {
            font-weight: 600;
            font-size: 33px;
            line-height: 30px;
            font-family: 'SegoeUI';
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            color: #316ab1;
            @media screen and (max-width:767px){
                font-size: 24px;
                line-height: 26px;
                margin-bottom: 0;
            }
        }
    }
`;

export const BackgroundImageSection = styled.div`
    background : url(${ RaterBackground });
    
    background-size: cover;
`;

export const FormContainer = styled.div`
    // background : url(${ RaterBackground });
    border-radius: 12px;
    padding: 19px 20px 19px 30px;
    opacity: 0.96;
    .rater-form {
        background: #fff;
        padding-top: 20px;
        padding-bottom: 30px;
        .desktop-rater-btn {
            display: block
        }
        .mobile-rater-btn {
            display: none !important;
        }
        @media screen and (max-width:767px){
            .form-rater-box {
                margin: 0px 20px;
            }
            .desktop-rater-btn {
                display: none !important;
            }
            .mobile-rater-btn {
                display: flex !important;
            }
        }
        
    }
    .rater-right-wrap {
        background-color: #dfedff;
        margin: 0px 20px;
        padding: 0px;
    }
    .fileUploadIcon {
        height: 372px;
        border: 2px solid #eee;
        cursor: pointer;
        position: relative;
        @media screen and (max-width:767px){
            height: 250px;
        }
    }
    .upload-areas {
        padding: 125px 0px;
        outline: none;
        @media screen and (max-width:767px){
            padding: 80px 0px;
        }
    }
    .drag-text-rater {        
        font-family: 'Segoe UI Regular';
        font-size: 16px;
        font-weight: 600;
        color: #5398f3;
        line-height: 1.06;
        margin-top: 5px;
        @media screen and (max-width:767px){
            font-size: 14px;
            font-weight: 600;
            line-height: 1;
        }
    }
    textarea {
        resize: none;
    }
    .rater-submit {
        width: 200px;
        height: 45px;
        border-radius: 24px;
        background-image: linear-gradient(to bottom, #3d8ef3, #3469ab);
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0.45px;
        @media screen and (max-width:767px){ 
            width: 175px;
            height: 40px;
            font-size: 17px;
        }
    }
`;

export const ResponseContainer = styled.div`
    .response-desktopview {
        display: block;
    }
    .response-mobileview {
        display: none;
    }
    @media screen and (max-width:767px){ 
        .response-desktopview {
            display: none !important;
        }
        .response-mobileview {
            display: block;
        }
    }


`;

export const ResponseTitleRow = styled.div`
    height: 46px;
    background: #1e5ba7;
    color: #ffffff;
    display: flex;
    align-items: center;
    .response-title-text {
        font-size: 18px;
        font-weight: 600;
    }
`;

export const ResponseAnswerRow = styled.div`
    display: flex;
    align-items: center;
    padding-top: 30px;
`;

export const PreviewRaterSection = styled.div`
    .cross-rater {
        position: absolute;
        width: 20px;
        right: -15px;
        top: -10px;
        cursor: pointer;
        @media screen and (max-width:767px){
            right: 15px;
        }
    }
    .preview-rater-inner {
        height: 372px;
        overflow: auto;
        img {
            width: 100%;
        }
    }
    
`;

export const ErrorImageSection = styled.div`
    text-align: center;
    color: red;
    font-size: 16px;
    font-weight: bold;
    @media screen and (max-width:767px){
        position: absolute;
        bottom: 6px;
        left: 28%;
    }
`

export const PDFView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
`;