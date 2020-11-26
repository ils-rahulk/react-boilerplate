import React from 'react';
import PropTypes from 'prop-types';
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
NormalLayout.propTypes = {
    children: PropTypes.object
}
export default NormalLayout;