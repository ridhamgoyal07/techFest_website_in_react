import React, { useState } from "react";
import "../assests/myCSS/LoginSignUp.css";
import bglogo from "../assests/images/LSBGlogo.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const LoginSignUp = () => {
  const [buttonToggle, setButtonToggle] = useState(true);
  const handleLoginSignUpButton = (e) => {
    if (e.target.name === "loginButton") {
      setButtonToggle(true);
      // console.log(buttonToggle)
    } else if (e.target.name === "signupButton") {
      setButtonToggle(false);
      // console.log(buttonToggle);
    }
  };
  return (
    <div className="loginSignUpPage">
      <div className="loginBG"></div>
      <div className="loginBGlogo">
        <img src={bglogo} alt="background logo" />
      </div>
      <div className="loginSignup">
        <div className="lsFormBox ">
          <h1 className="text-center text-white pt-4">TechFEST'21</h1>
          <p className="tagline">Revitalizing India : Growth Beyond Infinity</p>
          <div className="LSbuttonBox">
            <button
              type="button"
              className="toggle-btn"
              name="loginButton"
              onClick={(e) => handleLoginSignUpButton(e)}
            >
              Login
            </button>
            <button
              type="button"
              className="toggle-btn"
              name="signupButton"
              onClick={(e) => handleLoginSignUpButton(e)}
            >
              SignUp !
            </button>
          </div>
          {buttonToggle ? <LoginForm /> : <SignUpForm />};
        </div>
      </div>
      
    </div>
  );
};

export default LoginSignUp;
