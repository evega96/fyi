import React, { createContext, useState } from "react";

const AuthenticatedUserContext = createContext(null);

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

export { AuthenticatedUserContext, AuthenticatedUserProvider };
