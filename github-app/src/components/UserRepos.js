import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserRepos({ match }) {
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch(`https://api.github.com/users/${match.params.id}/repos`)
      .then(res => res.json())
      .then(
        result => {
          setRepos(result);
        }
      )
    };
    fetchData();
  }, [match.params.id]);

  if (repos) {
    return (
      <div className="card-container">
        <div className="card repos-card">
          <ol>
            {repos.map(item => {
              const language = item.language ? item.language : "-";
              return (
                <li key={item.id} className="repos-item">
                  <a href={item.html_url}>{item.full_name}</a>
                  <p>
                    <span>Issues abertas:</span> {item.open_issues}
                  </p>
                  <p>
                    <span>Linguagem:</span> {language}
                  </p>
                </li>
              );
            })}
          </ol>
          <div className="btn-container">
            <button className="btn-repos">
              <Link to={`/${match.params.id}`}>Voltar</Link>
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
