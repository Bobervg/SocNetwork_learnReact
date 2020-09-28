import { combineReducers, createStore } from "redux";
import sidebarDataReducer from './sidebarData-Reducer'
import postsPageDataReducer from './postsPageData-Reducer'
import dialogsPageDataReducer from './dialogsPageData-Reducer'

let reducersBunch = combineReducers({
    sidebarData: sidebarDataReducer,
    postsPageData: postsPageDataReducer,
    dialogsPageData: dialogsPageDataReducer
});

let store = createStore (reducersBunch)

export default store;