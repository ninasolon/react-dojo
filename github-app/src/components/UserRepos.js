import React from "react";

export default function UserRepos(props) {
  console.log(props.repos);
  return (
    <div className="card repos-card">
      <ol>
        {props.repos.map(item => {
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
    </div>
  );
}
