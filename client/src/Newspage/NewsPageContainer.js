import React, {useEffect} from 'react';
import NewPage from './NewsPage';
import { connect } from 'react-redux';
import { getNewsThunk } from '../Redux/news';

const NewPageContainer = (props) => {

    useEffect(() => {
        props.getNews()
    }, [])

    return <NewPage {...props} />
}

let mapStateToProps = (state) => {
    return {
        news: state.news.news
    }
}


let mapDispatchToprops = dispatch => {
    return {
        getNews: () => {
            dispatch(getNewsThunk())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(NewPageContainer)
