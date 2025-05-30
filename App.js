import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard";
import IdeaHub from "./IdeaHub";
import Metrics from "./Metrics";
import Investors from "./Investors";

function App() {
  const [route, setRoute] = useState("/");

  const renderRoute = () => {
    switch (route) {
      case "/":
        return <Dashboard />;
      case "/idea":
        return <IdeaHub />;
      case "/metrics":
        return <Metrics />;
      case "/investors":
        return <Investors />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onNavigate={setRoute} />
      <main className="flex-1 bg-gray-100 min-h-screen ml-64 p-6">
        {renderRoute()}
      </main>
    </div>
  );
}

export default App;
