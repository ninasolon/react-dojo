import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import UserRepos from "./components/UserRepos";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={UserInfo} />
      <Route exact path="/:id/repos" component={UserRepos} />
    </Router>
  );
}

export default App;
