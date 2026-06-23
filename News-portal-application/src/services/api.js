import axios from "axios";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNews = async (query = "technology") => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
  );

  return response.data.articles;
};