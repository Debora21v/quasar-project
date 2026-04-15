import axios from "axios";

const API_KEY = "gSnNWFukPF5CKyuVlD7CPvoMAV6vgm9N";

const api = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
});

export const GiphyService = {
  trending: () => api.get(`/trending?api_key=${API_KEY}&limit=20`),

  search: (query) => api.get(`/search?api_key=${API_KEY}&q=${query}&limit=20`),

  categories: () => api.get(`/categories?api_key=${API_KEY}`),
};
