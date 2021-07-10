import axios from "axios";
import React, { useEffect } from "react";
const AuthContext = React.createContext(null as any);

export const AuthProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = React.useState<any>(null);

  const setupUser = async () => {
    let token = localStorage.getItem("token");
    if (token) {
      const user = await axios.get("http://localhost:4000/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCurrentUser({ user: user.data, isAuth: true });
    }
  };
  useEffect(() => {
    setupUser();
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
