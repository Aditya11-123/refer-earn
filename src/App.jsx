import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReferPage from "./pages/ReferPage";
import ReferralLinkPage from "./pages/ReferralLinkPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReferPage />} />
        <Route path="/referral-link" element={<ReferralLinkPage />} />
      </Routes>
    </Router>
  );
}

export default App;
