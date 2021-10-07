import React from "react";
import { useAuth } from "./AuthContext";

function Signup() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signup } = useAuth();

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
        <h3>Sign Up!</h3>
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
        <button onClick={() => signup({ email: email, password: password })}>
          Signup!
        </button>
      </div>
    </div>
  );
}
export default Signup;
