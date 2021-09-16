import { BUY_CAKE } from "./ActionTypes";
import axios from "axios";
import {
  BUY_ICE_CREAM,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCESS,
  FETCH_USERS_FAILURE,
} from "./ActionTypes";
export const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "Buying_cake",
  };
};

export const buyIceCream = () => {
  return {
    type: BUY_ICE_CREAM,
    info: "Buying icecream",
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUserSucess = (users) => {
  return {
    type: FETCH_USERS_SUCESS,
    payload: users,
  };
};
export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export function fetchUsers() {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const users = res.data.map((user) => user.id);
        dispatch(fetchUserSucess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
}
