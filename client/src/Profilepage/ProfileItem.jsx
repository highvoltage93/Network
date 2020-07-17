import React from 'react';

const ProfileItem = ({title, info}) => {
    return (
        <div className="profile_item">
            <p>{title} :</p>
            <span>{info}</span>
        </div>
    );
}

export default ProfileItem;