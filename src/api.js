import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://syedakausar.herokuapp.com/api",
});

export const getArticles = () => {
  return articlesApi.get("/articles").then(({ data }) => {
    return data.article;
  });
};

export const getTopics = () => {};
