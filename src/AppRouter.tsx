import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Resources } from "./components/Resources";
import { PageNotFound } from "./components/PageNotFound";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export { AppRouter };
