import { combineReducers, createStore, applyMiddleware } from "redux";
import sidebarDataReducer from './sidebarData-Reducer'
import profilePageDataReducer from './profilePageData-Reducer'
import dialogsPageDataReducer from './dialogsPageData-Reducer'
import usersPageDataReducer from "./usersPageData-Reducer"
import newsPageDataReducer from './newsPageData-Reducer'
import authDataReducer from "./auth-Reducer";
import thunkMiddleWare from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'


let reducersBunch = combineReducers({
    sidebarData: sidebarDataReducer,
    profilePageData: profilePageDataReducer,
    dialogsPageData: dialogsPageDataReducer,
    usersPageData: usersPageDataReducer,
    newsPageData: newsPageDataReducer,
    authData: authDataReducer,
    form: formReducer
});

let store = createStore (reducersBunch, applyMiddleware(thunkMiddleWare))

window.store = store

export default store;