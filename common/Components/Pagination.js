import React from 'react';
import c from './Pagination.module.css'

const Pagination = ({totalUsers, currentPage, onPageHandler, pageSize}) => {
    let pagesOfgUsers = Math.ceil(totalUsers / pageSize)
    let pages = []
    for (let i = 1; i <= pagesOfgUsers; i++) {
        pages.push(i)
    }
    return (
        <div className={c.pagesCount}>
            {pages.map(p => <span key={p}
                                  className={currentPage === p && c.selected}
                                  onClick={(e) => {
                                      onPageHandler(p)
                                  }}
            >{p}</span>)}

        </div>
    );
};

export default Pagination;