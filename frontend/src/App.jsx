import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import FindUsers from "./pages/FindUsers";
import { useEffect } from "react";
import Preferences from "./pages/Preferences";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(user);
  }, [user]);
  const handleSuccessfulLogin = (res) => setUser(res.profileObj);

  const handleLogout = () => setUser(null);

  const handleFailedLogin = (res) => setUser(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleSuccessfulLogin={handleSuccessfulLogin}
              handleLogout={handleLogout}
              handleFailedLogin={handleFailedLogin}
              user={user}
            />
          }
        />
        <Route path="/find" element={<FindUsers user={user} />} />
        <Route path="/preferences" element={<Preferences user={user} />} />
        <Route path="/users/:id" element={<div>a</div>} />
      </Routes>
    </Router>
  );
};

export default App;
