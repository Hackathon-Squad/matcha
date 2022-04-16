import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./pages/Home";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSuccessfulLogin = (res) => {
    setUser(res.profileObj);
    setLoggedIn(true);
    console.log("Login Success! Current User: ", res.profileObj);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
    console.log("[App.js] Successfully logged out.");
  };

  const handleFailedLogin = (res) => {
    console.log("[App.js] Login Failed: ", res);
    setUser(null);
    setLoggedIn(false);
  };

  return <Router>
    <Routes>
      <Route path="/" element={
        <Home 
          handleSuccessfulLogin={handleSuccessfulLogin}
          handleLogout={handleLogout}
          handleFailedLogin={handleFailedLogin}
        />
      } />
      <Route path="/a" element={<div>a</div>} />
      <Route path="/b" element={<div>b</div>} />
    </Routes>
  </Router>
}

export default App;
