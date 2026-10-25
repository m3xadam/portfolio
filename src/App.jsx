import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from "./pages/home";
import Project from "./pages/project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
