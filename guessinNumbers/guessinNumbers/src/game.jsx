import React, { useState, useEffect } from 'react';
import './game.css';

const Game = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  }, []);

  const handleGuess = () => {
    const numericGuess = parseInt(guess, 10);
    if (isNaN(numericGuess) || numericGuess < 1 || numericGuess > 100) {
      setFeedback('Its between 1 - 100 fella');
      return;
    }

    setHistory([...history, numericGuess]);

    if (numericGuess < randomNumber) {
      setFeedback('You aimin too low brotha, go for the stars!');
    } else if (numericGuess > randomNumber) {
      setFeedback('I know that you wanna go high, but not that high brotha!');
    } else {
      setFeedback('Amazin, you did it brotha!');
    }
  };

  return (
    <div className="game">
      <h1>¡Guess the Numbah!</h1>
      <div className="number-display">
        {feedback === 'Amazin Brotha' ? randomNumber : '?'}
      </div>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="time to guess, brotha"
      />
      <button className='button2' onClick={handleGuess}>Checkin'</button>
      <p>{feedback}</p>
      <h2>This are youre tries brah</h2>
      <ul>
        {history.map((attempt, index) => (
          <li key={index}>{attempt}</li>
        ))}
      </ul>
    </div>
  );
};

export default Game;
