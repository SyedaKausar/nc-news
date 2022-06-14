import React, { useEffect, useState } from "react";
import { getTopics } from "../api";
const Nav = () => {
  const [topics, setTopic] = useState([]);
  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopic(topicsFromApi);
    });
  });

  return (
    <div className="Nav">
      <p>Articles</p>
      <p>
        Topics
        <ul>
          {topics.map((topic) => {
            return <li key={topic.slug}>{topic.slug}</li>;
          })}
        </ul>
      </p>
      <p>Users</p>
    </div>
  );
};

export default Nav;
