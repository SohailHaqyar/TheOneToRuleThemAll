import { AnimatePresence } from "framer-motion";
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import { FollowingsPage } from "./components/FollowingsPage";
import { Home } from "./components/Home";
import { OauthLoading } from "./components/OauthLoading";
import { PostPage } from "./components/PostPage";
import { PrivateRoute } from "./components/PrivateRoute";
import { TrendingPage } from "./components/TrendingPage";
import { UserDetails } from "./components/UserDetails";
import { UsersPage } from "./components/UsersPage";
import { Signup } from "./pages/Signup";

export const Routes = () => {
  const location = useLocation();
  console.log(location.key);
  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute
          exact
          path="/following"
          component={FollowingsPage}
        />
        <PrivateRoute
          exact
          path="/trending"
          component={TrendingPage}
        />
        <PrivateRoute exact path="/users" component={UsersPage} />
        <PrivateRoute exact path="/post/:id" component={PostPage} />

        <PrivateRoute
          exact
          path="/user/:id"
          component={UserDetails}
        />
        <Route exact path="/oauth" component={OauthLoading} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </AnimatePresence>
  );
};
