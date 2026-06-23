import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ article, index }) => {
  return (
    <div className="card">
      <img
        src={
          article.urlToImage ||
          "https://via.placeholder.com/300x200"
        }
        alt=""
      />

      <h3>{article.title}</h3>

      <p>
        <strong>Source:</strong> {article.source?.name}
      </p>

      <p>
        <strong>Author:</strong> {article.author || "Unknown"}
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
        Read More
      </Link>
    </div>
  );
};

export default NewsCard;
