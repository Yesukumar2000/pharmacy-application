import React, { useRef, useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let ageInputRef = useRef();
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let mobileNoInputRef = useRef();
  let profilePicInputRef = useRef();
  let [profilePic, setProfilePic] = useState("./images/noimagepic.png");

  let OnSignupUsingFD = async () => {
    let dataToSend = new FormData();

    dataToSend.append("firstName", firstNameInputRef.current.value);
    dataToSend.append("lastName", lastNameInputRef.current.value);
    dataToSend.append("age", ageInputRef.current.value);
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);
    dataToSend.append("mobileNo", mobileNoInputRef.current.value);
    for (let i = 0; i < profilePicInputRef.current.files.length; i++) {
      dataToSend.append("profilePic", profilePicInputRef.current.files[i]);
    }
    let reqOptions = {
      method: "POST",
      body: dataToSend,
    };
    let JSONData = await fetch("http://localhost:8999/register", reqOptions);
    let JSOData = await JSONData.json();
    alert(JSOData.msg);
    console.log(JSOData);
  };
  return (
    <div className="container">
      <form className="signup-form">
        <h1>Sign up Form</h1>
        <div>
          <label>First Name</label>
          <input
            ref={firstNameInputRef}
            type="text"
            placeholder="First Name"></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            ref={lastNameInputRef}
            type="text"
            placeholder="Last Name"></input>
        </div>
        <div>
          <label>Age</label>
          <input ref={ageInputRef} type="number" placeholder="Age"></input>
        </div>
        <div>
          <label>Email</label>
          <input ref={emailInputRef} type="email" placeholder="Email" />
        </div>
        <div>
          <label>Password</label>
          <input
            ref={passwordInputRef}
            type="text"
            placeholder="Password"></input>
        </div>
        <div>
          <label>Mobile No</label>
          <input
            ref={mobileNoInputRef}
            type="number"
            placeholder="9100000000"></input>
        </div>
        <div>
          <label>Profile Pic (file size limit - 225kb only)</label>
          <input
            ref={profilePicInputRef}
            type="file"
            placeholder="path"
            onChange={(eo) => {
              let selectedPicPath = URL.createObjectURL(eo.target.files[0]);
              setProfilePic(selectedPicPath);
            }}></input>
          <br />
          <br />
          <img src={profilePic} className="profilePic" alt="profile" />
        </div>
        <div>
          <button type="button" onClick={OnSignupUsingFD}>
            Sign Up
          </button>
        </div>
        <Link to="/" className="link">
          Login
        </Link>
      </form>
    </div>
  );
}

export default Signup;
