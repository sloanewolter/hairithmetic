
import authHeader from "./auth-header";
import axios from '../components/api/axiosConfig'

const getPublicContent = () => {
  return axios.get("/api/test" + "all",);
};

const getUserBoard = () => {
  return axios.get("/api/test" + "user", { headers: authHeader(), "Access-Control-Allow-Origin": "*" });
};

const getModeratorBoard = () => {
  return axios.get("/api/test" + "mod", { headers: authHeader(), "Access-Control-Allow-Origin": "*" });
};

const getAdminBoard = () => {
  return axios.get('/api/test' + "admin", { headers: authHeader() , "Access-Control-Allow-Origin": "*"});
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;