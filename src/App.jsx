import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventPage";
// import Team from "./pages/Team";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        {/* <Route path="/team" element={<Team />} /> */}
      </Routes>
    </div>
  );
}
