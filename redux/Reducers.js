import {combineReducers} from 'redux';
import AuthenticationReducer from './auth/reducer.auth';

const RootReducer = combineReducers({
  Auth: AuthenticationReducer,
});
export default RootReducer;
