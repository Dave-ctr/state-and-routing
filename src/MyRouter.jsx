import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Fish from "./Fish";
import Bird from "./Bird";
import Insect from "./Insect";

function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
            <Route path="/fish" element={<Fish />} />
            <Route path="/bird" element={<Bird />} />
            <Route path="/insect" element={<Insect />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default MyRouter;
