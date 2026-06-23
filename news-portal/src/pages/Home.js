import React, { useEffect, useState } from "react";
import { getNews } from "../services/api";
import NewsCard from "../components/NewsCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("technology");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getNews(search);

      setNews(data);
    } catch (error) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>News Portal</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={fetchNews}
      />

      <div className="news-container">
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