const loadEnv = () => {
  const requiredEnvVars = ["VITE_BACKEND_URL"];

  requiredEnvVars.forEach((element) => {
    if (!import.meta.env[element]) {
      throw new Error(`"${element}" Env variable is required`);
    }
  });

  const env = (varName) => import.meta.env[varName];

  return {
    BACKEND_URL: env("VITE_BACKEND_URL"),
  };
};

const envVars = loadEnv();
export default envVars;
