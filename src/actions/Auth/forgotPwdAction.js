import { authInstance } from '../../service/api';
import {
    FORGOT_PASSWORD_START,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,
} from './actionTypes';

export const forgotStart = () => {
    return {
        type: FORGOT_PASSWORD_START
    };
};

export const forgotSuccess = () => {
    return {
        type: FORGOT_PASSWORD_SUCCESS,
    };
};

export const forgotFail = (error) => {
    return {
        type: FORGOT_PASSWORD_FAILURE,
        error: error
    };
};

export const forgotRequest = (action) => {
    return dispatch => {
        dispatch(forgotStart());
        const { email, setMessage } = action;
        const data = {
            email: email,
            'type': 'admin'
        };
        authInstance.post('/users/_forgot-password', data)
            .then(response => {
                const messageResponse = response.data.message;
                const message = { messageData : messageResponse, error : false }
                setMessage(message)
                dispatch(forgotSuccess());
                // pushNotification(messageResponse, 'success', 'TOP_RIGHT', 3000);
                // history.push('/login');
            })
            .catch(error => {
                if(error) {
                    const message = {
                        messageData : error.response.data.message,
                        error : true
                    }
                    setMessage(message)
                }
                // error && pushNotification(error.response.data.message, 'error', 'TOP_RIGHT', 3000)
                dispatch(forgotFail());
            });
    };
};
