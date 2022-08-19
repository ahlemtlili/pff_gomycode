import {
  DELETE_PARENT_FAIL,
  DELETE_TEACHER_FAIL,
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_SUCCESS,
  GET_ELEVES_FAIL,
  GET_ELEVES_SUCCESS,
  GET_PARENTS_FAIL,
  GET_PARENTS_SUCCESS,

  GET_TEACHERS_FAIL,
  GET_TEACHERS_SUCCESS,
  LOGOUT,
  SIGNIN_ADMIN_FAIL,
  SIGNIN_ADMIN_SUCCESS,
  SIGNIN_PARENT_FAIL,
  SIGNIN_PARENT_SUCCESS,
  SIGNIN_USER_FAIL,
  SIGNIN_USER_SUCCESS,
  SIGNUP_CHILD_FAIL,
  SIGNUP_CHILD_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER_SUCCESS,
} from "../constants/userTypes";

const initialState = {
  loading: false,
  currentUser: {},
  errors: null,
  eleves:[],
  parents:[],
  enseignants:[],
  
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
   
    case DELETE_PARENT_FAIL: return {...state, errors: payload}
  case DELETE_TEACHER_FAIL: return {...state, errors: payload}
    case SIGNUP_USER_SUCCESS:
      return { ...state, currentUser: payload };
    case SIGNUP_USER_FAIL:
      return { ...state, errors: payload };
      case SIGNUP_CHILD_SUCCESS:
      return { ...state, currentUser: payload };
    case SIGNUP_CHILD_FAIL:
      return { ...state, errors: payload };
    case SIGNIN_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, currentUser: payload.user };
    case SIGNIN_USER_FAIL:
      return { ...state, errors: payload };
      case SIGNIN_PARENT_SUCCESS:
        localStorage.setItem("token", payload.token);
        return { ...state, currentUser: payload.user };
      case SIGNIN_PARENT_FAIL:
        return { ...state, errors: payload };
      case SIGNIN_ADMIN_SUCCESS:
        localStorage.setItem("token", payload.token);
        return { ...state, currentUser: payload.user };
      case SIGNIN_ADMIN_FAIL:
        return { ...state, errors: payload };
    case GET_CURRENT_USER_SUCCESS:
      return { ...state, currentUser: payload };
    case GET_CURRENT_USER_FAIL:
      return { ...state, errors: payload };
      case GET_ELEVES_SUCCESS:
        return { ...state, eleves: payload };
        case GET_ELEVES_FAIL:
          return { ...state, errors: payload };
          case GET_PARENTS_SUCCESS:
            return { ...state, parents: payload };
            case GET_PARENTS_FAIL:
              return { ...state, errors: payload };
              case GET_TEACHERS_SUCCESS:
                return { ...state, enseignants:payload };
                case GET_TEACHERS_FAIL:
                  return { ...state, errors: payload };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        loading: false,
        currentUser: {},
        errors: null,
      };
    default:
      return state;
  }
};
