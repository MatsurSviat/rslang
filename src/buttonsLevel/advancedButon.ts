import { Words, BASE_URL } from "../API";
import { audioBtnWordPlay } from "./audioButton";
import { paginationAdvanced } from "./paginationAdvanced";

export async function advancedHandler() {
  const mainContainer = document.querySelector(".main") as HTMLElement;
  const responseWords = await Words.getWords("4", "0");
  mainContainer.innerHTML = `
    ${
      responseWords
        .map(
          (word) =>
            `
        <div class="elementary-container">
        <div class="words-container">
  <div class="img-container">
    <img class="image" src="${BASE_URL}/${word.image}"/>
  </div>
  <div class="word-wrapper">
    <div class="word">${word.word} - ${word.transcription} - ${word.wordTranslate}</div>
    <div class="example-first">${word.textMeaning} - ${word.textMeaningTranslate}</div>
    <div class="example-second">${word.textExample} - ${word.textExampleTranslate}</div>
    <div class="audio-container">
      <button class="audio-btn-word" data-id="${word.id}">Прослушать аудио</button>
      <audio id="audio-1" src="${BASE_URL}/${word.audio}" data-id="${word.id}"></audio>
      <audio id="audio-2" src="${BASE_URL}/${word.audioExample}" data-id="${word.id}"></audio>
      <audio id="audio-3" src="${BASE_URL}/${word.audioMeaning}" data-id="${word.id}"></audio>
    </div>
    <div class="word-buttons">
      <button class="hard-word">Сложное слово</button>
      <button class="delete-word">Удалить слово</button>
    </div>
  </div>
</div>
</div>

    `
        )
        .join("") +
      `
      <div class="pagination">
      <ul></ul>
		  </div>`
    }
    `;
  audioBtnWordPlay();
  paginationAdvanced(30, 1);
}

export const advancedLevel = () => {
  const advancedBtn = document.querySelector(".advanced") as HTMLElement;

  advancedBtn.addEventListener("click", advancedHandler);
};
