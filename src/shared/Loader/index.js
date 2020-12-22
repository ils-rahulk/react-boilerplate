import React from 'react';
import { LoaderConainer } from './style';

const Loader = () => {
    return (
        <LoaderConainer className="d-flex justify-content-center">
            <div className="spinner-border text-info" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </LoaderConainer>
    )
}

export default Loader;