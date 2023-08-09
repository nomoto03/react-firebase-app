import React from "react";
import { auth } from "../firebase";
import { signOut } from "@firebase/auth";
import { Navigate, useNavigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const handleLogout = () => {
    signOut(auth);
    navigate("/login");
  };
  if (!user) {
    return <Navigate to="/login" />;
  } else {
    return (
      <div>
        <h1>ホームページ</h1>
        <button onClick={handleLogout}>ログアウト</button>
      </div>
    );
  }
};

export default Home;
