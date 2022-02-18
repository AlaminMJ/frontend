import axios from "axios";
// const authToken = localStorage.getItem("accessToken");
const instance = axios.create({
  baseurl: "https://acmecanteen.herokuapp.com/api",
});

export default instance;
