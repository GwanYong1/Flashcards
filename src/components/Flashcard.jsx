import React from "react";

const Flashcard = ({ question, answer, side, on_click_function, difficulty }) => {
  const buttonStyle = {
    width: "500px", 
    height: "350px", 
    padding: "20px",
    fontSize: "30px",
    backgroundColor: getBackgroundColor(difficulty)
  };

  function getBackgroundColor(difficulty) {
    switch (difficulty) {
      case "easy":
        return "lightgreen";
      case "medium":
        return "orange";
      case "hard":
        return "red";
      default:
        return "white"; // Default background color if difficulty is not recognized
    }
  }

  if (side) {
    return (
      <div className='flashcard'>
        <button style={buttonStyle} onClick={on_click_function}>{question}</button>
      </div>
    );
  } else {
    return (
      <div className='flashcard'>
        <button style={buttonStyle} onClick={on_click_function}>{answer}</button>
      </div>
    );
  }
}

export default Flashcard;
