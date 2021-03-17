import { combineReducers } from "redux";
import versionReducer from "./versionReducer";
import moviesReducer from "./moviesReducer";
import pagesReducer from "./pagesReducer";
import handleInputReducer from "./handleInputReducer";
export default combineReducers({
    movies: moviesReducer,
    version: versionReducer,
    page: pagesReducer,
    input: handleInputReducer,
});
