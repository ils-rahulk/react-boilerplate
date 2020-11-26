import React from 'react';
import { DivLoaderConainer } from './style';
import { CCol } from '@coreui/react';
const DivLoader = () => {
    return (
        <CCol xs="12" className="py-5">
            <DivLoaderConainer className="d-flex justify-content-center">
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </DivLoaderConainer>
        </CCol>
    )
}

export default DivLoader;
