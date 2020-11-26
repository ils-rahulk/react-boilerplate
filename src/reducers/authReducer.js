import {
    AUTH_START, AUTH_START_SUCCESS, AUTH_START_FAILURE
} from 'actions/Auth/actionTypes';
import { updateObject } from './utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false
};

const authStart = ( state ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

//   const authLogout = (state, action) => {
//       return updateObject(state, { token: null, userId: null });
//   };

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
    case AUTH_START: return authStart(state, action);
    case AUTH_START_SUCCESS: return authSuccess(state, action);
    case AUTH_START_FAILURE: return authFail(state, action);
        //   case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    default:
        return state;
    }
};

export default reducer;
