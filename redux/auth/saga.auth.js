import {put, takeLatest} from 'redux-saga/effects';
import * as auth from './constant.auth';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function* Login({payload}) {
  try {
      let payload1={ 
        email:payload.email,
      password:payload.password,
      device_token:'zasdcvgtghnkiuhgfde345tewasdfghjkm'
      }
      console.log(payload);
      let res = yield axios.post('http://buddy.ropstambpo.com/api/login', payload1);
      let data = res.data.data;
      console.log('accessToken',data.access_token);
    yield  AsyncStorage.setItem('AccessToken',data.access_token);

    yield put({
      type: auth.SIGN_IN_RECIEVED,
      payload: payload1,
    });
  } catch (err) {
    yield put({
      type: auth.AUTH_ERROR,
      error: err,
    });
  }
}
function* getdata({}) {
  try {
    let accessToken = yield AsyncStorage.getItem('AccessToken');
    if (accessToken!=null || undefined )
    {
      yield put({
        type: auth.GET_AUTHRECIEVED,
        payload:accessToken
      });
    }
    else{
      yield put({
        type: auth.AUTH_ERROR,
        error: err,
      });
    }
 
      } catch (err) {
        yield put({
          type: auth.AUTH_ERROR,
          error: err,
        });
}
}
function* signoutUser() {
  try {
const token=yield AsyncStorage.removeItem('AccessToken');
console.log('signoit',token);
    yield put({
      type: auth.SIGNOUT_SUCCESS
    });
  } catch (err) {
    yield put({
      type: auth.AUTH_ERROR,
      error: err,
    });
  }
}

function* watchmanoflogin() {
  yield takeLatest(auth.SIGN_IN, Login);
}
function* watchmanofgetAuth() {
  yield takeLatest(auth.GET_AUTH, getdata);
}


function* watchmanofsignout() {
  yield takeLatest(auth.SIGN_OUT, signoutUser);
}

export const authsaga = [
  watchmanoflogin(),
  watchmanofgetAuth(),
  watchmanofsignout(),
];
