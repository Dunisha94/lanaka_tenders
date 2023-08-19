import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Tenderhistory from "./Pages/Tender History/Tenderhistory";
import Analytics from "./Pages/Analytics/Analytics";
import Settings from "./Pages/Settings/Settings";
import Products from "./Pages/Products/Products";

const App = () => {
  return (
    <div>
      <>
        <Router>
          <Routes>
            <Route path="/" exact element={<Dashboard />}></Route>
            <Route path="/profile" exact element={<Profile />}></Route>
            <Route
              path="/tenderhistory"
              exact
              element={<Tenderhistory />}
            ></Route>
            <Route path="/analytics" exact element={<Analytics />}></Route>
            <Route path="/settings" exact element={<Settings />}></Route>
            <Route path="/products" exact element={<Products />}></Route>
          </Routes>
        </Router>
      </>
    </div>
  );
};

export default App;
