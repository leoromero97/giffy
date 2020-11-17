import api from "../configuration/api";

const apiKey = "LYA6tTwXiXJFoWgwNwGZwP91Gyq54rBD";

export const getGifs = (q) => {
  return api.get("search", { apiKey, q, limit: 10 });
};
