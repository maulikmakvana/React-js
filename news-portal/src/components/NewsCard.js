import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article, index }) => {
  return (
    <div className="card">
      <img
        src={article.urlToImage}
        alt="news"
        className="card-image"
      />

      <h3>{article.title}</h3>

      <p>
        <strong>Source:</strong> {article.source.name}
      </p>

      <p>
        <strong>Author:</strong> {article.author}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      <p>{article.description}</p>

      <Link
        to={`/news/${index}`}
        state={{ article }}
      >
        View Details
      </Link>
    </div>
  );
};

export default NewsCard;
