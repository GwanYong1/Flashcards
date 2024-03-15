import React, { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';

const App = () => {
  const [side, setSide] = useState(true);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);
  const [user_answer, setUserAnswer] = useState('');
  const [answerStatus, setAnswerStatus] = useState('');

  function handleSide() {
    setSide(!side);
  }

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get the correct answer from the card array
    const correctAnswer = card[currentFlashcard].answer;
  
    // Trim whitespace and convert both user's answer and correct answer to lowercase for case-insensitive comparison
    const userAnswerTrimmed = user_answer.trim().toLowerCase();
    const correctAnswerTrimmed = correctAnswer.toLowerCase();
  
    // Check if the user's answer matches the correct answer
    if (userAnswerTrimmed === correctAnswerTrimmed) {
      setAnswerStatus('correct'); // Set the answer status to correct
      if (side); // Update InitiallyCorrect only if the flashcard is not flipped
    } else {
      setAnswerStatus('incorrect'); // Set the answer status to incorrect
    }
  }  
  

  function handlePrevious() {
    let prevCardIndex = currentFlashcard - 1;
    // If current card index is the first card, loop back to the last card
    if (prevCardIndex < 0) {
      prevCardIndex = card.length - 1;
    }
    setCurrentFlashcard(prevCardIndex);
    setSide(true);
    setUserAnswer(''); // Clear user input
    setAnswerStatus(''); // Reset answer status
  }

  function handleNext() {
    let nextCardIndex = currentFlashcard + 1;
    // If current card index is the last card, loop back to the first card
    if (nextCardIndex === card.length) {
      nextCardIndex = 0;
    }
    setCurrentFlashcard(nextCardIndex);
    setSide(true);
    setUserAnswer(''); // Clear user input
    setAnswerStatus(''); // Reset answer status
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
    setUserAnswer(''); // Clear user input
    setAnswerStatus(''); // Reset answer status
  }

  const card = [
    { question: 'HCl', answer: 'Hydrogen Chloride', difficulty: 'easy' },
    { question: 'NaBr', answer: 'Sodium Bromide', difficulty: 'easy' },
    { question: 'LiO2', answer: 'Lithium Oxide', difficulty: 'easy' },
    { question: 'NH4+', answer: 'Ammonium', difficulty: 'medium' },
    { question: 'NO3-', answer: 'Nitrate', difficulty: 'medium' },
    { question: 'SO3-2', answer: 'Sulfite', difficulty: 'medium' },
    { question: 'Ni2S3', answer: 'Nickel(III) Sulfide', difficulty: 'hard' },
    { question: 'Mn3(PO4)2', answer: 'Manganese(II) Phosphate', difficulty: 'hard' },
    { question: 'Fe(ClO3)3', answer: 'Iron(III) Chlorate', difficulty: 'hard' },
    { question: 'CuSO4 · 5H2O', answer: 'Copper(II) Sulfate Pentahydrate', difficulty: 'hard' },
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
      <h4>Guess your answer here:</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={user_answer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className={`input-box ${
            (side && answerStatus === 'correct') ? 'correct-input' : // Correct answer when the flashcard is not flipped
            (!side && answerStatus === 'correct') ? 'correct-input' : // Correct answer when the flashcard is flipped (apply 'incorrect-input' class)
            (!side || answerStatus === 'incorrect') ? 'incorrect-input' : // Incorrect answer for both flipped and unflipped cards
            ''
          }`}
                
        />

        <button type="submit" className="button submit check-answer">
          Check Answer
        </button>
      </form>
      <button className="button" onClick={handlePrevious}>
        Previous
      </button>
      <button className="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default App;
