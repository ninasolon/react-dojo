import React from "react";

export default function UserRepos(props) {
  console.log(props.repos);
  return (
    <div className="card">
      <ul>
        {props.repos.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
     </ul>
    </div>
  );
}
