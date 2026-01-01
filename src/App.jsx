import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventPage";
import MinecraftHotbar from "./components/MinecraftHotbar";

export default function App() {
  return (
    <>
      <MinecraftHotbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </>
  );
}
