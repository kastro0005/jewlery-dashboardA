import {
  GET_TOBILLERAS_FAIL,
  GET_TOBILLERAS_SUCCESS,
  GET_TOBILLERA_FAIL,
  GET_TOBILLERA_SUCCESS,
} from "redux/actions/Tobillera/types";

const initialState = {
  tobilleras: null,
  tobillera: null,
};

export default function tobilleras(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TOBILLERAS_SUCCESS:
      return {
        ...state,
        tobilleras: payload.tobilleras,
      };
    case GET_TOBILLERAS_FAIL:
      return {
        ...state,
        tobilleras: null,
      };
    case GET_TOBILLERA_SUCCESS:
      return {
        ...state,
        tobillera: payload.tobillera,
      };
    case GET_TOBILLERA_FAIL:
      return {
        ...state,
        tobillera: null,
      };
    default:
      return state;
  }
}
