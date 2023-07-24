import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components";
import PublicRoute from "./Utilities/publicRouting";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route extact path="/" element={<Home />} />
          <Route extact path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
