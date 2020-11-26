import React from 'react';
import PropTypes from 'prop-types';
import { NoFoundBody } from './style';

const NoFound = (props) => {
    const { notFoundBody, classValue } = props;
    return(
        <NoFoundBody className={ classValue }>
            { notFoundBody || 'No Data Found' }
        </NoFoundBody>
    )
}

NoFound.propTypes = {
    notFoundBody: PropTypes.string,
    classValue: PropTypes.string
}

export default NoFound;