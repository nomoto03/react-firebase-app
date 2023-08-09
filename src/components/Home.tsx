import React from "react";
import { auth } from "../firebase";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const handleLogout = () => {

  };
  return (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}></button>
    </div>
  )
};

export default Home;
