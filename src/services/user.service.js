import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://ewastebackend.herokuapp.com/api/test/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getUserBoard(id) {
    return axios.get(API_URL + `user/${id}`, { headers: authHeader() });
  }

  create(item) {
    console.log(item);
    return axios.post(API_URL + "user", item, { headers: authHeader() });
  }

  delete(id) {
    console.log(id);
    return axios.delete(API_URL + `user/${id}`, { headers: authHeader() });
  }

  update(data) {
    console.log(data);
    return axios.put(API_URL + "user", data, { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
