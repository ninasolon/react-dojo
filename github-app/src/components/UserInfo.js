import React from "react";

export default function UserInfo(props) {
  const { user, repos, clear } = props;
  return (
    <div className="card">
      <div>
        <img className="user-avatar" src={user.avatar_url} alt="Foto do usuário"></img>
        <div className="user-info">
          <p className="user-name">{user.name}</p>
          <a href={user.url}>@{user.login}</a>
          <p>{user.bio}</p>
          <p>{user.location}</p>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn-repos" onClick={repos}>Listar repositórios</button>
        <button onClick={clear}>Pesquisar outro usuário</button>
      </div>
    </div>
  );
}
