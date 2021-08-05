import React from 'react';
import './Users.scss';

import User from '../User/User';

const Users = ({ users }) => (
    <div className="users">
        { users.map(user => {
            return <User 
            key={user.email}
            photo={user.picture.large}
            firstName={user.name.first}
            lastName={user.name.last}
            city={user.location.city}
            state={user.location.state}
            street={user.location.street} />;
        }) }
    </div>
);

export default Users;