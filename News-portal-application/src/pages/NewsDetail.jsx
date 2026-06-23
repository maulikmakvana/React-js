import React from "react";
import { useLocation } from "react-router-dom";

const NewsDetail = () => {
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    return <h2>News Not Found</h2>;
  }

  return (
    <div className="detail-container">
      <img
        src={article.urlToImage}
        alt=""
        className="detail-image"
      />

      <h1>{article.title}</h1>

      <p>
        <strong>Author:</strong> {article.author}
      </p>

      <p>
        <strong>Source:</strong> {article.source?.name}
      </p>

      <p>
        <strong>Date:</strong>{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      <p>{article.description}</p>

      <p>{article.content}</p>

      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        <button>Read Full Article</button>
      </a>
    </div>
  );
};

export default NewsDetail;
