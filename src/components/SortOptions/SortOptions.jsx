import React from 'react';
import './SortOptions.scss';

const SortOptions = (props) => {
    return (
        <div className="sort">
            <h3 className="sort__header">By Gender</h3>
            <div className="sort__option">
                <input type="checkbox" />
                <span>Male</span>
            </div>
            <div className="sort__option">
                <input type="checkbox" />
                <span>Female</span>
            </div>
            <h3 className="sort__header">By State</h3>
            <div className="sort__option">
                <input type="checkbox" />
                <span>São Paulo</span>
            </div>
            <div className="sort__option">
                <input type="checkbox" />
                <span>Rio de Janeiro</span>
            </div>
            <div className="sort__option">
                <input type="checkbox" />
                <span>Minas Gerais</span>
            </div>
            <div className="sort__option">
                <input type="checkbox" />
                <span>Espírito Santo</span>
            </div>
            <div className="sort__option">
                <input type="checkbox" />
                <span>Bahia</span>
            </div>
        </div>
    );
};

export default SortOptions;