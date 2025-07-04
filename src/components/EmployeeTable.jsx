import React from "react";
import "./EmployeeTable.css";

const EmployeeTable = ({ data }) => {
  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
