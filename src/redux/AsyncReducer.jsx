import {
  FETCH_USERS_SUCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
} from "./ActionTypes";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const AsyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        loading: true,
      };
    case FETCH_USERS_SUCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
export default AsyncReducer;
