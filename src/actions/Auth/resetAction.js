import { authInstance } from '../../service/api';
import {
    RESET_PASSWORD_START,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILURE,
} from './actionTypes';
import { pushNotification } from 'utils/notification';

export const resetStart = () => {
    return {
        type: RESET_PASSWORD_START
    };
};

export const resetSuccess = () => {
    return {
        type: RESET_PASSWORD_SUCCESS,
    };
};

export const resetFail = (error) => {
    return {
        type: RESET_PASSWORD_FAILURE,
        error: error
    };
};

export const resetRequest = (action, history) => {
    return dispatch => {
        dispatch(resetStart());
        const data = {
            email: action.email,
            token: action.token,
            newPassword: action.password
        };
        authInstance.put('/users/_reset-password', data)
            .then(response => {
                const messageResponse = response.data.message;
                dispatch(resetSuccess());
                pushNotification(messageResponse, 'success', 'TOP_RIGHT', 3000);
                history.push('/login');
            })
            .catch(error => {
                if(error && error.response) {
                    if(error.response.data.errors) {
                        const err = error.response.data.errors;
                        if(err) {
                            const  innerErr = err[ 0 ];
                            pushNotification(innerErr.messages[ 0 ], 'error', 'TOP_RIGHT', 3000);
                        }

                    } else {
                        const messageErr = error.response.data.message;
                        pushNotification(messageErr, 'error', 'TOP_RIGHT', 3000);
                    }
                }
                dispatch(resetFail());
            });
    };
};
