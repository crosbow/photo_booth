import axios from "axios";
import { use, useEffect } from "react";
import { redirect } from "react-router-dom";
import { api } from "../api";
import envVars from "../config/env";
import { AuthContext } from "../providers/AuthProvider";

const useAxios = () => {
  const { setAuth, accessToken, refreshToken } = use(AuthContext);

  useEffect(() => {
    // request interceptor
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        config.headers.Authorization = `Bearer ${accessToken}`;

        return config;
      },
      (error) => Promise.reject(error)
    );

    // response interceptor
    const responseInterceptor = api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          // Refresh Token

          try {
            const refreshTokenResponse = await axios.post(
              envVars.BACKEND_URL + "/api/auth/refresh-token",
              {
                refreshToken,
              }
            );

            if (refreshTokenResponse.status <= 201) {
              const {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
              } = refreshTokenResponse.data;

              originalRequest.headers.authorization = `Bearer ${newAccessToken}`;

              // set new access and refresh token
              setAuth((prev) => ({
                ...prev,
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
              }));

              return axios(originalRequest);
            } else {
              redirect("/login");
            }
          } catch (error) {
            console.dir(error);
            redirect("/login");
          }
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [accessToken, refreshToken]);

  return { api };
};
export default useAxios;
