import React from "react";
import "./App.css";
import ContactUs from "./Components/ContactUs";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import PrIntern from "./Components/PrIntern";
// import "./ContactUs.css";
import "./myCSS/ContactUs.css";
// import `{process.env.PUBLIC_URL}/myStyle/ContactUs.css`;
// import process.env.PUBLIC_URL+'/myStyle/ContactUs.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <ContactUs />
          </Route>
          <Route path="/pr_intern" exact>
            <PrIntern />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
