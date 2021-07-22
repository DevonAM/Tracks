import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

//base url must be changed to match active url from ngrok
const instance = axios.create({
  baseURL: "http://a56d3aa92797.ngrok.io",
});

//modify the config if there is a token
//automatic authentication
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return new Promise.reject(err);
  }
);

export default instance;
