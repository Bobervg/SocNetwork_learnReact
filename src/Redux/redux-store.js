import { combineReducers, createStore } from "redux";
import sidebarDataReducer from './sidebarData-Reducer'
import profilePageDataReducer from './profilePageData-Reducer'
import dialogsPageDataReducer from './dialogsPageData-Reducer'
import usersPageDataReducer from "./usersPageData-Reducer"
import newsPageDataReducer from './newsPageData-Reducer'
import authDataReducer from "./auth-Reducer";

let reducersBunch = combineReducers({
    sidebarData: sidebarDataReducer,
    profilePageData: profilePageDataReducer,
    dialogsPageData: dialogsPageDataReducer,
    usersPageData: usersPageDataReducer,
    newsPageData: newsPageDataReducer,
    authData: authDataReducer
});

let store = createStore (reducersBunch)

window.store = store

export default store;