import React from "react";
import { Home } from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { PrivateRoute } from "./components/PrivateRoute";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import { UserDetails } from "./components/UserDetails";
import { PostPage } from "./components/PostPage";
import { TrendingPage } from "./components/TrendingPage";
import { UsersPage } from "./components/UsersPage";
import { FollowingsPage } from "./components/FollowingsPage";
import { OauthLoading } from "./components/OauthLoading";

const App = () => {
  return (
    <div className="">
      <Router>
        <CurrentUserProvider>
          <Switch>
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
            <PrivateRoute
              exact
              path="/post/:id"
              component={PostPage}
            />

            <PrivateRoute
              exact
              path="/user/:id"
              component={UserDetails}
            />
            <Route exact path="/oauth" component={OauthLoading} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </CurrentUserProvider>
      </Router>
    </div>
  );
};

export default App;
