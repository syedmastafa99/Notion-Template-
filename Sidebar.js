import React from "react";

const navItems = [
  { name: "Dashboard", path: "/" },
  { name: "Idea Hub", path: "/idea" },
  { name: "Metrics", path: "/metrics" },
  { name: "Investor CRM", path: "/investors" }
];

export default function Sidebar({ onNavigate }) {
  return (
    <div className="w-64 bg-white shadow h-screen p-4 fixed">
      <h2 className="text-xl font-bold mb-6">🧠 Startup OS</h2>
      <ul className="space-y-4">
        {navItems.map(item => (
          <li key={item.name}>
            <button
              onClick={() => onNavigate(item.path)}
              className="text-left w-full text-gray-700 hover:text-blue-600"
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
