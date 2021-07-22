import React, { useState } from "react";

const LoginForm = () => {
  const initLoginForm = {
    userEmail: "",
    userPassword: "",
    rememberMe: true,
  };
  const [loginFormData, setLoginFormData] = useState(initLoginForm);
  const handleLoginFormData = (e) => {
    //   console.log(e.target.name , e.target.value?false:true);
    if (e.target.name === "rememberMe") {
      setLoginFormData({ ...loginFormData, [e.target.name]: !e.target.value });
    } else {
      setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
    }
    // console.log(loginFormData);
  };
  const handleLoginSubmit = (e) => {
    // console.log(loginFormData);
    e.preventDefault();
    setLoginFormData(initLoginForm);
  };
  const handlePasswordToogle = (e) => {
    const password = document.getElementById("userPassword");
    const type = password.getAttribute('type')==='password' ? 'text' : 'password';
    password.setAttribute('type' , type);
    e.target.classList.toggle("fa-eye-slash");
    // console.log(e);
  };

  return (
    <>
      <form
        id="login"
        className="input-group"
        onSubmit={(e) => handleLoginSubmit(e)}
      >
        <div className="LSbox mt-4">
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
              value={loginFormData.userEmail}
              onChange={(e) => handleLoginFormData(e)}
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
                value={loginFormData.userPassword}
                onChange={(e) => handleLoginFormData(e)}
                required
              />
              <button type="button" className="btn border-bottom text-white">
                <i
                  className="far fa-eye"
                  id="togglePassword"
                  onClick={(e) => {
                    handlePasswordToogle(e);
                  }}
                ></i>
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between" id="groupRememberForget">
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
                name="rememberMe"
                defaultChecked={loginFormData.rememberMe}
                value={loginFormData.rememberMe}
                onClick={(e) => {
                  handleLoginFormData(e);
                }}

                // checked
              />
              <label className="form-check-label lsLabel" htmlFor="rememberMe">
                Remember Me
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="userEmail" className="form-label lsLabel">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                >
                  Forget Password ?
                </a>
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
