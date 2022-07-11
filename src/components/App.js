import { useEffect, useReducer, useState } from "react";
import { Route, Switch } from "react-router-dom";
import * as auth from "../utils/auth";
import CardsContainer from "../containers/CardsContainer";
import Login from "../containers/Login";
import Register from "../containers/Register";
import ProtectedRoute from "./ProtectedRoute";
import { useHistory } from "react-router-dom";

import {
  CurrentUserContext,
  defaultUserState,
} from "../context/CurrentUserContext";
import reducer from "../context/reducer";

function App() {
  const [state, dispath] = useReducer(reducer, defaultUserState);
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const [email, setEmail] = useState("");

  useEffect(() => {
    tokenCheck();
  });

  function handleLogin() {
    setLoggedIn(!loggedIn);
  }

  function tokenCheck() {
    const jwt = localStorage.getItem("token");

    if (jwt) {
      auth.getContent(jwt).then((res) => {
        setLoggedIn(true);
        history.push("/");
        setEmail(res.data.email);
      });
    }
  }


  function signOut() {
    localStorage.removeItem("token");
    history.push("/sign-in")
  }

  return (
    <CurrentUserContext.Provider value={{ state, dispath, handleLogin,  signOut }}>
      <Switch>
        <ProtectedRoute
          loggedIn={loggedIn}
          exact
          path="/"
          component={CardsContainer}
          email={email}
        />
        <Route path="/sign-up">
          <Register />
        </Route>
        <Route path="/sign-in">
          <Login />
        </Route>
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
