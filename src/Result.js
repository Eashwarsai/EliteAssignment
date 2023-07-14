import React, { useState } from "react";
import axios from "axios";
const College = () => {
  const [rollno, setRollno] = useState("");
  const [data, setData] = useState();
  const handleRollNumberChange = (event) => {
    setRollno(event.target.value);
  };
  const fetchStudentByRollno = (event) => {
    event.preventDefault();
    if (!rollno) {
      return;
    }
    axios
      .get(`http://localhost:5000/api/students/${rollno}`)
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        // console.log(data);
      })
      .catch((error) => {
        console.log("Error fetching student:", error);
        setData(null);
      });
  };
  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>Result </h1>
      <div style={formContainerStyle}>
        <form>
          <input
            type="text"
            style={inputStyle}
            onChange={handleRollNumberChange}
            placeholder="Enter Rollno"
          />
          <button
            type="submit"
            onClick={fetchStudentByRollno}
            style={buttonStyle}
          >
            Submit
          </button>
        </form>
      </div>
      <h3>Result of student with Rollno : </h3>
      {data && (
        <div>
          <h4>Name : {data.name} </h4>
          <h4>Grade : {data.Grade}</h4>
        </div>
      )}
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

export default College;
