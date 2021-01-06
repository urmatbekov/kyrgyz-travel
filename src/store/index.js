import reduce from "../reduce";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";

const store = createStore(reduce, applyMiddleware(thunk))

export default store;



