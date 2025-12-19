import "./global.css";
import "./reset.css";
import generateImage from "./imagefetch";
import {
  displayImage,
  clearField,
  togglePrimaryButton,
  displayResult,
  hideResultText,
} from "./display";
import selectWord from "./wordSelection";
import validateGuess from "./validation";

const submitBtn = document.querySelector(".submitBtn");
const resetBtn = document.querySelector(".resetBtn");

const gameState = {
  selectedWord: null,
  currentGuessCount: null,
};

async function startNewRound() {
  gameState.currentGuessCount = 0;
  gameState.selectedWord = selectWord();
  console.log(gameState.selectedWord);

  try {
    // displayImage(await generateImage(gameState.selectedWord));
  } catch (error) {
    console.error("Error:", error);
  }
}

startNewRound().catch(console.error);

submitBtn.addEventListener("click", () => {
  const { result, newCount = null } = validateGuess(gameState);
  clearField();

  switch (result) {
    case "correct":
      displayResult(gameState, "correct");
      togglePrimaryButton();
      break;
    case "retry":
      gameState.currentGuessCount = newCount;
      displayResult(gameState, "retry");
      break;
    case "gameOver":
      displayResult(gameState, "gameOver");
      togglePrimaryButton();
      break;
    default:
      console.log("unknown error");
  }
});

resetBtn.addEventListener("click", () => {
  startNewRound();
  togglePrimaryButton();
  hideResultText();
});
