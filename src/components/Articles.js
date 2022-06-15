import React, { useEffect } from "react";
import { getArticles } from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Topics from "./Topics";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  useEffect(() => {
    getArticles(topic).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic]);
  if (isLoading) {
    return <p>...Loading</p>;
  }
  return (
    <>
      <h2 className="all-articles">All Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li className="article" key={article.title}>
              {article.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
