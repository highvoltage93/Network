import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';

import { authReducer } from './auth';
import { mainPageReducer } from './mainPage';
import { postsPageReducer } from './posts';
import { profileReducer } from './profile';
import { newsReducer } from './news';
import { chatReducer } from './chat';

const reducer = combineReducers({
    auth: authReducer,
    mainpage: mainPageReducer,
    postPage: postsPageReducer,
    profile: profileReducer,
    news: newsReducer,
    chat: chatReducer
})


const store = createStore(reducer, applyMiddleware(thunk))

export default store