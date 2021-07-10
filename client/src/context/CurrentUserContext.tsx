import { useEffect } from "react";
import { createContext } from "react";
import { User } from "../generated/graphql";
import { useState } from "react";
import axios from "axios";

interface IContext {
  user: Partial<User> | null;
  isAuth: boolean;
  setAuth?: any;
}
export const CurrentUser = createContext({
  user: null,
  isAuth: false,
} as IContext);

export const CurrentUserProvider: React.FC = ({ children }) => {
  const [auth, setAuth] = useState<IContext>({
    user: null,
    isAuth: false,
  });

  const getUser = async () => {
    let token = localStorage.getItem("token");
    if (token) {
      const user = await axios.get("http://localhost:4000/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAuth({ user: user.data, isAuth: true });
    }
  };
  useEffect(() => {
    getUser();
  }, [localStorage.token]);

  return (
    <CurrentUser.Provider value={{ ...auth, setAuth }}>
      {children}
    </CurrentUser.Provider>
  );
};
