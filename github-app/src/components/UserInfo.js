import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function UserInfo({ match }) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  fetch(`https://api.github.com/users/${match.params.id}`)
    .then(res => res.json())
    .then(
      result => {
        setUser(result);
      },
      error => {
        setError(error);
      }
    );

  return (
    <div className="card">
      <div>
        <img
          className="user-avatar"
          src={user.avatar_url}
          alt="Foto do usuário"
        ></img>
        <div className="user-info">
          <p className="user-name">{user.name}</p>
          <a href={user.url}>@{user.login}</a>
          <p>{user.bio}</p>
          <p>{user.location}</p>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn-repos">
          <Link to={`${match.url}/repos`}>Listar repositórios</Link>
        </button>
        <button>
          <Link to="/">Pesquisar outro usuário</Link>
        </button>
      </div>
    </div>
  );
}

export default UserInfo;
