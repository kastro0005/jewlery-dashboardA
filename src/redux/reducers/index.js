import { combineReducers } from "redux";
import auth from "./auth";
import anillos from "./anillos";
import aretes from "./aretes";
import cadenas from "./cadenas";
import dijes from "./dijes";
import tobilleras from "./tobilleras";
import brazaletes from "./brazaletes";
import pircings from "./pircings";

export default combineReducers({
  auth,
  anillos,
  aretes,
  cadenas,
  dijes,
  tobilleras,
  brazaletes,
  pircings,
});
