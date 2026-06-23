import React from "react";
import { useLocation } from "react-router-dom";

const NewsDetail = () => {
  const location = useLocation();

  const article = location.state?.article;

  if (!article) {
    return <h2>No Article Found</h2>;
  }

  return (
    <div className="detail-page">
      <img
        src={article.urlToImage}
        alt="news"
        width="500"
      />

      <h1>{article.title}</h1>

      <p>
        <strong>Author:</strong> {article.author}
      </p>

      <p>
        <strong>Source:</strong> {article.source.name}
      </p>

      <p>
        <strong>Date:</strong>
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>

      <p>{article.description}</p>

      <p>{article.content}</p>

      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        Read Full Article
      </a>
    </div>
  );
};

export default NewsDetail;
