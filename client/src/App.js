import React,{useEffect, useState} from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import NavBarContainer from './NavBar/NavBarContainer';
import PostsPageContainer from './PostsPage/PostsPageContainer';
import MainPageContainer from './MainPage/MainPageContainer';
import ProfilePageContainer from './Profilepage/ProfilePageContainer';
import setAuthToken from './Middleware/setAuthToken';
import {loadThunk, onlineTrue} from './Redux/auth'
import store from './Redux/store'
import SettingsPageContainer from './SettingsPage/SettingsPageContainer';
import NewsPageContainer from './Newspage/NewsPageContainer';
import FriendsPageContainer from './FriendsPage/FriendsPageContainer';


import socketIOClient from "socket.io-client";
import { connect } from 'react-redux';
import ChatContainer from './ChatPage/ChatContainer';
const ENDPOINT = "http://127.0.0.1:7777";



if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = (props) => {

  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("online", data => {
      setResponse(data);
      props.onlineSet(data.online)
    });

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
          <Route path='/chat' component={ChatContainer}/>
          <Route exact path='/myFriends' component={FriendsPageContainer}/>
        </div>
      </div>
    </div>
  );
}


// export default App

const mapDispatchToProps = (dispatch) => {
  return {
    onlineSet: (online) => {
      dispatch(onlineTrue(online))
    }
  }
}

export default connect(null, mapDispatchToProps)(App)