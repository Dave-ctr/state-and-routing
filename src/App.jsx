import "./styles/index.scss";
import NavBar from "./NavBar";
import Fish from "./Fish";
import Bird from "./Bird";
import Insect from "./Insect";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  const [currentTab, setCurrentTab] = useState("Fish");

  return (
    <div className="App">
      <div className="row">
        <NavBar setCurrentTab={setCurrentTab} />
        <div className="column">
          {currentTab === "Fish" && <Fish />}
          {currentTab === "Bird" && <Bird />}
          {currentTab === "Insect" && <Insect />}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
