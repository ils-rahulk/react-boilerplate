import styled from 'styled-components';

export const LoaderConainer = styled.div`
    position: fixed;
    z-index: 99999;
    background: #00000036;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    .spinner-border {
        position: fixed;
        top: 50%;
        z-index: 9;
    }
`;

export const DivLoaderConainer = styled.div`
    z-index: 9;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    .spinner-border {
        z-index: 9;
    }
`;