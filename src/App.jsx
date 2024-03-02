import React, { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';

const App = () => {
  const [side, setSide] = useState(true);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);

  function handleSide() {
    setSide(!side);
  }

  function handleRandomCard() {
    setSide(true);
    
    // Initialize the random index as the current flashcard index
    let randomIndex = currentFlashcard;
  
    // Generate a new random index until it's different from the previous one
    while (randomIndex === currentFlashcard) {
      randomIndex = Math.floor(Math.random() * card.length);
    }
  
    // Set the new random index as the current flashcard index
    setCurrentFlashcard(randomIndex);
  }
  

  const card = [
    { question: 'HCl', answer: 'Hydrogen Chloride', difficulty: 'easy'},
    { question: 'NaBr', answer: 'Sodium Bromide', difficulty: 'easy'},
    { question: 'LiO2', answer: 'Lithium Oxide', difficulty: 'easy'},
    { question: 'NH4+', answer: 'Ammonium', difficulty: 'medium'},
    { question: 'NO3-', answer: 'Nitrate', difficulty: 'medium'},
    { question: 'SO3-2', answer: 'Sulfite', difficulty: 'medium'},
    { question: 'Ni2S3', answer: 'Nickel(III) Sulfide', difficulty: 'hard'},
    { question: 'Mn3(PO4)2', answer: 'Manganese(II) Phosphate', difficulty: 'hard'},
    { question: 'Fe(ClO3)3', answer: 'Iron(III) Chlorate', difficulty: 'hard'},
    { question: 'CuSO4 · 5H2O', answer: 'Copper(II) Sulfate Pentahydrate', difficulty: 'hard'},
  ];

  return (
    <div className="App">
      <h1>Chemistry Naming Compounds Quiz</h1>
      <h2>Can you figure out the names of the chemical compounds?</h2>
      <h3>Difficulty: Green - Easy, Orange - Medium, Red - Hard</h3>
      <div className="flashcard-container">
        <Flashcard
          question={card[currentFlashcard].question}
          answer={card[currentFlashcard].answer}
          side={side}
          on_click_function={handleSide}
          difficulty={card[currentFlashcard].difficulty}
        />
      </div>
      <button className="button" onClick={handleRandomCard}>
        Random Card
      </button>
    </div>
  );
};

export default App;
