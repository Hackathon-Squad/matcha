import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a" element={<div>a</div>} />
      <Route path="/b" element={<div>b</div>} />
    </Routes>
  </Router>
}

export default App;
