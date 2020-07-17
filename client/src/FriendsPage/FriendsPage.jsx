import React from 'react';
import './FriendsPage.css'
import Friends from '../Ui/FriendsItem/Friends';
import Preloader from '../Ui/Preloader/Preloader'

const FriendsPage = ({ friends }) => {
    return (<>
        <h1 className="all_friends">You have {friends.length > 0 ? friends.length : ''} Friends</h1>
        <div className="friends_wrapper">
            {
                friends.length > 0
                    ? friends.map(el => {
                        return <Friends
                            key={el._id}
                            avatar={el.avatar}
                            id={el._id}
                            name={el.name}
                        />
                    })
                    : <h1>Yoy dont have friends</h1>
            }

        </div>
    </>);
}

export default FriendsPage;