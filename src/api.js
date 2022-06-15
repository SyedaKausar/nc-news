import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://syedakausar.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return articlesApi.get("/articles", {params:{topic:topic}}).then(({ data }) => {
    return data.article;
  });
};

export const getTopics = () => {
  return articlesApi.get("/topics").then(({ data }) => {
    return data;
  });
};
