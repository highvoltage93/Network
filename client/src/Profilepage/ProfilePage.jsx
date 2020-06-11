import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import './ProfilePage.css'
import Preloader from '../Ui/Preloader/Preloader';
import PostContainer from '../Ui/Post/PostContainer';

const ProfilePage = ({ profileUser, profilePosts, match, addFriend }) => {
    let data = profilePosts.map(el => {
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

    return (
        <div>
            {
                profileUser
                    ? <><div className="profile_page">
                        <div className="profile-left">
                            <img src={profileUser.avatar} alt="" />
                            <button onClick={() => addFriend(profileUser._id)} className="addFriend">Add To Friend</button>
                            <button className="addFriend">Remove</button>
                        </div>
                        <div className="profile-right">
                            <h3>{profileUser.name}</h3>
                            <span className="register-date">Register: {formatDistanceToNow(Date.parse(profileUser.registerDate), { includeSeconds: true, addSuffix: true })}</span>
                            <p className="profile_status">{profileUser.status ? profileUser.status : null}</p>
                            <div className="profile_item">
                                <p>Email :</p>
                                <span>{profileUser.email}</span>
                            </div>
                            <div className="profile_item">
                                <p>Gender :</p>
                                <span>{profileUser.gender}</span>
                            </div>
                            <div className="posts_page">
                                {
                                    profileUser._id === match.params.profileId
                                        ? data
                                        : <Preloader />
                                }

                            </div>
                        </div>
                    </div>

                    </>
                    : <Preloader />
            }

        </div>
    );
}

export default ProfilePage;