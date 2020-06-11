import React, { useRef } from 'react';
import './PostsPage.css'

import Image from '../Utills/Pictures/image.png'
import PostContainer from '../Ui/Post/PostContainer';

const PostsPage = (props) => {
    let data = props.posts.map(el => {
        return <PostContainer
            id={el._id}
            key={el._id}
            authorName={el.authorName}
            avatar={el.authorAvatar}
            post={el.post}
            postImg={el.picturePost}
            date={el.date}
            likesCount={el.likesCount}
            author={el.author}
            likes={el.likes} />
    })

    const inputEl = useRef('');

    let onSubmit = (e) => {
        e.preventDefault()
        let post = {
            post: e.target.post.value,
            post_picture: e.target.post_picture.files[0]
        }
        props.addPost(post)
        inputEl.current.value = "";
    }



    return (
        <div className="post-wrapper">
            <form onSubmit={onSubmit} className="create-post">
                <p>Create New Post</p>
                <input ref={inputEl} name="post" type="text" placeholder="" />
                <label className="fileInput" htmlFor="post_picture">
                    <input type="file" name="post_picture" id="post_picture" />
                    <img src={Image} alt="" />
                </label>

                <button>Save</button>
            </form>

            {
                data
            }
        </div>
    );
}

export default PostsPage;