import axios from "axios";

const API_KEY = "YOUR_API_KEY";

export const getNews = async (search = "technology") => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );

    return response.data.articles;
  } catch (error) {
    throw error;
  }
};