import React, {useState} from 'react';
import c from './Pagination.module.css'

const Pagination = ({totalUsers, currentPage, onPageHandler, pageSize}) => {
    let pagesOfgUsers = Math.ceil(totalUsers / pageSize)
    let pages = []
    for (let i = 1; i <= pagesOfgUsers; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesOfgUsers / pageSize)
    let [portionNumber, setPortionNumber] = useState(1)

    let leftPortionNumber = (portionNumber - 1) * pageSize + 1
    let rightPortionNumber = portionNumber * pageSize

    const sstPortionStepMinusOne = () => {
        setPortionNumber(portionNumber - 1)
        onPageHandler(leftPortionNumber-pageSize)
    }
    const sstPortionStepPlusOne = () => {
        setPortionNumber(portionNumber + 1)
        onPageHandler(leftPortionNumber+pageSize)
    }
    const sstFirstPage = () => {
        setPortionNumber(portionNumber = 1)
        onPageHandler(1)
    }
    const setLastPage = () => {
        setPortionNumber(portionNumber = portionCount)
       onPageHandler(pagesOfgUsers)
    }

    return (
        <div className={c.pagesCount}>
            {portionNumber > 1 &&
                <button onClick={sstFirstPage}>FIRST</button>
            }
            {portionNumber > 1 &&
                <button onClick={sstPortionStepMinusOne}>PREV</button>
            }
            {pages.filter(f=> f>= leftPortionNumber && f<=rightPortionNumber).
            map(p => <span key={p}
                                  className={currentPage === p ? c.selected : ''}
                                  onClick={(e) => {
                                      onPageHandler(p)
                                  }}
            >{p}</span>)}
            {portionCount > portionNumber &&
                <button onClick={sstPortionStepPlusOne}>NEXT</button>
            }
            {portionCount > portionNumber &&
                <button onClick={setLastPage}>LAST</button>
            }


        </div>
    );
};

export default Pagination;