import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="md:container mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
