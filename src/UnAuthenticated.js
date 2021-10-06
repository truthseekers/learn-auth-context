import React from "react";
import Signup from "./Signup";
import Login from "./Login";

function UnAuthenticated() {
  const [hasAccount, setHasAccount] = React.useState(false);

  return (
    <>
      <h2>This is the unauthenticated part of the app.</h2>

      {hasAccount ? <Login /> : <Signup />}

      <span
        style={{
          color: "blue",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={() => setHasAccount(!hasAccount)}
      >
        {hasAccount
          ? "Click here to Sign up!"
          : "Already have an account? Click here to log in"}
      </span>
    </>
  );
}

export default UnAuthenticated;
