import {
  SIGN_IN,
  SIGN_OUT,
  AUTH_ERROR,
  GET_AUTH,
} from './constant.auth.js';

export const SignIn = payload => {
  return {
    type: SIGN_IN,
    payload: payload,
  };
};
export const GetData = payload => {
  return {
    type: GET_AUTH  ,
    payload: payload,
  };
};
export const SignOut =payload => {
  return {
    type: SIGN_OUT,
    payload:payload
  };
};

export const authError = err => {
  return {
    type: AUTH_ERROR,
    payload: err,
  };
};
