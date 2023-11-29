import React from 'react'
import './Pagination.scss';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    let pageCount = 0
    // button.addEventListener('click', onClick)
    return (
        <div className='pagination'>
            {gotoPrevPage && <button onClick={gotoPrevPage} id='prevBtn'>Previous</button>}
            <p>{pageCount}</p>
            {gotoNextPage && <button onClick={gotoNextPage} id='nextBtn'>Next</button>}
        </div>
    )
}
