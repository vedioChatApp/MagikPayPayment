import axios from 'axios';
import { API_BASE_URL } from '../app/constant';


export const addUser = async (user) => {
  const res = await axios.post(`${API_BASE_URL}/users`, user);
  return res.data;
};

const userService = {
  addUser,
};

export default userService;
