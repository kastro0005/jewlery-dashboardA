import {
  GET_PIRCINGS_FAIL,
  GET_PIRCINGS_SUCCESS,
  GET_PIRCING_FAIL,
  GET_PIRCING_SUCCESS,
} from "redux/actions/Pircing/types";

const initialState = {
  pircings: null,
  pircing: null,
};

export default function pircings(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PIRCINGS_SUCCESS:
      return {
        ...state,
        pircings: payload.pircings,
      };
    case GET_PIRCINGS_FAIL:
      return {
        ...state,
        pircings: null,
      };
    case GET_PIRCING_SUCCESS:
      return {
        ...state,
        pircing: payload.pircing,
      };
    case GET_PIRCING_FAIL:
      return {
        ...state,
        pircing: null,
      };
    default:
      return state;
  }
}
