import React from "react";

export default function UserInfo(props) {
  const { user, repos, clear } = props;
  return (
    <div>
      <div>
        <img src={user.avatar_url} alt="Foto do usuário"></img>
        <p>{user.name}</p>
        <a href={user.url}>{user.login}</a>
        <p>{user.bio}</p>
        <p>{user.location}</p>
      </div>
      <button onClick={repos}>Listar repositórios</button>
      <button onClick={clear}>Pesquisar outro usuário</button>
    </div>
  );
}
