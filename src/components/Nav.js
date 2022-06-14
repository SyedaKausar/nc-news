import React, { useEffect, useState } from "react";
import { getTopics } from "../api";
const Nav = () => {
  const [topics, setTopic] = useState([]);
  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopic(topicsFromApi.topics);
    });
  });

  return (
    <div className="nav" id="dropdown">
      <a href="home">Home</a>
      <a className="dropbtn" href="topics">
        {topics.map((topic) => {
          return <li key={topic.slug}>{topic.slug}</li>;
        })}
      </a>
      <a href="users">Users</a>
    </div>
  );
};

export default Nav;
