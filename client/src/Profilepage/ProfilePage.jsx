import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { format } from 'date-fns'
import { differenceInYears } from 'date-fns'
import './ProfilePage.css'
import Preloader from '../Ui/Preloader/Preloader';
import PostContainer from '../Ui/Post/PostContainer';

import Friends from '../Ui/FriendsItem/Friends';
import ProfileItem from './ProfileItem';

const ProfilePage = ({ profileUser, history,profilePosts, match, addFriend, authUserId, profileFriends, startDialog }) => {
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
    if (!profileUser || !authUserId || !profilePosts) {
        return <Preloader />
    }



    let btn = authUserId ? authUserId.friends.includes(profileUser._id)
        ? <button className="addFriend">Remove</button>
        : <button onClick={() => addFriend(profileUser._id)} className="addFriend">Add To Friend</button> : null

    return (
        <div>
            {
                profileUser
                    ? <><div className="profile_page">
                        <div className="profile-left">
                            <img src={profileUser.avatar} alt="" />
                            <div className="btn_profile_wrapper">
                                {
                                    authUserId ? authUserId._id !== profileUser._id ? btn : null : null
                                }
                                <button onClick={() => {
                                    startDialog(profileUser._id)
                                    history.push(`/chat`)
                                }}>Start Chat</button>
                            </div>


                            <h3 className="total_friends">Friends <span>{profileFriends.length}</span></h3>
                            <div className="friends_list_wrap">
                                {profileFriends
                                    ? profileFriends.map(el => {
                                        return <Friends
                                            key={el._id}
                                            avatar={el.avatar}
                                            id={el._id}
                                            style="small"
                                            name={el.name} />
                                    })
                                    : ''}

                            </div>
                        </div>
                        <div className="profile-right">
                            <h3>{profileUser.name}</h3>
                            <span className="register-date">Register: {formatDistanceToNow(Date.parse(profileUser.registerDate), { includeSeconds: true, addSuffix: true })}</span>
                            <p className="profile_status">{profileUser.status ? profileUser.status : null}</p>
                            {
                                profileUser.birthDay === Date.now()
                                    ? null
                                    : <div className="profile_item">
                                        <p>Date :</p>
                                        <span>{format(Date.parse(profileUser.birthDay), 'dd-MMMM-yyyy')}</span>
                                        <span className="years">{differenceInYears(Date.parse(profileUser.birthDay), Date.now())} Years</span>
                                    </div>
                            }
                            <ProfileItem title='Email' info={profileUser.email}/>
                            <ProfileItem title='Gender' info={profileUser.gender}/>
                            <ProfileItem title='City' info={profileUser.city}/>
                            <div className="posts_page">
                                <h1 className="total_friends totap_posts">{profilePosts.length} Posts</h1>
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