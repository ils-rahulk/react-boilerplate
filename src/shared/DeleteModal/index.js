import React from 'react';
import PropTypes from 'prop-types';
import ModalView from 'shared/Modal';
import { DeleteContainer, ModalBodyContainer } from './style';
import TrashIcon from 'assets/img/delete.svg'

const DeleteModal = (props) => {
    const {
        name,
        type,
        openModal,
        toggleModal,
        handleClick,
        category,
        firstBtnName,
        secondBtnName,
        headerTitle
    } = props;

    const deleteType = ( choice, typeData ) => {
        let text = '';
        switch(choice) {
        case 'users':
            text = <>
                { 'Are you sure you want to delete this' } <br/> {`${ typeData || 'user' } named ` } <strong> { `${ name }? `} </strong>`
            </>
            break;
        case 'simple':
            text = 'Are you sure you want to delete ?'
            break;
        case 'notification':
            text = `Are you sure you want to delete this notification named Subject: ${ typeData }`
            break;
        default:
            text = 'Are you sure you want to delete ?'
            break;
        }
        return text;
    }
    return(
        <ModalView
            openModal={ openModal }
            toggleModal={ toggleModal }
            handleClick={ handleClick }
            firstBtnName={ firstBtnName }
            secondBtnName={ secondBtnName }
            size="sm"
            headerTitle={ headerTitle }
            className="deleteModal"
            center
        >
            <ModalBodyContainer>
                <DeleteContainer className="text-center">
                    <img src={ TrashIcon } alt="delete icon"/>
                    <h4 className="title">Confirm</h4>
                    <div className="message">
                        { deleteType(category, type) }
                    </div>

                </DeleteContainer>
            </ModalBodyContainer>
        </ModalView>

    )
}

DeleteModal.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    openModal: PropTypes.bool,
    toggleModal: PropTypes.func,
    handleClick: PropTypes.func,
    category: PropTypes.string,
    firstBtnName: PropTypes.string,
    secondBtnName: PropTypes.string,
    headerTitle: PropTypes.string
}

export default DeleteModal;