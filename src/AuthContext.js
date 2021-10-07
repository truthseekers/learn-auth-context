import React from "react";
import { initialUsers } from "./data/users";

const AuthContext = React.createContext();

function useAuth() {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = React.useState("");
  const [error, setError] = React.useState("");
  const [users, setUsers] = React.useState(initialUsers);

  const login = (email, password) => {
    const loggedInUser = users.find((user) => {
      console.log("testing user: ", user, "param email: ", email);
      return user.email === email;
    });

    if (!loggedInUser) {
      setError("No user found!");
      return;
    }

    if (password !== loggedInUser.password) {
      setError("Wrong Password!");
      return;
    }
    setError(""); // if success. reset error
    setCurrentUser(loggedInUser);
  };

  const logout = () => {
    setCurrentUser("");
  };

  const signup = (newUser) => {
    setUsers([...users, { id: users.length, ...newUser }]);
    setError(""); // if success. reset error
    setCurrentUser(newUser);
  };

  const value = {
    currentUser,
    login,
    logout,
    error,
    signup,
  };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthProvider, useAuth };
