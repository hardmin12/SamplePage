import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./authSlice"; // Auth에서 login 액션 가져오기
import { useNavigate } from "react-router-dom"; // useNavigate로 변경

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLogin = async () => {
    if (email === "user@example.com" && password === "password123") {
      dispatch(login()); // 로그인 상태를 Redux 스토어에 저장
      localStorage.setItem("isLoggedIn", true); // 로그인 상태를 로컬 스토리지에도 저장
      alert("Login Successful");
      navigate("/cart"); // 로그인 성공 시 카트 페이지로 이동
    } else {
      setError("Invalid email or password"); // 로그인 실패 시 에러 메시지 설정
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
