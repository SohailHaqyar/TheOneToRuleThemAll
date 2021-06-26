import { Redirect, Route } from "react-router";
import { isTokenValid } from "../isTokenExpired";

export const PrivateRoute = ({
  component: Component,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isTokenValid() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signup" />
        )
      }
    />
  );
};
