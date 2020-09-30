import { combineReducers, createStore } from "redux";
import sidebarDataReducer from './sidebarData-Reducer'
import postsPageDataReducer from './postsPageData-Reducer'
import dialogsPageDataReducer from './dialogsPageData-Reducer'
import usersPageDataReducer from "./usersPageData-Reducer"
import newsPageDataReducer from './newsPageData-Reducer'

let reducersBunch = combineReducers({
    sidebarData: sidebarDataReducer,
    postsPageData: postsPageDataReducer,
    dialogsPageData: dialogsPageDataReducer,
    usersPageData: usersPageDataReducer,
    newsPageData: newsPageDataReducer
});

let store = createStore (reducersBunch)

window.store = store

export default store;