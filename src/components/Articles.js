import React, { useEffect } from "react";
import { getArticles } from "../api";
import { useState } from "react";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  });

  return (
    <>
      <h2>All Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return <li key={article.title}>{article.title}</li>;
        })}
      </ul>
    </>
  );
};

export default Articles;
