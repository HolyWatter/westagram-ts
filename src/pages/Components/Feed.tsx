import React, { useState, useEffect } from "react";
import FeedComment from "./FeedContent";

interface FeedData {
  username: string;
  id: number;
  user_img: string;
  article_photo_url: string;
  article_content: string;
  likecount: number;
}

const Feed = () => {
  const [feedData, setFeedData] = useState<FeedData[]>([]);

  useEffect(() => {
    fetch("/data/feedData.json")
      .then((res) => res.json())
      .then((result) => setFeedData(result));
  }, []);

  return (
    <>
      {feedData &&
        feedData.map((item) => (
          <FeedComment
            key={item.id}
            userName={item.username}
            userImg={item.user_img}
            articlePhoto={item.article_photo_url}
            content={item.article_content}
            like={item.likecount}
          />
        ))}
    </>
  );
};

export default Feed;
