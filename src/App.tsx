import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Routes as Switch,
} from "react-router-dom";
// import styles from "./App.module.css";
// import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import GridComponent from "Components/GridComponent/GridComponent";

function App() {
  return (
    <>
      <Router>
        <GridComponent>
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/auth/redirect" element={<Home />} />
          </Switch>
        </GridComponent>
      </Router>
    </>
  );
}

export default App;
