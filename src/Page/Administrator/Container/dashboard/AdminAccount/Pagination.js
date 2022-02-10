import React from "react";

const Pagination = ({ users, postPerPage, onPageChange }) => {
  const getPages = () => {
    const pages = Math.ceil(users.length / postPerPage);
    const pageNumber = [];
    for (let i = 1; i < pages + 1; i++) {
      pageNumber.push(i);
    }
    return pageNumber;
  };
  return (
    <div className="Pagination_fl">
      {getPages().map(page => (
        <button key={page} onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
