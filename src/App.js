import logo from './logo.ico';
import './App.css';

import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";




import Login from "./component/authantification/Login";
import Register from "./component/authantification/Register";
import Home from "./component/Home";
import Application from "./component/Application";
import Test from "./component/Test";
import Rapport from "./component/Raport";
import DateTime from "./component/DateTimePeacker";
import AdminPage from "./component/AdminPage";
import Profile from "./component/Profile";
import PopUpTest1 from "./component/PageTest/popUpTest1"






function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
        <img className="image" src={logo} alt="Logo" />
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
            
          </li>
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              Profile
            </Link>
            
          </li>
          <li className="nav-item">
            <Link to={"/admin"} className="nav-link">
              Admin
            </Link>
            
          </li>
          <li>
          <Link to={"/application"} className="nav-link">
              Application
            </Link>
            </li>
          <li>
            <Link to={"/rapport"} className="nav-link">
              Rapport
            </Link>
          </li>
          <li>
            <Link to={"/test"} className="nav-link">
              Test
            </Link>
          </li>
          <li>
          <Link to={"/login"} className="nav-link">
              Login
            </Link>
            </li>
            <li>
            <Link to={"/register"} className="nav-link">
              Register
            </Link>
          </li>

         

          
          
        </div>

 
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/application" component={Application} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/rapport" component={Rapport} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dateTime" component={DateTime} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/popup1" component={PopUpTest1} />
          
        </Switch>
      </div>
    </div>
  );
}

export default App;
