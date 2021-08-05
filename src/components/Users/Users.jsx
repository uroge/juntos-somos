import React from 'react';
import './Users.scss';

import User from '../User/User';

const Users = (props) => (
    <div className="users">
        { props.users.map(user => {
            return <User />;
        }) }
    </div>
);

export default Users;