import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import UnAuthenticated from "./UnAuthenticated";
import { useAuth } from "./AuthContext";

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="App">
      {currentUser ? <Dashboard /> : <UnAuthenticated />}
    </div>
  );
}

export default App;
