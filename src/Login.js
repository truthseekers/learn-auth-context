import React from "react";
import { useAuth } from "./AuthContext";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, error } = useAuth();

  return (
    <div>
      <div
        style={{
          backgroundColor: "lightgray",
          display: "inline-block",
          width: "30%",
          margin: "50px",
        }}
      >
        <h3>Log in!</h3>
        <label htmlFor="email">email</label>
        <input
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={() => login(email, password)}>Log in!</button>
      </div>
      {error && <h2 style={{ color: "red" }}>Error: {error} </h2>}
    </div>
  );
}
export default Login;
