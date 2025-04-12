import React, { useState } from 'react';

const styles = {
  container: {
    position: 'relative',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    minHeight: '100vh',
    overflow: 'hidden',
    color: '#fff',
  },
  bgAnimation: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(-45deg, #ff9a9e, #fad0c4, #fad0c4, #ffdde1)',
    backgroundSize: '400% 400%',
    animation: 'gradientBG 15s ease infinite',
    zIndex: -1,
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    textShadow: '1px 1px 4px #000',
  },
  choices: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  choiceButton: {
    padding: '1rem',
    minWidth: '120px',
    fontSize: '1.2rem',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#ffffffcc',
    color: '#333',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
  },
  emoji: {
    fontSize: '2.5rem',
  },
  results: {
    fontSize: '1.4rem',
  },
};
function RockPaperScissors() {
  const choices = [
    { name: 'rock', emoji: '✊' },
    { name: 'paper', emoji: '✋' },
    { name: 'scissors', emoji: '✌️' },
  ];
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);

  const play = (userSelection) => {
    const compSelection = choices[Math.floor(Math.random() * 3)];
    setUserChoice(userSelection);
    setComputerChoice(compSelection);

    const outcome = getResult(userSelection.name, compSelection.name);
    setResult(outcome);

    if (outcome === 'You Win!') setScore(score + 1);
    if (outcome === 'You Lose!') setScore(score - 1);
  };

  const getResult = (user, comp) => {
    if (user === comp) return 'Draw!';
    if (
      (user === 'rock' && comp === 'scissors') ||
      (user === 'paper' && comp === 'rock') ||
      (user === 'scissors' && comp === 'paper')
    ) {
      return 'You Win!';
    }
    return 'You Lose!';
  };

  return (
    <div style={styles.container}>
      <div style={styles.bgAnimation}></div>

      <h1 style={styles.title}>Rock Paper Scissors ✊✋✌️</h1>

      <div style={styles.choices}>
        {choices.map((choice) => (
          <button
            key={choice.name}
            onClick={() => play(choice)}
            style={styles.choiceButton}
          >
            <span style={styles.emoji}>{choice.emoji}</span>
            <br />
            {choice.name.charAt(0).toUpperCase() + choice.name.slice(1)}
          </button>
        ))}
      </div>

      <div style={styles.results}>
        <p className="fade">You chose: <span style={styles.emoji}>{userChoice?.emoji}</span></p>
        <p className="fade">Computer chose: <span style={styles.emoji}>{computerChoice?.emoji}</span></p>
        <h2 className="fade">{result}</h2>
        <h3 className="fade">Score: {score}</h3>
      </div>

      {/* Animation styles */}
      <style>
        {`
          .fade {
            animation: fadeIn 0.8s ease-in-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          button:hover {
            transform: scale(1.05);
            transition: 0.2s ease;
            background-color: #e0e0e0;
          }

          button:active {
            transform: scale(0.95);
          }
        `}
      </style>
    </div>
  );
}
export default RockPaperScissors;