// App.jsx

import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        if (!res.ok) throw new Error("API error");
        const data = await res.json();
        setEmployees(data);
      } catch (err) {
        alert("failed to fetch data");
        setError(true);
      }
    };

    fetchEmployees();
  }, []);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentEmployees = employees.slice(indexOfFirst, indexOfLast);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  if (error) return null;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Employee Data Table
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <thead style={{ backgroundColor: "#008060", color: "#fff" }}>
          <tr>
            <th style={{ padding: "12px" }}>ID</th>
            <th style={{ padding: "12px" }}>Name</th>
            <th style={{ padding: "12px" }}>Email</th>
            <th style={{ padding: "12px" }}>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((emp) => (
            <tr key={emp.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "10px" }}>{emp.id}</td>
              <td style={{ padding: "10px" }}>{emp.name}</td>
              <td style={{ padding: "10px" }}>{emp.email}</td>
              <td style={{ padding: "10px" }}>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
};

export default App;
