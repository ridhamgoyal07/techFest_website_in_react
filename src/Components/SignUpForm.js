import React, { useState } from "react";

const SignUpForm = () => {
  const initSignUpForm = {
    name: "",
    userEmail: "",
    userPassword: "",
    mobileNumber: "",
  };
  const [signUpFormData, setSignUpFormData] = useState(initSignUpForm);
  const handleSignUpFormData = (e) => {
    setSignUpFormData({ ...signUpFormData, [e.target.name]: e.target.value });
  };
  const handleSignUpSubmit = (e) => {
    // console.log(signUpFormData);
    e.preventDefault();
    setSignUpFormData(initSignUpForm);
  };

  return (
    <>
      <form
        id="signup"
        className="input-group"
        onSubmit={(e) => handleSignUpSubmit(e)}
      >
        <div className="LSbox mt-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label lsLabel">
              Name
            </label>
            <input
              type="text"
              className="form-control LSinputField"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              autoComplete="name"
              value={signUpFormData.name}
              onChange={(e) => handleSignUpFormData(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userEmail" className="form-label lsLabel">
              Email address
            </label>
            <input
              type="email"
              className="form-control LSinputField"
              id="userEmail"
              name="userEmail"
              placeholder="example@gmail.com"
              autoComplete="email"
              value={signUpFormData.userEmail}
              onChange={(e) => handleSignUpFormData(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userPassword" className="form-label lsLabel">
              Password
            </label>
            <div className="input-group mb-3">
              <input
                type="password"
                className="form-control LSinputField"
                id="userPassword"
                name="userPassword"
                placeholder="password"
                autoComplete="current-password"
                value={signUpFormData.userPassword}
                onChange={(e) => handleSignUpFormData(e)}
                required
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNumber" className="form-label lsLabel">
              Mobile Number
            </label>
            <input
              type="tel"
              className="form-control LSinputField"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="978XXXXXXXXX"
              maxLength="10"
              value={signUpFormData.mobileNumber}
              onChange={(e) => handleSignUpFormData(e)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
