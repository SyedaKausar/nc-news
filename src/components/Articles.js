import React, { useEffect } from "react";
import { getArticles } from "../api";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import SingleArticle from "./SingleArticle";
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

  function renderSingleArticle() {
    return <SingleArticle article={articles} />;
  }
  return (
    <>
      <h1 className="all-articles">All Articles</h1>
      <img src="https://images.prismic.io/northcoders/dac82a9c-2274-48d2-b0a6-5f4d02469a87_Meta+Image.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C627&w=1500&h=784&fit=max&q=60" />
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`}>
              <li
                onClick={renderSingleArticle}
                className="article"
                key={article.article_id}
              >
                {article.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
