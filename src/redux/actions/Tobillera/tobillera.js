import axios from "axios";
import {
  GET_TOBILLERAS_FAIL,
  GET_TOBILLERAS_SUCCESS,
  GET_TOBILLERA_FAIL,
  GET_TOBILLERA_SUCCESS,
} from "./types";

export const get_tobilleras = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/Tobilleras`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERAS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERAS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERAS_FAIL,
    });
  }
};
export const get_tobillera = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/Tobillera/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_TOBILLERA_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_TOBILLERA_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_TOBILLERA_FAIL,
    });
  }
};
