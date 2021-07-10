import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Routes as AnimatedRoutes } from "./Routes";

const App = () => {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, [localStorage.theme]);
  return (
    <AuthProvider>
      <div className="bg-gray-100 dark:bg-dracula-900">
        <Router>
          <Route path="*">
            <AnimatedRoutes />
          </Route>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
