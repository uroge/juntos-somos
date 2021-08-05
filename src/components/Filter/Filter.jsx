import React from 'react';
import './Filter.scss';

const Filter = (props) => {
    return (
        <div className="filter">
            <p>Filter 9 of 25 users</p>
            <div className="filter__dropdown">
                <span>Filter by</span>
                <select name="options">
                    <option value="name">Name</option>
                    <option value="last-name">Last Name</option>
                </select>
            </div>
        </div>
    );
};

export default Filter;