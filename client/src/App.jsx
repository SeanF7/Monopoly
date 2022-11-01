import "./App.css";
import Welcome from "./pages/Welcome.jsx";
import Board from "./pages/Board.jsx";
import Movement from "./pages/Movement.jsx";
import Chat from "./pages/Chat.jsx";
import io from "socket.io-client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const socket = io.connect("http://localhost:3001");
socket.emit("join_room", "1");
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/board" element={<Board />} />
          <Route path="/pieces" element={<Movement />} />
          <Route
            path="/chat"
            element={
              <Chat
                socket={socket}
                username={Math.round(Math.random() * 100)}
                room={"1"}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
