const guessTextField = document.querySelector(".guessTextField");
const resultText = document.querySelector(".resultText");
const guessCountText = document.querySelector(".guessCountText");

function displayImage(imageURL) {
  const image = document.querySelector(".generatedImage");
  image.src = imageURL;
}

function clearField() {
  guessTextField.value = "";
}

function displayGuessCount(gameState) {
  const { currentGuessCount } = gameState;
  const guessesLeft = 3 - currentGuessCount;

  if (guessesLeft > 1) {
    guessCountText.textContent = `${guessesLeft} tries left`;
  } else if (guessesLeft === 1) {
    guessCountText.textContent = `${guessesLeft} try left`;
  }
}

function hideGuessCount() {
  guessCountText.textContent = "";
}

function displayResult(gameState, type) {
  if (type === "correct") {
    resultText.className = "resultText correctMessage";
    resultText.textContent = "Yay! That was correct!";
    hideGuessCount();
  } else if (type === "retry") {
    resultText.className = "resultText incorrectMessage";
    resultText.textContent = "That was incorrect, try again!";
    displayGuessCount(gameState);
  } else if (type === "gameOver") {
    resultText.className = "resultText incorrectMessage";
    resultText.textContent = `Game Over! The word was: ${gameState.selectedWord}`;
    hideGuessCount();
  }
}

export { displayImage, clearField, displayResult };
