async function audioBtnWordHandler(event: Event) {
  const audioId = (event.target as HTMLElement).dataset.id;
  const audioWord = document.querySelector(
    `#audio-1[data-id="${audioId}"]`
  ) as HTMLAudioElement;
  const audioExample = document.querySelector(
    `#audio-2[data-id="${audioId}"]`
  ) as HTMLAudioElement;
  const audioMeaning = document.querySelector(
    `#audio-3[data-id="${audioId}"]`
  ) as HTMLAudioElement;
  audioWord.play();
  audioWord.onended = function () {
    audioMeaning.play();
    audioMeaning.onended = function () {
      audioExample.play();
    };
  };
}

export const audioBtnWordPlay = () => {
  const audioBtns = document.querySelectorAll(".audio-btn-word");

  audioBtns?.forEach((audioBtn) =>
    audioBtn.addEventListener("click", audioBtnWordHandler)
  );
};
