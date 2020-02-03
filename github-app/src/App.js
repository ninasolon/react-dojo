import React, { useState } from "react";
import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
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
  const clearUser = e => {
    e.preventDefault();
    setUser(null);
    setInputValue("");
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        {!user ? (
          <div>
            <label htmlFor="username">Usuário:</label>
            <input
              id="username"
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={searchUser}>buscar</button>
          </div>
        ) : (
          <div>
            <div>
              <img src={user.avatar_url} alt="Foto do usuário"></img>
              <p>{user.name}</p>
              <a href={user.url}>{user.login}</a>
              <p>{user.bio}</p>
              <p>{user.location}</p>
            </div>
            <button onClick={clearUser}>voltar</button>
          </div>
        )}
      </>
    );
  }
}

export default App;
