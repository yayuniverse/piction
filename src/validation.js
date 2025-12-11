const guessTextField = document.querySelector(".guessTextField");

export default function validateGuess(gameState) {
  if (
    guessTextField.value.toLowerCase() === gameState.selectedWord.toLowerCase()
  ) {
    return { result: "correct" };
  }

  if (gameState.currentGuessCount < 2) {
    const newCount = gameState.currentGuessCount + 1;
    return { result: "retry", newCount };
  }

  return { result: "gameOver" };
}
