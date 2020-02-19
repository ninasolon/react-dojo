import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import "./App.css";

// pages
import Home from "./components/Home";
import UserInfo from "./components/UserInfo";
import UserRepos from "./components/UserRepos";

function App() {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState(null);
  const [inputValue, setInputValue] = useState("");
  // const searchUser = e => {
  //   e.preventDefault();
  //   fetch(`https://api.github.com/users/${inputValue}`)
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         setUser(result);
  //       },
  //       error => {
  //         setError(error);
  //       }
  //     );
  // };
  const showRepos = e => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${inputValue}/repos`)
      .then(res => res.json())
      .then(
        result => {
          setRepos(result);
        },
        error => {
          setError(error);
        }
      );
  };
  const clearUser = e => {
    e.preventDefault();
    setUser(null);
    setInputValue("");
    setRepos("");
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/user/:id" component={UserInfo} />
        {/* <Route exact path={`/user/${match.path}/repos`} component={UserRepos} /> */}
        {/* {!user ? (
          <Home
            input={inputValue}
            change={e => setInputValue(e.target.value)}
            search={searchUser}
          />
        ) : (
          <div className="card-container">
            <UserInfo user={user} repos={showRepos} clear={clearUser} />
            {repos ? <UserRepos repos={repos} /> : null}
          </div>
        )} */}
      </Router>
    );
  }
}

export default App;

// <Router>
//   <Switch>
//     <Route path="/">
//       <Home />
//     </Route>
//     <Route path="/about">
//       <About />
//     </Route>
//     <Route path="/topics">
//       <Topics />
//     </Route>
//   </Switch>
// </Router>

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>
//             Props v. State
//           </Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }
