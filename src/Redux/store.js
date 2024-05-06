import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import userReducer from "./users/user.reducer";
import { thunk } from "redux-thunk";
import { invReducer } from "./invs/invs.reducer";

let rootReducer = combineReducers({
    userReducer:userReducer,
    invReducer:invReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))