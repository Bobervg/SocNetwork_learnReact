import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './Redux/State';
import {addPost, addMessage, updateNewPost, updateNewMessage, subscribe} from './Redux/State';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntiretree = (state) => {
    ReactDOM.render(
        
      <React.StrictMode>
          <BrowserRouter>
        <App stateData={state} addPost={addPost} addMessage={addMessage} updateNewPost={updateNewPost} updateNewMessage={updateNewMessage}/>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
    }

subscribe(rerenderEntiretree);


//addPost('yooooooo');
rerenderEntiretree(state);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
