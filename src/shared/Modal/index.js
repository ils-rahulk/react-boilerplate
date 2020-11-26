/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalView = (props) => {
    const {
      	openModal,
        submitHandler,
        handleSubmit,
        firstBtnName,
        secondBtnName,
        children,
        headerTitle,
        toggleModal,
        className,
        size,
        footerClass,
        headerClass,
        center,
        hideFooter,
        handleClick
    } = props;
    return (
        <Modal zIndex="9999" backdropClassName="bakc" isOpen={ openModal } toggle={ toggleModal } className={ className } size={ size } centered={ center }>
            <ModalHeader toggle={ toggleModal } className={ headerClass }>{headerTitle}</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            { !hideFooter &&
                <ModalFooter className={ footerClass }>
                    <div>
                        <Button color="secondary" onClick={ toggleModal }>{firstBtnName}</Button>
                        <Button color="primary" type="submit"
                            onClick={
                                handleSubmit ? handleSubmit(submitHandler) : handleClick
                            }
                        >{secondBtnName}</Button>

                    </div>

                </ModalFooter>
            }
        </Modal>
    )
};

ModalView.propTypes = {
    openModal: PropTypes.bool,
    handleSubmit: PropTypes.func,
    submitHandler: PropTypes.func,
    firstBtnName: PropTypes.string,
    secondBtnName: PropTypes.string,
    children: PropTypes.object,
    size: PropTypes.string,
    headerTitle: PropTypes.string,
    toggleModal: PropTypes.func,
    className: PropTypes.string,
    footerClass: PropTypes.string,
    headerClass: PropTypes.string,
    center: PropTypes.bool,
    hideFooter: PropTypes.bool,
    handleClick: PropTypes.func,
}
export default ModalView;