import { combineReducers } from "redux";
import addUser from "./addUser";
import loggedReducer from "./loggedUser";
 const reducers = combineReducers(
    {
    add: addUser,
    logged: loggedReducer
    }
)

export default reducers

