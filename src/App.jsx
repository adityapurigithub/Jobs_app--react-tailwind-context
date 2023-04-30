import { Navigate, Outlet, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="bg-slate-900 text-gray-100 min-h-[100vh] jobs w-full mx-auto flex flex-wrap gap-10 md:px-14 md:py-10 p-4">
      <Outlet />
    </div>
  );
}

export default App;
