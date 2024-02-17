import { useRouter } from "next/router";
import React, { useState } from "react";
import InputContainer from "./InputContainer";
import emailIcon from "@/public/email_envelope_mail_send_icon.svg";
import lockIcon from "@/public/lock_locker_icon.svg";

const AuthForm = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const authModeHandler = () => {
    setIsLogin((prev) => !prev);
    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredConfirmPassword("");
  };

  return (
    <form className="auth__form">
      <InputContainer
        type="email"
        value={enteredEmail}
        onChangedHandler={setEnteredEmail}
        placeholder="이메일을 입력해주세요"
        iconAlt="email icon"
        iconSrc={emailIcon}
      />
      <InputContainer
        type="password"
        value={enteredPassword}
        onChangedHandler={setEnteredPassword}
        placeholder="비밀번호를 입력해주세요"
        iconAlt="lock icon"
        iconSrc={lockIcon}
      />
      {!isLogin && (
        <InputContainer
          type="password"
          value={enteredConfirmPassword}
          onChangedHandler={setEnteredConfirmPassword}
          placeholder="비밀번호를 입력해주세요"
          iconAlt="lock icon"
          iconSrc={lockIcon}
        />
      )}
      <button className="auth__btn">
        {isLogin ? "Login" : "Create Account"}
      </button>
      <div>
        {isLogin ? "이미 계정이 있습니까?" : "존재하는 아이디로 로그인하기"}
        <button
          onClick={authModeHandler}
          className="ml-2 text-primary"
          type="button"
        >
          {isLogin ? "회원가입" : "로그인"}
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
