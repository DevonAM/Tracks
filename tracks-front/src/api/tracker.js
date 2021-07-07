import axios from "axios";

//base url must be changed to match active url from ngrok
export default axios.create({
  baseURL: "http://e5530cd5a96b.ngrok.io",
});
