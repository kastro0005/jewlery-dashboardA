import {
  GET_BRAZALETES_FAIL,
  GET_BRAZALETES_SUCCESS,
  GET_BRAZALETE_FAIL,
  GET_BRAZALETE_SUCCESS,
} from "redux/actions/Brazalete/types";

const initialState = {
  brazaletes: null,
  brazalete: null,
};

export default function brazaletes(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BRAZALETES_SUCCESS:
      return {
        ...state,
        brazaletes: payload.brazaletes,
      };
    case GET_BRAZALETES_FAIL:
      return {
        ...state,
        brazaletes: null,
      };
    case GET_BRAZALETE_SUCCESS:
      return {
        ...state,
        brazalete: payload.brazalete,
      };
    case GET_BRAZALETE_FAIL:
      return {
        ...state,
        brazalete: null,
      };
    default:
      return state;
  }
}
