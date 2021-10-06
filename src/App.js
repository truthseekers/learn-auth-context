import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Dashboard";
import UnAuthenticated from "./UnAuthenticated";

function App() {
  const currentUser = false;

  return (
    <div className="App">
      {currentUser ? <Dashboard /> : <UnAuthenticated />}
    </div>
  );
}

export default App;
