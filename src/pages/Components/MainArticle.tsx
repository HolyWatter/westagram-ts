import React, { FC, useState, useEffect } from "react";
import Feed from "./Feed";

interface StoryData {
  index: number;
  img: string;
  id: string;
}

const MainArticle = () => {
  const [storyData, setStoryData] = useState<StoryData[]>([]);

  useEffect(() => {
    fetch("/data/storyData.json")
      .then((res) => res.json())
      .then((result) => setStoryData(result));
  }, []);

  return (
    <div>
      <div>
        <main>
          <ul>
            {storyData &&
              storyData.map((item, index) => (
                <li key={index}>
                  <div>
                    <span />
                    <img src={item.img} className="bigUserIcon" alt="" />
                  </div>
                  <span>{item.id}</span>
                </li>
              ))}
          </ul>
          <Feed />
        </main>
      </div>
    </div>
  );
};

export default MainArticle;
