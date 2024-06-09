import React, { useEffect, useRef } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    }
  });

  let validateToken = async () => {
    let dataToSend = new FormData();
    dataToSend.append("token", localStorage.getItem("token"));
    let reqOptions = {
      method: "POST",
      body: dataToSend,
    };
    let JSONData = await fetch(
      "http://localhost:8999/validateToken",
      reqOptions
    );
    let JSOData = await JSONData.json();
    console.log(JSOData);
    if (JSOData.status === "success") {
      dispatch({ type: "login", data: JSOData.data });
      navigate("/dashboard");
    } else {
      alert(JSOData.msg);
    }
  };

  let validateLogin = async () => {
    let dataToSend = new FormData();
    dataToSend.append("email", emailInputRef.current.value);
    dataToSend.append("password", passwordInputRef.current.value);
    let reqOptions = {
      method: "POST",
      body: dataToSend,
    };
    let JSONData = await fetch("http://localhost:8999/login", reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData);
    if (JSOData.status === "success") {
      localStorage.setItem("token", JSOData.data.token);

      dispatch({ type: "login", data: JSOData.data });
      navigate("/dashboard");
    } else {
      alert(JSOData.msg);
    }
  };

  return (
    <div className="container">
      <form className="login-form">
        <h2>Login Here</h2>
        <div>
          <label>Email</label>
          <input ref={emailInputRef} type="email" placeholder="Email" />
        </div>
        <div>
          <label>Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <button type="button" onClick={validateLogin}>
            Login
          </button>
        </div>
        <p className="note">
          Don't have an account? Create Now{" "}
          <Link to="/signup" className="link">
            Sign up now
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
