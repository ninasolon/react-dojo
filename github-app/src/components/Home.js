import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="card-container">
      <div className="card">
        <img
          className="github-logo"
          src="https://image.flaticon.com/icons/png/512/37/37318.png"
          alt="GitHub Logo"
        ></img>
        <label htmlFor="username">Pesquisar usuário no GitHub:</label>
        <input
          id="username"
          type="text"
          placeholder="Exemplo: ninasolon"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button>
          <Link to={`${inputValue}`}>Buscar</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
