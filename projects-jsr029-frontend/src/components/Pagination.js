import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button 
                        className="page-link" 
                        onClick={() => paginate(currentPage - 1)} 
                        aria-label="Previous"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                        <button 
                            onClick={() => paginate(number)} 
                            className="page-link"
                            aria-label={`Page ${number}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button 
                        className="page-link" 
                        onClick={() => paginate(currentPage + 1)} 
                        aria-label="Next"
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
