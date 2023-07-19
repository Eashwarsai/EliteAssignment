import React, { useState } from "react";
import axios from "axios";
const Department = () => {
  const [dept, setDept] = useState("");
  const [data, setData] = useState([]);
  const handleDeptChange = (event) => {
    setDept(event.target.value);
  };
  const fetchStudentByDepartment = (event) => {
    event.preventDefault();
    if (!dept) {
      return;
    }
    axios
      .get(`http://localhost:5000/api/colleges/${dept}`)
      .then((response) => {
        console.log(response);
        setData(response.data);
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching student:", error);
        setData(null);
      });
  };
  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>Search By Department</h1>
      <div style={formContainerStyle}>
        <form>
          <input
            type="text"
            style={inputStyle}
            onChange={handleDeptChange}
            placeholder="Enter Department (Choose from CSE CSM or IT)"
          />
          <button
            type="submit"
            onClick={fetchStudentByDepartment}
            style={buttonStyle}
          >
            Submit
          </button>
        </form>
      </div>
      <h3>Data of students with same Department : </h3>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const appStyle = {
  display: "flex",
  flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#f0f0f0",
};

const titleStyle = {
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
};

const formContainerStyle = {
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
};

const inputStyle = {
  padding: "10px",
  marginRight: "10px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#ffffff",
  border: "1px solid #ccc",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Department;
