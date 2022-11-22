import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USER_DATA } from "./USER_DATA";

function MainHeader() {
  const [dropBar, setDropBar] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const navigate = useNavigate();

  function dropClick() {
    setDropBar(!dropBar);
  }

  function search(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function goLogin() {
    navigate("/seongsu/login");
  }

  const filtered = USER_DATA.filter((useritem: string) => {
    if (searchValue === "") {
      return false;
    } else if (useritem.includes(searchValue)) {
      return useritem;
    }
    return useritem;
  });

  return (
    <header>
      <div>
        <h1>Seongsutagram</h1>
      </div>
      <input
        onChange={search}
        value={searchValue}
        type="text"
        placeholder="검색"
      />
      <ul id="searchBar">
        {filtered.map((x, i) => (
          <li key={i}>
            <div>
              <span />
              <span>{x}</span>
            </div>
          </li>
        ))}
      </ul>

      <ul id="itembox">
        <li />
        <li />
        <li />
        <li />
        <li />
        <ul>
          <li>
            <button onClick={dropClick} id="menuIcon"></button>
            {dropBar && (
              <ul id="dropMenu">
                <li>
                  <span />
                  <button>프로필</button>
                </li>
                <li>
                  <span className="scrapIcon" />
                  <button>저장됨</button>
                </li>
                <li>
                  <span className="settingIcon" />
                  <button>설정</button>
                </li>
                <li>
                  <button onClick={goLogin}>로그아웃</button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </ul>
    </header>
  );
}

export default MainHeader;
