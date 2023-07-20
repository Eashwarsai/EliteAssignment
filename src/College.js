import React, { useState } from "react";
import axios from "axios";
const College = () => {
    const [clg, setClg] = useState("");
    const [data, setData] = useState([]);
    const handleCollegeChange = (event) => {
      setClg(event.target.value);
    };
    const fetchStudentByCollege = (event) => {
      event.preventDefault();
      if (!clg) {
        return;
      }
      //https://5000-eashwarsai-eliteassignm-qbdn27zf5zg.ws-us101.gitpod.io/(replace the url in axios get
      //with this kind of url from gitpod or sandbox you get while running)
      axios
        .get(`http://localhost:5000/api/${clg}`)
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
      <h1 style={titleStyle}>Search By College</h1>
      <div style={formContainerStyle}>
        <form>
          <input
            type="text"
            style={inputStyle}
            onChange={handleCollegeChange}
            placeholder="Enter College (Choose one from KMIT NGIT KMEC)"
          />
          <button
            type="submit"
            onClick={fetchStudentByCollege}
            style={buttonStyle}
          >
            Submit
          </button>
        </form>
      </div>
    <h3>Data of students with same college : </h3>
    <ul>
    {data.map((item) => (
            <li key={item._id}>
                {item.name}
            </li>
        ))
    }
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

export default College;
