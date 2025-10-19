import axios from "axios";
import envVars from "../config/env";

const api = axios.create({
  baseURL: `${envVars.BACKEND_URL}/api`,
});

export { api };
