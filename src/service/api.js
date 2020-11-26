/* eslint-disable no-undef */
import axios from 'axios'
import { pushNotification } from 'utils/notification';
import { getUserDetails, commonLogoutFunc } from 'utils/helper';
import browserHistory from 'utils/history';

const baseUrl = 'apiurl';

export const authInstance =  axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    crossDomain: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})

const axiosInstance =  axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    crossDomain: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    }
})
axiosInstance.interceptors.request.use(function (config) {
    const token = getUserDetails().token;
    config.headers.Authorization =  `Bearer ${ token }`;
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    if (response.data && response.data.error) {
        return Promise.reject(response);
    }
    return response;
}, (error) => {
    if (!error.response) {
        pushNotification('Network Error.', 'error', 'TOP_RIGHT', 3000);
        return Promise.reject(error);
    }
    if (error.response.status === 440 || error.response.status === 401) {
        pushNotification('Your session has expired please login again.', 'error', 'TOP_RIGHT', 3000);
        commonLogoutFunc(browserHistory);
    }
    return Promise.reject(error);
});

export default axiosInstance;
