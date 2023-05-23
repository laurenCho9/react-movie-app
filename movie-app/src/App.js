import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/routes/Home";
import Detail from "./components/routes/Detail";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }
`;

export default App;
