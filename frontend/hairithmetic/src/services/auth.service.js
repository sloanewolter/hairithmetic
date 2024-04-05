import axios from '../components/api/axiosConfig'

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
const register = (username, email, password) => {
  return axios.post("/api/auth/" + "signup", {
    username,
    email,
    password,
  },  {
    headers: headers
  });
};

const login = (username, password) => {
  return axios
    .post("/api/auth/" + "signin", {
      username,
      password,
    },  {
        headers: headers
      })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;