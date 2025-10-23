import axios from "axios";
import { createContext, useState } from "react";
import envVars from "../config/env";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    accessToken: null,
    refreshToken: null,
  });

  const loginUser = async (email, password) => {
    const response = await axios.post(`${envVars.BACKEND_URL}/api/auth/login`, {
      email,
      password,
    });

    const {
      user,
      accessToken: accessTokenFromServer,
      refreshToken: refreshTokenFromServer,
    } = response.data;

    setAuth({
      user,
      accessToken: accessTokenFromServer,
      refreshToken: refreshTokenFromServer,
    });
  };

  return (
    <AuthContext
      value={{
        user: auth.user,
        accessToken: auth.accessToken,
        refreshToken: auth.refreshToken,
        loginUser,
        setAuth,
      }}
    >
      {children}
    </AuthContext>
  );
};
export default AuthProvider;
