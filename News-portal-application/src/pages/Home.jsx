import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/api";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

const Home = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("technology");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getNews = async (query) => {
    try {
      setLoading(true);
      setError("");

      const data = await fetchNews(query);
      setNews(data);
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews("technology");
  }, []);

  const handleSearch = () => {
    getNews(search);
  };

  return (
    <div className="container">
      <h1>News Portal</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      {loading && <Loader />}

      {error && <h2>{error}</h2>}

      <div className="news-grid">
        {news.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
