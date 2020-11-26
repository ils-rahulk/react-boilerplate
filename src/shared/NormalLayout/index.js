import React from 'react';
import FooterLayout from './footer';
import HeaderLayout from './header';
import { NormalContainer } from './style';
const NormalLayout = (props) => {
    return (
        <NormalContainer>
            <HeaderLayout />
                { props.children }
            <FooterLayout />
        </NormalContainer>
    )
}

export default NormalLayout;