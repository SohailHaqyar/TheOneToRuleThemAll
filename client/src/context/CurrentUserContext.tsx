import { useEffect } from "react";
import { createContext } from "react";
import { useMeLazyQuery, User } from "../generated/graphql";

interface IContext {
  isAuth: boolean;
  user: Partial<User> | undefined;
  refetch: any;
}
export const CurrentUser = createContext({
  isAuth: false,
  user: undefined,
  refetch: () => {},
} as IContext);

export const CurrentUserProvider: React.FC = ({ children }) => {
  const [getMe, { data, client }] = useMeLazyQuery({
    onError: (error) => {
      console.log(error.message);
    },
  });

  useEffect(() => {
    getMe();
    return () => {
      client?.stop();
    };
  }, []);

  return (
    <CurrentUser.Provider
      value={{ isAuth: !!data, user: data?.me, refetch: getMe }}
    >
      {children}
    </CurrentUser.Provider>
  );
};
