import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ca6ed7521a594c20ba70e397913b2acd",
  },
});
