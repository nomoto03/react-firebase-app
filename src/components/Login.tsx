import React, { FormEvent, useRef, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const emailValue = emailRef.current.value;
      const passwordValue = passwordRef.current.value;
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              setError("正しいメールアドレスの形式で入力してください。");
              break;
            case "auth/user-not-found":
              setError("メールアドレスかパスワードに誤りがあります。");
              break;
            case "auth/wrong-password":
              setError("メールアドレスかパスワードに誤りがあります。");
              break;
            default:
              setError("メールアドレスかパスワードに誤りがあります。");
              break;
          }
        });
    }
  };
  return (
    <div>
      <h1>ログイン画面</h1>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="email"
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            ref={passwordRef}
          />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div>
          ユーザー登録は<Link to={"/signup"}>こちら</Link>から
        </div>
      </form>
    </div>
  );
};

export default Login;
