import { elementaryLevel } from "../buttonsLevel/elementaryButton";

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
};

export const bookContainerRender = () => {
  const bookBtn = document.querySelector(".book");

  bookBtn?.addEventListener("click", bookHandler);
};
