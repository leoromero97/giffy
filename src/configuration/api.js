import { create } from "apisauce";

const api = create({
  baseURL: "https://api.giphy.com/v1/gifs/",
  timeout: 4000,
});

export default api;
