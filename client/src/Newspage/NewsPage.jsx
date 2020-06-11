import React from 'react';
import './NewsPage.css'
import PostContainer from '../Ui/Post/PostContainer';
import Preloader from '../Ui/Preloader/Preloader'

const NewPage = ({ news }) => {
    return (
        <div className="news_wrapper">
            {
                news
                    ? news.map(el => {
                        return <PostContainer
                            id={el._id}
                            key={el._id}
                            authorName={el.authorName}
                            avatar={el.authorAvatar}
                            post={el.post}
                            postImg={el.picturePost}
                            date={el.date}
                            likesCount={el.likesCount}
                            likes={el.likes}
                            author={el.author}
                        />
                    })
                    : <Preloader />
            }

        </div>
    );
}

export default NewPage;