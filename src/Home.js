// import React from "react";

// const Home = () => {
//   return (
//     <div style={appStyle}>
//       <h1 style={titleStyle}>Responsive Page</h1>
//       <div style={cardContainerStyle}>
//         <CardComponent />
//         <CardComponent />
//         <CardComponent />
//       </div>
//     </div>
//   );
// };

// const CardComponent = () => {
//   return (
//     <div style={cardStyle}>
//       <h3 style={cardHeadingStyle}>Card</h3>
//       <p style={cardContentStyle}>This is the content of the card.</p>
//     </div>
//   );
// };

// const appStyle = {
//   textAlign: "center",
// };

// const titleStyle = {
//   marginBottom: "20px",
// };

// const cardContainerStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "center",
// };

// const cardStyle = {
//   width: "300px",
//   backgroundColor: "#f0f0f0",
//   padding: "20px",
//   borderRadius: "5px",
//   margin: "10px",
//   boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
// };

// const cardHeadingStyle = {
//   marginTop: "0",
// };

// const cardContentStyle = {
//   marginBottom: "0",
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>WELCOME</h1>
      <div style={cardContainerStyle}>
        <CardComponent to="/result" wcomp="Result" color="#ffcccc" />
        <CardComponent to="/college" wcomp="College" color="#ccffcc" />
        <CardComponent to="/dept" wcomp="Department" color="#ccccff" />
      </div>
    </div>
  );
};

const CardComponent = ({ to, wcomp ,color  }) => {
  const cardStyle = {
    backgroundColor: color,
    width: "300px",
    padding: "20px",
    borderRadius: "5px",
    margin: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Link to={to} style={cardStyle}>
      <h3 style={cardHeadingStyle}>{wcomp}</h3>
      <p style={cardContentStyle}>Click here  to  navigate into {wcomp} page .</p>
    </Link>
  );
};

const appStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#f0f0f0",
};

const titleStyle = {
  marginBottom: "20px",
};

const cardContainerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  maxWidth: "900px",
};

const cardHeadingStyle = {
  marginTop: "0",
};

const cardContentStyle = {
  marginBottom: "0",
};

export default Home;
