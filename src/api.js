import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://syedakausar.herokuapp.com/api",
});

export const getArticles = () => {
  return articlesApi.get("/articles").then(({ data }) => {
    return data.article;
  });
};

export const getTopics = () => {
  return articlesApi.get("/topics").then(({ data }) => {
    console.log(data);
    return data;
  });
};
