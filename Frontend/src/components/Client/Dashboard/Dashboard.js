import React from "react";
import "./Dashboard.css";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

function Dashboard() {
  let storeObj = useSelector((store) => {
    return store;
  });
  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <h1>
        welcome {storeObj.userDetails.firstName} {storeObj.userDetails.lastName}
      </h1>
      <img className="profileImg"
        src={`http://localhost:8999/${storeObj.userDetails.profilePic}`}
        alt="profilePic"
      />
    </div>
  );
}

export default Dashboard;
