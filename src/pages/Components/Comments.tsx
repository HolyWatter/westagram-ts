import React, { FC } from "react";

interface Props {
  text: string;
  id: string;
  like: boolean;
  clickDelete: React.MouseEventHandler<HTMLButtonElement>;
  clickLike: React.MouseEventHandler<HTMLButtonElement>;
}

const Comments: FC<Props> = ({ text, id, like, clickDelete, clickLike }) => {
  return (
    <li key={id}>
      <div>
        <span>tjdtnxkrmfoa </span>
        <span> {text}</span>
      </div>
      <div>
        <button
          id={id}
          onClick={clickLike}
        />
        <button id={id} onClick={clickDelete} />
      </div>
    </li>
  );
};

export default Comments;
