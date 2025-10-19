import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    accessToken: null,
    refreshToken: null,
  });

  const loginUser = (user, accessToken, refreshToken) => {
    setAuth((prev) => ({
      ...prev,
      user,
      accessToken,
      refreshToken,
    }));
  };

  return (
    <AuthContext
      value={{
        user: auth.user,
        loading: auth.loading,
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken,
        loginUser,
      }}
    >
      {children}
    </AuthContext>
  );
};
export default AuthProvider;
