import React from "react";

export default function Home(props) {
  return (
    <div>
      <label htmlFor="username">Usuário:</label>
      <input
        id="username"
        type="text"
        value={props.input}
        onChange={props.change}
      />
      <button onClick={props.search}>buscar</button>
    </div>
  );
}
