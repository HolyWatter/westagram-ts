import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface UserInfo {
  email: string;
  pw: string;
}

const Login = () => {
  const [userInfoValue, setUserInfoValue] = useState<UserInfo>({
    email: "",
    pw: "",
  });
  const [isValidation, setValidation] = useState<boolean>(false);

  const emailRegex =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const navigate = useNavigate();

  function userInfoChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUserInfoValue({
      ...userInfoValue,
      [name]: value,
    });
    if (
      emailRegex.test(userInfoValue.email) &&
      passwordRegex.test(userInfoValue.pw)
    ) {
      setValidation(true);
    } else {
      setValidation(false);
    }
  }

  const submitLoginForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isValidation) {
      navigate("/main");
    } else {
      alert("이메일 비밀번호를 다시 확인해주세요");
    }
  };

  return (
    <div>
      <div></div>
      <div>
        <div>
          <h1>Seongsutagram</h1>
          <form onSubmit={submitLoginForm}>
            <input
              onChange={userInfoChange}
              value={userInfoValue.email}
              required
              name="email"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={userInfoChange}
              value={userInfoValue.pw}
              name="pw"
              required
              type="password"
              placeholder="비밀번호"
            />
            <button>로그인</button>
          </form>
          <p>또는</p>
          <span>Facebook으로 로그인</span>
          <span>비밀번호를 잊으셨나요?</span>
        </div>
        <div>
          <span>계정이 없으신가요?</span>
          <span>가입하기</span>
        </div>
        <div>
          <span>앱을 다운로드하세요.</span>
          <div>
            <div>
              <img
                alt=""
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
              />
            </div>
            <div>
              <img
                alt=""
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
