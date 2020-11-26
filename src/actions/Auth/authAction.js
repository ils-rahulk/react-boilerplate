import { authInstance } from '../../service/api';
import {
    AUTH_START,
    AUTH_START_SUCCESS,
    AUTH_START_FAILURE,
    AUTH_LOGOUT
} from './actionTypes';
import { message } from '../../shared/constant';
import { pushNotification } from 'utils/notification';
export const authStart = () => {
    return {
        type: AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: AUTH_START_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: AUTH_START_FAILURE,
        error: error
    };
};

export const logout = (history) => {
    localStorage.removeItem('userDetails');
    history.push('/login')
    return {
        type: AUTH_LOGOUT
    };
};

export const loginRequest = ({ email, password, rememberPassword }, history) => {

    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            'type': 'admin'
        };
        authInstance.post('/users/_login/', authData)
            .then(response => {
                let token = response.headers.authorization;
                if(!token) {
                    token = response.headers[ 'x-amzn-remapped-authorization' ];
                }
                const userId = response.data.userId;
                const name = response.data.name;
                dispatch(authSuccess(token, userId));
                if(rememberPassword) {
                    let rememberDetails = { email : email, password: password };
                    rememberDetails = rememberDetails ? JSON.stringify(rememberDetails) : '';
                    localStorage.setItem('rememberDetails', rememberDetails);
                } else {
                    localStorage.removeItem('rememberDetails');
                }
                let userDetails = { token : token, userId: userId, name: name };
                userDetails = userDetails ? JSON.stringify(userDetails) : '';
                localStorage.setItem('userDetails', userDetails);
                // pushNotification(message.LOGIN_SUCCESS, 'success', 'TOP_RIGHT', 3000);
                history.push('/client-management');
            })
            .catch(error => {
                if (!error.response) {
                    pushNotification('Network Error.', 'error', 'TOP_RIGHT', 3000);
                }
                if(error && error.response) {
                    if(error.response.status === 401) {
                        error && pushNotification(message.WrongEAndPwd, 'error', 'TOP_RIGHT', 3000)
                    } else {
                        error && pushNotification(error.response.data.message, 'error', 'TOP_RIGHT', 3000)
                    }
                }
                dispatch(authFail());
            });
    };
};
