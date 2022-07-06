import {fromJS, Map} from 'immutable';
import {
  SIGN_IN,
  SIGN_IN_RECIEVED,
  GET_AUTH,
  GET_AUTHRECIEVED,
  SIGN_OUT,
  SIGNOUT_SUCCESS,
  AUTH_ERROR,

} from './constant.auth';

const initialState = fromJS({
  isLoading: false,
  error: Map(),
  data: Map(),
  isAuthenticated: false,
});

const AuthenticationReducer = (state = initialState, action = {}) => {
  const {type, payload, error} = action;
  switch (type) {
    case SIGN_IN:
      return state.set('isLoading', true).set('error', Map());
      case SIGN_IN_RECIEVED:
        return state
        .set('isLoading', false)
        .set('isAuthenticated',true)
        .set('error', Map())
        .set('data', fromJS(payload));
        
    
      case GET_AUTH:
        return state.set('isLoading', true).set('error', Map());
        case GET_AUTHRECIEVED:
          return state
        .set('isLoading', false)
        .set('error', Map()).
        set('isAuthenticated',true);

        case SIGN_OUT:
          return state.
          set('isLoading', true).
          set('error', Map());
          case SIGNOUT_SUCCESS:
           return state
           .set('isAuthenticated',false)
           .set('isLoading', false)
           .set('error', Map())
   ;

    case AUTH_ERROR:
      return state.set('isLoading', false).set('error', fromJS(error));
    default:
      return state;
  }
};
export default AuthenticationReducer;
