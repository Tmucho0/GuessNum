import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Game from "./game"; 


const Home = () => {
  const nameRef = useRef();
  const navigate = useNavigate();

  const handleStartGame = () => {
    const playerName = nameRef.current.value;
    if (playerName) {
      navigate(`/game?name=${playerName}`);
    } else {
      alert("Whats your name, fella?");
    }
  };

  return (
    <div className="home">
      <h1>You need a name, dont ya, mate?</h1>
      <input ref={nameRef} type="text" placeholder="your name here, brah" />
      <button onClick={handleStartGame}>Start</button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />  {/* Ruta de inicio que apunta a Home */}
        <Route path="/game" element={<Game />} />  {/* Ruta del juego que apunta a Game.jsx */}
      </Routes>
    </Router>
  );
};

export default App;
