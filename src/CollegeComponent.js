// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const CollegeComponent = () => {
//   const [colleges, setColleges] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/colleges")
//       .then((response) => {
//         setColleges(response.data);
//       })
//       .catch((error) => {
//         console.log("Error fetching colleges:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Colleges</h2>
//       <ul>
//         {colleges.map((college) => (
//           <li key={college._id}>
//             <h3>{college.collegeName}</h3>
//             <ul>
//               {college.departments.map((department) => (
//                 <li key={department._id}>
//                   <h4>{department.departmentName}</h4>
//                   <ul>
//                     {department.students.map((student) => (
//                       <li key={student._id}>
//                         {student.name} (Roll No: {student.rollNumber})
//                       </li>
//                     ))}
//                   </ul>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CollegeComponent;
import React, { useEffect, useState } from "react";
import axios from "axios";

const CollegeComponent = () => {
  const [colleges, setColleges] = useState([]);
  const [rollNumber, setRollNumber] = useState();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/colleges")
      .then((response) => {
        setColleges(response.data);
      })
      .catch((error) => {
        console.log("Error fetching colleges:", error);
      });
  }, []);

  const handleRollNumberChange = (event) => {
    setRollNumber(event.target.value);
  };

  // const fetchStudentByRollNumber = () => {
  //   if (!rollNumber) {
  //     return;
  //   }

  //   axios
  //     .get(`http://localhost:5000/api/students/${rollNumber}`)
  //       .then((response) => {
  //           console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching student:", error);
  //       setStudent(null);
  //     });
  // };
  const fetchStudentByDept = () => {
    if (!rollNumber) {
      return;
    }

    axios
      .get(`http://localhost:5000/api/colleges/${rollNumber}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error fetching student:", error);
        setStudent(null);
      });
  };
  const fetchStudentByRollNumber = () => {
    if (!rollNumber) {
      return;
    }

    axios
      .get(`http://localhost:5000/api/${rollNumber}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log("Error fetching student:", error);
        setStudent(null);
      });
  };

  return (
    <div>
      <h2>Colleges</h2>
      {/* Existing code to display colleges data */}

      <h2>Fetch Student Data by Roll Number</h2>
      <div>
        <input
          type="text"
          value={rollNumber}
          onChange={handleRollNumberChange}
        />
        <button onClick={fetchStudentByRollNumber}>Fetch Student</button>
      </div>
        
      {student && (
        <div>
          <h3>Student Details</h3>
          <p>Name: {student.name}</p>
          <p>Roll Number: {student.rollNumber}</p>
          {/* Additional student details */}
        </div>
      )}
    </div>
  );
};

export default CollegeComponent;
