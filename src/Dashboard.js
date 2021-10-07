import { useAuth } from "./AuthContext";

function Dashboard() {
  const { currentUser, logout } = useAuth();

  return (
    <div>
      <h3>Welcome {currentUser.email}</h3>

      <button onClick={() => logout()}>Log out</button>
    </div>
  );
}

export default Dashboard;
