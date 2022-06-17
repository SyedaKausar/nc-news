import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, patchVote } from "../api";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const SingleArticle = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [isErr, setIsErr] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [voteErr, setVoteErr] = useState();
  const { article_id } = useParams();
  useEffect(() => {
    getArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsErr({ err });
      });
  }, [article_id]);

  function addVote() {
    if (!isClicked) {
      setCount((currCount) => {
        return currCount + 1;
      });

      patchVote(article_id, 1)
        .then((res) => {
          setIsClicked(true);
        })
        .catch((err) => {
          setVoteErr({ err });
        });
    }
  }
  function decreaseVote() {
    if (!isClicked) {
      setCount((currCount) => {
        return currCount - 1;
      });

      patchVote(article_id, -1)
        .then((res) => {
          setIsClicked(true);
        })
        .catch((err) => {
          setVoteErr({ err });
          setIsClicked(true);
        });
    }
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isErr) {
    return <p>Article does not exist...</p>;
  } else {
    return (
      <div className="article-list">
        <h1>{article.title}</h1>
        <p>Author: {article.author}</p>
        <img
          src="https://images.prismic.io/northcoders/dac82a9c-2274-48d2-b0a6-5f4d02469a87_Meta+Image.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C627&w=1500&h=784&fit=max&q=60"
          alt="northcoders"
        />
        <p className="article">{article.body}</p>
        <div className="vote-count">
          <h3> Votes: {article.votes + count}</h3>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" color="success" onClick={addVote}>
              Vote: +1
            </Button>
            <Button variant="outlined" color="error" onClick={decreaseVote}>
              Vote: -1
            </Button>
          </Stack>
        </div>
      </div>
    );
  }
};

export default SingleArticle;
