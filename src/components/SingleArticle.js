import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle} from "../api";


const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    getArticle(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    });
  });
 
  return (
    <div className="article-list">
      <h1 >{article.title}</h1>
      <p>Author: {article.author}</p>
      <img src="https://images.prismic.io/northcoders/dac82a9c-2274-48d2-b0a6-5f4d02469a87_Meta+Image.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C627&w=1500&h=784&fit=max&q=60"/>
      <p className="article">{article.body}</p>
    </div>
  );
};

export default SingleArticle;
