import React from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Auth from "routers/Auth";
import Home from "routers/Home";
import Profile from "routers/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home userObj={userObj} />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Redirect from="*" to="/"></Redirect>
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                                <Auth />
                        </Route>
                        <Redirect from="*" to="/"></Redirect>
                    </>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;
