import React,{useEffect} from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import NavBarContainer from './NavBar/NavBarContainer';
import PostsPageContainer from './PostsPage/PostsPageContainer';
import MainPageContainer from './MainPage/MainPageContainer';
import ProfilePageContainer from './Profilepage/ProfilePageContainer';
import setAuthToken from './Middleware/setAuthToken';
import {loadUserThunk, loadThunk} from './Redux/auth'

import store from './Redux/store'
import SettingsPageContainer from './SettingsPage/SettingsPageContainer';
import NewsPageContainer from './Newspage/NewsPageContainer';
import FriendsPageContainer from './FriendsPage/FriendsPageContainer';



if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadThunk())
  }, [])
  
  return (
    <div className="App">
      <div className="container">
        <div className="conainer-nav">
          <NavBarContainer/>
        </div>
        <div className="conainer-content">
          <Route exact path='/posts' component={PostsPageContainer}/>
          <Route exact path='/main' component={MainPageContainer}/>
          <Route exact path='/profile/:profileId?' component={ProfilePageContainer} />
          <Route exact path='/settings' component={SettingsPageContainer}/>
          <Route exact path='/news' component={NewsPageContainer}/>
          <Route exact path='/myFriends' component={FriendsPageContainer}/>
        </div>
      </div>
    </div>
  );
}

export default App;
