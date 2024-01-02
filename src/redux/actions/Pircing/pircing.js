import axios from "axios";
import {
  GET_PIRCINGS_SUCCESS,
  GET_PIRCINGS_FAIL,
  GET_PIRCING_SUCCESS,
  GET_PIRCING_FAIL,
} from "./types";

export const get_pircings = () => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/Pircings`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCINGS_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCINGS_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCINGS_FAIL,
    });
  }
};
export const get_pircing = (id) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/Pircing/${id}`,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: GET_PIRCING_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: GET_PIRCING_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: GET_PIRCING_FAIL,
    });
  }
};
