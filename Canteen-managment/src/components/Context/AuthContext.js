import React, { createContext } from "react";
import useFirebase from "../../Hooks/useFirebase";
export const Authentication = createContext();
const AuthContext = ({ children }) => {
  const allContext = useFirebase();
  return (
    <Authentication.Provider value={allContext}>
      {children}
    </Authentication.Provider>
  );
};

export default AuthContext;
