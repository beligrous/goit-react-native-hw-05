import { createContext, useContext, useState } from "react";

export const UserContext = createContext({});

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  const logIn = (data) => {
    setIsAuth(data);
  };

  return (
    <UserContext.Provider value={{ isAuth, logIn }}>
      {children}
    </UserContext.Provider>
  );
};
