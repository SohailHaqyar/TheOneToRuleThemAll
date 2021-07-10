import { Redirect, Route } from "react-router";
import { useAuth } from "../context/AuthContext";
import { isTokenValid } from "../isTokenExpired";

export const PrivateRoute = ({
  component: Component,
  ...rest
}: any) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          <Component />
        ) : (
          <Redirect
            to={{ pathname: "/signup", state: { from: location } }}
          />
        )
      }
    />
  );
};
