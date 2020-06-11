import React, {useState} from 'react';
import './Post.css'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'


const Post = ({ authUserId, deletePost, disLikePosts, likePosts, authorName, author, date, avatar, postImg, post, likesCount, likes, comments, id, key }) => {
    let idA = authUserId ? authUserId._id : ''

    const [comment, setComment] = useState(true);
    // let classActive = comment ? 'active' : ''
    return (
        <div className='post_item' key={key}>
            <div className="post_item_info">
                <img className="post_item_info_avatar" src={avatar} alt="" />
                <div>
                    <h1>{authorName}</h1>
                    <p>{formatDistanceToNow(Date.parse(date), { includeSeconds: true, addSuffix: true })}</p>
                </div>
            </div>
            <p className="post_item_post" >{post}</p>
            <img className="post_item_img" src={`http://localhost:7777/${postImg}`} alt="" />
            <div className="links">
                <div className="like">
                    {
                        likes.includes(authUserId ? authUserId._id : '')
                            ? <FontAwesomeIcon className="liked" icon={faThumbsUp} onClick={() => disLikePosts(id)} />
                            : <FontAwesomeIcon icon={faThumbsUp} onClick={() => likePosts(id)} />
                    }
                    <span>{likesCount}</span>
                </div>
                <div className="like comment">
                    <FontAwesomeIcon icon={faComment} onClick={ () => setComment(!comment)} />
                    <span>{comments}</span>
                    {/* <div className={`comment_block ${classActive}`}>
                        <form>
                            <textarea name="comment"></textarea>
                            <button type="submit">Send</button>
                        </form>
                        <div className="comment_item">
                            <div className="flex">
                                <img src="" alt=""/>
                                <div>
                                    <p className="comment_author">tom Kenn</p>
                                    <p className="comment_date">10.10.2020</p>
                                </div>
                            </div>
                            <p className="coment_text">Its amazing post on yout page!!!</p>
                        </div>
                    </div> */}
                </div>
                {
                    idA === author
                        ? <div className="dop-nav">
                            <p onClick={() => deletePost(id)}>Delete</p>
                        </div>
                        : null
                }

            </div>
        </div>
    );
}


export default Post;