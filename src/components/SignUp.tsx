import { FormEvent } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";

const SignUp: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.target as HTMLFormElement;
    const email = formElement.elements.namedItem("email") as HTMLInputElement;
    const password = formElement.elements.namedItem("password") as HTMLInputElement;
    createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log(email.value, password.value);
  }
  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input id="password" name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp;