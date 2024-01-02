import axios from "axios";
import {
  GET_BRAZALETES_SUCCESS,
  GET_BRAZALETES_FAIL,
  GET_BRAZALETE_SUCCESS,
  GET_BRAZALETE_FAIL,
} from "./types";

export const get_brazaletes = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/Brazaletes`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETES_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETES_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETES_FAIL,
    });
  }
};
export const get_brazalete = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/Brazalete/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_BRAZALETE_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_BRAZALETE_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_BRAZALETE_FAIL,
    });
  }
};
