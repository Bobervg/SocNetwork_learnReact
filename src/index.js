import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/State';
//import {addPost, addMessage, updateNewPost, updateNewMessage, subscribe} from './Redux/State';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntiretree = () => {
    ReactDOM.render(
        
      <React.StrictMode>
          <BrowserRouter>
        <App  stateData={store.getState()} dispatch={store.dispatch.bind(store)}  />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }

rerenderEntiretree(store.getState());

store.subscribe(rerenderEntiretree);


//addPost('yooooooo');


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//addMessage={store.addMessage.bind(store)} updateNewPost={store.updateNewPost.bind(store)} updateNewMessage={store.updateNewMessage.bind(store)} addPost={store.addPost.bind(store)}