import React from 'react';
import { RightContainer } from './style';
import RightBottom from 'shared/Auth/rightBottom';

const LeftAuthSideBar = () => {
    return (
        <RightContainer className="left-auth p-3">
            <RightBottom />
        </RightContainer>
    )
};

export default LeftAuthSideBar;