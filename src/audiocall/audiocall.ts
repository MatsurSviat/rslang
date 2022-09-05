import { getFile, req, wordsForGame } from "../api/api";
import { Answer, Word } from "../types";

import { soundImg } from "../assets/images/svgs";
import { getItem, setItem } from "../storage/localstorage";
import "./audiocall.css";
import AudioPlay from "../assets/audios/audios";

const Audiocall = function () {
  let gameRep = 0;

  const renderSelectOptions = async (): Promise<void> => {
    let i = 0;

    const audiocall: HTMLElement = document.createElement("div");
    audiocall.className = "audiocall";
    document.querySelector(".main")!.append(audiocall);

    const audiocallTitle: HTMLElement = document.createElement("h2");
    audiocallTitle.className = "audiocall-title";
    audiocallTitle.textContent = "Аудиовызов";

    const audiocallText: HTMLElement = document.createElement("div");
    audiocallText.className = "audiocall-text";
    audiocallText.innerHTML = `
          <p>Тренировка Аудиовызов улучшает восприятие речи на слух.</p>
          <p>
          Чтобы играть с помощью клавиатуры, используй клавиши
          1, 2, 3, 4, 5 - чтобы дать ответ,
          space - для воспроизведения звука,
          enter - чтобы пропустить вопрос,
          стрелка-вправо - чтобы перейти к следующему вопросу.
          </p>
      `;

    const audiocallLevels: HTMLElement = document.createElement("div");
    audiocallLevels.className = "audiocall-levels";
    audiocallLevels.innerHTML = `
          <select name="" id="level-select"></select>
      `;

    const audiocallStart: HTMLElement = document.createElement("div");
    audiocallStart.className = "audiocall-start";
    audiocallStart.innerHTML = `
          <button class="audiocall-start__btn">Начать</button>
      `;

    audiocall.append(
      audiocallTitle,
      audiocallText,
      audiocallLevels,
      audiocallStart
    );

    const select: HTMLSelectElement = document.querySelector(
      "#level-select"
    ) as HTMLSelectElement;

    while ((await req(i.toString())).length) {
      const newOption = new Option(`${i + 1} - уровень`, `${i}`);
      select.append(newOption);
      i++;
    }

    document
      .querySelector(".audiocall-start__btn")!
      .addEventListener("click", startGame);
  };

  let levelVal = 0;
  let data: Word[] = [];
  const answers: Answer[] = [];
  const startGame = async (): Promise<void> => {
    // level
    const groupVal: HTMLSelectElement = document.querySelector(
      "#level-select"
    ) as HTMLSelectElement;
    // /level

    const audiocall: HTMLElement = document.querySelector(
      ".audiocall"
    ) as HTMLElement;
    audiocall.innerHTML = "";

    //render
    const main: HTMLElement = document.createElement("div");
    main.className = "audiocall-game";

    const topbar: HTMLElement = document.createElement("div");
    topbar.className = "audiocall-game-topbar";

    // const endGame: HTMLButtonElement = document.createElement("button");
    // endGame.className = "audiocall-game-topbar__end-game";
    // endGame.textContent = "X";

    const contentGame: HTMLElement = document.createElement("div");
    contentGame.className = "audiocall-game-content";

    const soundBox: HTMLElement = document.createElement("div");
    soundBox.className = "content-sound-box";
    const soundBoxBtn: HTMLButtonElement = document.createElement(
      "button"
    ) as HTMLButtonElement;
    soundBoxBtn.innerHTML = soundImg();
    soundBox.append(soundBoxBtn);

    const translationWords: HTMLElement = document.createElement("div");
    translationWords.className = "content-translation-words";

    const next: HTMLElement = document.createElement("div");
    next.className = "content-next";
    const nextBtn: HTMLButtonElement = document.createElement("button");
    nextBtn.innerHTML = "Не знаю";
    next.append(nextBtn);

    // topbar.append(endGame);
    contentGame.append(soundBox, translationWords, next);
    main.append(topbar, contentGame);
    audiocall.append(main);
    // /render

    //request
    levelVal = groupVal ? Number(groupVal.value) : levelVal++;
    let pageVal = getItem("page");
    console.log(typeof pageVal);

    if (!data.length) {
      while (data.length < 50) {
        const response = await wordsForGame(levelVal, pageVal);
        if (!response.length) {
          pageVal = 0;
          setItem("page", pageVal);
        } else {
          pageVal++;
          setItem("page", pageVal);
        }
        response.forEach((el) => {
          if (data.length < 50) {
            data.push(el);
          }
        });
      }
    }
    // /request

    // choice random element from data

    // const randIndex = Math.floor(Math.random() * data.length);
    // const randElem = data[randIndex];

    // /choice random element from data

    // render words
    let counterWords = 0;
    const randElems: Word[] = [];
    while (counterWords < 5) {
      const randIndex = Math.floor(Math.random() * data.length);
      const randElem = data[randIndex];
      const tmp = randElems.find((el) => el.id === randElem.id);
      if (!tmp) {
        randElems.push(randElem);
        const word: HTMLElement = document.createElement("div");
        word.className = "variant-word";
        word.innerHTML = randElem.wordTranslate;

        translationWords.append(word);
      } else counterWords--;
      counterWords++;
    }
    console.log(randElems);

    // /render words

    // eventlisteners
    const randIndexFromChunk = Math.floor(Math.random() * randElems.length);
    const randElemFromChunk = randElems[randIndexFromChunk];
    const audio: HTMLAudioElement = new Audio(getFile(randElemFromChunk.audio));
    audio.play();

    soundBoxBtn.addEventListener("click", () => {
      const audio: HTMLAudioElement = new Audio(
        getFile(randElemFromChunk.audio)
      );
      audio.play();
    });

    let targetWord: HTMLElement;
    const matchWord = (e: Event): void => {
      try {
        const target: HTMLElement = e.target as HTMLElement;
        targetWord = target;
        const guessWord: HTMLElement = document.createElement("h2");
        guessWord.textContent = `${randElemFromChunk.word} - ${randElemFromChunk.wordTranslate}`;

        const guessWordImage: HTMLImageElement = document.createElement("img");
        guessWordImage.src = getFile(randElemFromChunk.image);
        guessWordImage.style.gridArea = "1 / 1 / 2 / 3";

        const soundBox: HTMLElement = document.querySelector(
          ".content-sound-box"
        ) as HTMLElement;
        soundBox.append(guessWordImage, guessWord);
        const soundBoxBtn: HTMLButtonElement = soundBox.querySelector(
          "button"
        ) as HTMLButtonElement;
        const soundBoxBtnSvg: SVGElement = soundBoxBtn.querySelector(
          "svg"
        ) as SVGElement;
        soundBoxBtn.style.width = "50px";
        soundBoxBtn.style.height = "50px";
        soundBoxBtnSvg.style.width = "20px";
        soundBoxBtnSvg.style.height = "20px";

        document.querySelector(".content-next button")!.textContent =
          "Продолжить";
        if (target.textContent === randElemFromChunk.wordTranslate) {
          new Audio(AudioPlay("done")).play();
          console.log(target, "target");
          target.style.backgroundColor = "green";
          target.style.color = "white";
          answers.push({ word: randElemFromChunk, status: true });
        } else {
          target.style.backgroundColor = "red";
          throw new Error("Неверно");
        }
      } catch (err) {
        answers.push({ word: randElemFromChunk, status: false });
        new Audio(AudioPlay("wrong")).play();
      }
    };

    translationWords.addEventListener("click", (e) => matchWord(e), {
      once: true,
    });

    nextBtn.addEventListener("click", (e) => {
      data = data.filter((el) => el.id !== randElemFromChunk.id);
      if (targetWord) {
        startGame();
        gameRep++;
      } else matchWord(e);

      if (gameRep >= 10) {
        setItem("result", answers);
        result();
      }
    });

    // /eventlisteners
  };

  const result = (): void => {
    const audiocall: HTMLElement = document.querySelector(
      ".audiocall"
    ) as HTMLElement;
    audiocall.innerHTML = "";

    const res: HTMLElement = document.createElement("div");
    res.className = "audiocall-result";

    const resTitle: HTMLElement = document.createElement("div");
    resTitle.className = "audiocall-result__title";
    resTitle.innerHTML = "<h2>Поздравляем! Твой результат</h2>";

    const resPoint: HTMLElement = document.createElement("div");
    resPoint.className = "audiocall-result__point";

    const titlePoint: HTMLElement = document.createElement("div");
    titlePoint.className = "point-titles";

    const contentPoint: HTMLElement = document.createElement("div");
    contentPoint.className = "point-content";

    const btnCloseRes = document.createElement("a");
    btnCloseRes.className = "point-close";
    btnCloseRes.href = "../../index.html";
    btnCloseRes.innerHTML = `
        <button>Закрыть</button>
    `;

    resPoint.append(titlePoint, contentPoint, btnCloseRes);

    answers.forEach((el) => {
      const word: HTMLElement = document.createElement("div");
      word.className = "point-content__word";
      const wordText: HTMLElement = document.createElement("span");
      wordText.textContent = el.word.word;
      const status: HTMLImageElement = document.createElement("img");
      status.className = "point-img";
      status.src = el.status
        ? "./assets/images/done_icon.png"
        : "./assets/images/red_x.png";
      status.style.width = "13px";
      status.style.height = "13px";

      word.append(wordText, status);
      contentPoint.append(word);
    });

    const wrongTitlePoint: HTMLElement = document.createElement("div");
    wrongTitlePoint.className = "point-titles__wrong";
    wrongTitlePoint.textContent = `Всего ошибок: ${
      answers.filter((el) => el.status === false).length
    }`;

    const rightTitlePoint: HTMLElement = document.createElement("div");
    rightTitlePoint.className = "point-titles__right";
    rightTitlePoint.textContent = `Всего выучено: ${
      answers.filter((el) => el.status === true).length
    }`;

    titlePoint.append(rightTitlePoint, wrongTitlePoint);

    res.append(resTitle, resPoint);
    audiocall.append(res);
  };

  return {
    renderSelectOptions,
    startGame,
  };
};

export default Audiocall;
