import Audiocall from "../audiocall/audiocall";

export const audioCallContainer = async () => {
  const bookBtn = document.querySelector(".nav .audio");
  const mainInfoContainer = document.querySelector(".main") as HTMLElement;
  async function bookHandler() {
    mainInfoContainer.innerHTML = "";
    console.log("audiocall");

    const audioGame = Audiocall();
    audioGame.renderSelectOptions();
  }

  bookBtn!.addEventListener("click", bookHandler);
};
