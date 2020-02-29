import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserInfo({ match }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch(`https://api.github.com/users/${match.params.id}`)
      .then(res => res.json())
      .then(
        result => {
          setUser(result);
        }
      )
    };
    fetchData();
  }, [match.params.id]);
  
  if (user) {
    return (
      <div className="card-container">
        <div className="card">
          <div>
            <img
              className="user-avatar"
              src={user.avatar_url}
              alt="Foto do usuário"
            ></img>
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <a href={user.html_url}>@{user.login}</a>
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
      </div>
    );
  } else {
    return (
      <div className="card-container">
        <div className="card">
          <h2>carregando...</h2>
        </div>
      </div>
    )
  }
}

export default UserInfo;
