import React from 'react';
import { useState } from 'react';
import './Pagination.scss';

const Pagination = ({ bikesPerPage, totalBikes, paginate }) => {
    const pageNumbers = [];
    const [activePage, setActivePage] = useState(1);
    
    for(let i = 1; i <= Math.ceil(totalBikes / bikesPerPage); i++) {
        pageNumbers.push(i);
    }

    const changePage = (event, number) => {
        event.preventDefault();
        paginate(number);
        setActivePage(number);
    }

    return(
        <div className="pagination">
            <ul className="pagination__list">
                { pageNumbers.map(pageNumber => (
                    <li key={pageNumber} 
                    onClick={event => changePage(event, pageNumber)} 
                    className={`pagination__item${activePage === pageNumber ? ' active' : ''}`}>
                        <a href="!#" className="pagination__link">
                            {pageNumber}
                        </a>
                    </li>
                )) }
            </ul>
        </div>
    )
};

export default Pagination;