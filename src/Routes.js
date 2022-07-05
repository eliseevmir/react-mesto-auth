import React from "react";
import { Route, Switch } from "react-router-dom";

import CardsContainer from "./containers/CardsContainer";
import SignInContainer from "./containers/SignInContainer";
import SignUpContainer from "./containers/SignUpContainer";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <CardsContainer />
            </Route>
            <Route exact path="/sign-in">
                <SignInContainer />
            </Route>
            <Route exact path="/sign-up">
                <SignUpContainer />
            </Route>
        </Switch>
    )
}
export default Routes