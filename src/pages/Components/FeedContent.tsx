import React, { FC, useState } from "react";
import Comments from "./Comments";

interface CommentArr {
  id: string;
  text: string;
  like: boolean;
}

interface Props {
  userName: string;
  userImg: string;
  like: number;
  articlePhoto: string;
  content: string;
}

const FeedComment: FC<Props> = ({
  userName,
  userImg,
  like,
  articlePhoto,
  content,
}) => {
  const [commentsValue, setCommentsValue] = useState<string>("");
  const [commentsArr, setCommentsArr] = useState<CommentArr[]>([]);

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCommentsValue(event.target.value);
  }

  function onSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setCommentsArr([
      ...commentsArr,
      {
        id: `${Date.now()}`,
        text: `${commentsValue}`,
        like: false,
      },
    ]);
    setCommentsValue("");
  }

  function clickDelete(event: React.MouseEvent<HTMLButtonElement>) {
    setCommentsArr(
      commentsArr.filter(
        (item) => item.id !== (event.target as HTMLButtonElement).id
      )
    );
  }

  function clickLike(event: React.MouseEvent<HTMLButtonElement>) {
    setCommentsArr(
      commentsArr.map((item) => {
        if (item.id === (event.target as HTMLButtonElement).id) {
          return { ...item, like: !item.like };
        }
        return item;
      })
    );
  }

  return (
    <div>
      <div id="articlename">
        <img src={userImg} alt="" />
        <span>{userName}</span>
        <span />
      </div>
      <img src={articlePhoto} alt="" />
      <div>
        <div>
          <span />
          <span />
          <span />
        </div>
        <div />
        <div />
      </div>
      <div>
        <div>
          <span>tjdtnxkrmfoa</span>
          <span>님외 {like} 명이 좋아합니다</span>
        </div>
        <div>
          <span>{userName}</span>
          <span>{content}</span>
        </div>
        <div>
          <ul id="commentlist">
            {commentsArr.map((el, index) => (
              <Comments
                key={index}
                text={el.text}
                id={el.id}
                like={el.like}
                clickDelete={clickDelete}
                clickLike={clickLike}
              />
            ))}
          </ul>
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <span />
        <input
          onChange={onChange}
          value={commentsValue}
          id="commentInput"
          placeholder="댓글 달기..."
        />
        <button id="commentbtn">게시</button>
      </form>
    </div>
  );
};

export default FeedComment;
