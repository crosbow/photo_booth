import envVars from "../config/env";

const get_img_url = (image) => {
  return `${envVars.BACKEND_URL}/${image}`;
};
export default get_img_url;
