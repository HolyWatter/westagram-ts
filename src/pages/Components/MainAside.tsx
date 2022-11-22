import React from "react";

function MainAside() {
  return (
    <aside>
      <div>
        <span />
        <div>
          <span>tjdtnxkrmfoa</span>
          <span>박성수</span>
        </div>
        <span>전환</span>
      </div>
      <div>
        <div id="recommendMenu">
          <span>회원님을 위한 추천</span>
          <span>모두보기</span>
        </div>
        <ul>
          {RECOMMEND_DATA.map((item, index) => (
            <li key={index}>
              <img src={item.img} alt="" />
              <div>
                <span>{item.id}</span>
                <span>{item.name}</span>
              </div>
              <div>
                <span>팔로우</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default MainAside;

const RECOMMEND_DATA = [
  {
    id: "Sonny123",
    img: "https://image.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-600w-640011838.jpg",
    name: "Sonny",
  },
  {
    id: "Christmas",
    img: "https://image.shutterstock.com/image-photo/young-woman-curly-hair-laughing-600w-1687578475.jpg",
    name: "Chris",
  },
  {
    id: "HolyWater",
    img: "https://image.shutterstock.com/image-photo/portrait-young-blonde-stylish-girl-600w-1031318971.jpg",
    name: "seongsu",
  },
];
