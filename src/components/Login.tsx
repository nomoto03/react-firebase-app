import React, { FormEvent, useRef } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const emailValue = emailRef.current.value;
      const passwordValue = passwordRef.current.value;
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          // ログイン成功時の処理
          console.log('ログイン成功:', user);
        })
        .catch((error) => {
          // ログイン失敗時の処理
          console.error('ログイン失敗:', error);
        });
    }
  };
  return (
    <div>
      <h1>ログイン画面</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="email" placeholder="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" name="password" type="password" placeholder="password" ref={passwordRef} />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザー登録は<Link to={"/signup"}>こちら</Link>から
        </div>
      </form>
    </div>
  )
};

export default Login;
