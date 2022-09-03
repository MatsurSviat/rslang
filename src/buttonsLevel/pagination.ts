import { BASE_URL, Words } from "../API";
import { audioBtnWordPlay } from "./audioButton";

export async function element(totalPages: number, page: number) {
  const ulTag = document.querySelector("ul");
  const firstpage = 1;

  let liTag = "";
  let activeLi;
  const beforePages = page - 1;
  const afterPages = page + 1;
  if (page > 1) {
    liTag += `<li class="btn prev"><i class="fas fa-angel-left">Prev</i></li>`;
  }
  if (page > 2) {
    liTag += `<li class="numb startPage" data-id="1">${firstpage}</li>`;
    if (page > 3) {
      liTag += `<li class="dots">...</li>`;
    }
  }
  let pageLength: number;

  for (pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    if (page == pageLength) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" data-id="${pageLength}">${pageLength}</li>`;
  }

  if (page < totalPages - 1) {
    liTag += `<li class="dots">...</li>`;
    if (page < totalPages - 2) {
      liTag += `<li class="numb lastPage" data-id="29">${totalPages}</li>`;
    }
  }

  if (page < totalPages) {
    liTag += `<li class="btn next"><i class="fas fa-angel-right">Next</i></li>`;
  }
  if (ulTag != undefined) {
    ulTag.innerHTML = liTag;
  }
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const startPage = document.querySelector(".startPage");
  const activeBtns = document.querySelectorAll(".numb");

  async function preBtnHandler() {
    const mainContainer = document.querySelector(".main") as HTMLElement;

    const responseWords = await Words.getWords("0", `${page - 1}`);
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
      <button class="hard-word"></button>
      <button class="delete-word"></button>
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
    element(totalPages, page - 1);
  }

  async function nextBtnhandler() {
    const mainContainer = document.querySelector(".main") as HTMLElement;

    const responseWords = await Words.getWords("0", `${page + 1}`);
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
      <button class="hard-word"></button>
      <button class="delete-word"></button>
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
    element(totalPages, page + 1);
  }

  async function startpageHandler() {
    element(totalPages, 1);
  }



  async function activeBtnHandler(event: Event) {
    const btnId = Number((event.target as HTMLElement).dataset.id);

    const mainContainer = document.querySelector(".main") as HTMLElement;

    const responseWords = await Words.getWords("0", `${btnId}`);
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
      <button class="hard-word"></button>
      <button class="delete-word"></button>
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
    if (btnId != undefined) {
      element(totalPages, +btnId);
    }
  }

  

  nextBtn?.addEventListener("click", nextBtnhandler);
  prevBtn?.addEventListener("click", preBtnHandler);
  startPage?.addEventListener("click", startpageHandler);
  activeBtns?.forEach((activeBtn) =>
    activeBtn.addEventListener("click", activeBtnHandler)
  );
}
