import './App.css'
import Welcome from './pages/Welcome.jsx'
import Property from './components/Property.jsx'
import Board from './pages/Board.jsx'


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/board" element={<Board/>}/>
            
          </Routes>
        </Router>
      </div>
    )
}
