import { Home } from "./components/Home";
import { MenuBar } from "./components/MenuBar/MenuBar";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <MenuBar />
      <Home />
    </div>
  );
};

export default App;
