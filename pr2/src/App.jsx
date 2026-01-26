import Counter from "./Components/Counter";
import "./App.css";

function App() {
  return (
    <div className="app-bg">
      <div className="glass-card">
        <Counter name="kano" age={35} />
      </div>
    </div>
  );
}

export default App;