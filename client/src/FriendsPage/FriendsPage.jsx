import React from 'react';
import './FriendsPage.css'
import Friends from '../Ui/FriendsItem/Friends';
import Preloader from '../Ui/Preloader/Preloader'
 
const FriendsPage = ({friends}) => {
    debugger
    return (
        <div className="friends_wrapper">
            {
                friends.length > 0
                ? friends.map(el => {
                    return <Friends/>
                })
                : <Preloader/>
            }
           
        </div>
    );
}
 
export default FriendsPage;