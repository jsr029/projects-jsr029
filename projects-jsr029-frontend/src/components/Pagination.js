// src/components/Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalPages, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  return (
    <nav className="mt-4">
      <ul className="pagination justify-content-center">
        {pageNumbers.map(num => (
          <li key={num} className={`page-item ${currentPage === num ? 'active' : ''}`}>
            <button onClick={() => paginate(num)} className="page-link">{num}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;