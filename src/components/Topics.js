import React from "react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { getTopics } from "../api";
const Topics = () => {
  const [topics, setTopic] = useState([]);
  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopic(topicsFromApi.topics);
    });
  });

  return (
    <div className="nav">
      <Link to={'/'}>Home</Link>

      {topics.map((topic) => {
        return (
          <Link to={`/topics/${topic.slug}`} key={topic.slug}>
            {topic.slug}
          </Link>
        );
      })}
    </div>
  );
};

export default Topics;
