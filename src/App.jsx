import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
