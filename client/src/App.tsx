import React from "react";
import { Home as Example } from "./components/Example";
import { Home } from "./components/Home";
import { MenuBar } from "./components/MenuBar/MenuBar";

function App() {
  // return <Example />;
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuBar />
      <Home />
    </div>
  );
}

export default App;
