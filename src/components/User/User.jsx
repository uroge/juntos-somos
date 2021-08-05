import React from 'react';
import './User.scss';

const User = ({ photo, firstName, lastName, state, city, street }) => {
    return (
        <div className="user">
            {/* <img src={photo} alt={firstName} className="user__photo" /> */}
            <div className="user__photo" style={{backgroundImage: `url('${photo}')`}}></div>
            <h3 className="user__name">{`${firstName} ${lastName}`}</h3>
            <p className="user__location">{`${city}, ${state}`}</p>
            <p className="user__street">{street}</p>
        </div>
    );
};

export default User;