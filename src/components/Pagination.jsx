// components/Pagination.jsx

import React from "react";

const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        className="pagination-btn"
        onClick={onPrev}
        disabled={currentPage <= 1}
        data-testid="prev-button"
        style={{
          margin: "0 10px",
          padding: "8px 16px",
          backgroundColor: "#008060",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: currentPage <= 1 ? "not-allowed" : "pointer",
          opacity: currentPage <= 1 ? 0.6 : 1,
        }}
      >
        Previous
      </button>

      <span
        data-testid="page-number"
        style={{ margin: "0 10px", fontWeight: "bold" }}
      >
        {currentPage}
      </span>

      <button
        className="pagination-btn"
        onClick={onNext}
        disabled={currentPage >= totalPages}
        data-testid="next-button"
        style={{
          margin: "0 10px",
          padding: "8px 16px",
          backgroundColor: "#008060",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
          opacity: currentPage >= totalPages ? 0.6 : 1,
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
