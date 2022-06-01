import { incrementDecrement } from "./incrementDecrement";
import {userReducer} from "./userReducer";
import { combineReducers } from "redux";
import {productReducer} from "./productReducer"

export const rootReducer = combineReducers({
    incrementDecrement,
    userReducer,
    productReducer,
})