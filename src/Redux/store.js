import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import userReducer from "./users/user.reducer";
import { thunk } from "redux-thunk";

let rootReducer = combineReducers({
    userReducer:userReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))