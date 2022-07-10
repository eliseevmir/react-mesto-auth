import  React, { useReducer } from "react";
import { Route, Switch } from "react-router-dom";

import CardsContainer from "../containers/CardsContainer";
import Login from "../containers/Login";
import Register from "../containers/Register";

import {
  CurrentUserContext,
  defaultUserState,
} from "../context/CurrentUserContext";
import reducer from "../context/reducer";

function App() {
  const [state, dispath] = useReducer(reducer, defaultUserState);


  return (
    <CurrentUserContext.Provider value={{ state, dispath }}>
      <Switch>
      <Route exact path="/">
        <CardsContainer />
      </Route>
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
