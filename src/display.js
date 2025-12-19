const guessTextField = document.querySelector(".guessTextField");
const resultText = document.querySelector(".resultText");
const guessCountText = document.querySelector(".guessCountText");
const submitBtn = document.querySelector(".submitBtn");
const resetBtn = document.querySelector(".resetBtn");

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

function hideResultText() {
  resultText.textContent = "";
}

function togglePrimaryButton() {
  resetBtn.classList.toggle("hidden");
  submitBtn.classList.toggle("hidden");
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

export {
  displayImage,
  clearField,
  togglePrimaryButton,
  displayResult,
  hideResultText,
};
