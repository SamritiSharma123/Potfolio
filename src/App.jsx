import BackgroundFX from "./components/BackgroundFX";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import "./index.css";

export default function App(){
  return (
    <div className="appLayout">
      <BackgroundFX />
      <Sidebar />
      <main className="mainContent">
        <Home />
      </main>
    </div>
  );
}