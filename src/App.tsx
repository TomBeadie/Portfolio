import NavBar from "./components/NavBar/NavBar.tsx";
import Home from "./components/Home/Home.tsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
