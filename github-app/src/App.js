import React, { useState } from "react";
import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import UserRepos from "./components/UserRepos";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const searchUser = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${inputValue}`)
      .then(res => res.json())
      .then(
        result => {
          setUser(result);
        },
        error => {
          setError(error);
        }
      );
  };
  const showRepos = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${inputValue}/repos`)
      .then(res => res.json())
      .then(
        result => {
          setRepos(result);
        },
        error => {
          setError(error);
        }
      );
  };
  const clearUser = e => {
    e.preventDefault();
    setUser(null);
    setInputValue("");
    setRepos("");
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        {!user ? (
          <Home
            input={inputValue}
            change={e => setInputValue(e.target.value)}
            search={searchUser}
          />
        ) : (
          <div className="card-container">
            <UserInfo user={user} repos={showRepos} clear={clearUser} />
            {repos ? <UserRepos repos={repos} /> : null}
          </div>
        )}
      </>
    );
  }
}

export default App;
