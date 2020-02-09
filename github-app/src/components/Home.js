import React from "react";

export default function Home(props) {
  return (
    <div className="card-container">
      <div className="card">
        <img className="github-logo" src="https://image.flaticon.com/icons/png/512/37/37318.png"></img>
        <label htmlFor="username">Pesquisar usuário no GitHub:</label>
        <input
          id="username"
          type="text"
          placeholder="Exemplo: ninasolon"
          value={props.input}
          onChange={props.change}
          />
        <button onClick={props.search}>buscar</button>
      </div>
    </div>
  );
}
