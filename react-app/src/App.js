import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import Detail from "./components/routes/Detail";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
