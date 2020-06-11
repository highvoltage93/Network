import axios from 'axios'

const SET_ALL_NEWS = "SET_ALL_NEWS"

const initialState = {
    news: [],
    isLoadingNews: true
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_NEWS:
            return{
                ...state,
                news: [...action.news]
            }
    
        default:
            return state;
    }
}




export const getNewsThunk = () => dispatch => {
        axios
            .get('/news')
            .then(res => {dispatch({
                type: SET_ALL_NEWS,
                news: res.data
            })
            })
}