import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Profile/ProfileContainer'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersComponent from './components/Users/UsersComponent'
import NewsContainer from './components/News/NewsContainer'
import Login from './components/Login/Login';

const App = (props) => {
  return (
    <div className='app'>
      <div className='app-wrapper'>
      <HeaderContainer />
      <Navbar sidebarData={props.store.getState().sidebarData} />
      <div className='app-wrapper-content'>
        <Route path='/profile:userId?' render={() => <ProfileContainer  />} />
        <Route path='/dialogs' render={() => <DialogsContainer />} />
        <Route path='/news' render={() => <NewsContainer />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
        <Route path='/users' render={() => <UsersComponent />} />
        <Route path='/login' render={() => <Login />} />
      </div>
      </div>
    </div>
  );
}

export default App;
