import { advancedLevel } from "../buttonsLevel/advancedButon";
import { elementaryLevel } from "../buttonsLevel/elementaryButton";
import { intermediateLevel } from "../buttonsLevel/intermediateButton";
import { preintermediateLevel } from "../buttonsLevel/preIntermediateButton";
import { profiencyLevel } from "../buttonsLevel/profiencyButton";
import { upperIntermediateLevel } from "../buttonsLevel/upperIntermediateButton";

const bookHandler = async () => {
  const mainInfoContainer = document.querySelector(".main") as HTMLElement;
  mainInfoContainer.innerHTML = `
  <h1 class="book-title">Уровни сложности</h1>
  <div class="book-nav">
    <div class="book-buttons">
      <button class="elementary" class="button-level">A1 Elementary</button>
      <button class="pre-intermediate" class="button-level">A2 Pre-Intermediate</button>
      <button class="intermediate" class="button-level">B1 Intermediate</button>
      <button class="upper-intermediate" class="button-level">B2 Upper-Intermediate</button>
      <button class="advanced" class="button-level">C1 Advanced</button>
      <button class="profiency" class="button-level">C2 Profiency</button>
    </div>
  </div>
    `;
  elementaryLevel();
  preintermediateLevel();
  intermediateLevel();
  upperIntermediateLevel();
  advancedLevel();
  profiencyLevel();
};

export const bookContainerRender = () => {
  const bookBtns = document.querySelectorAll(".book");

  bookBtns.forEach((bookBtn) => bookBtn.addEventListener("click", bookHandler));
};
