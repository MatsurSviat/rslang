import { startGameSprint } from "../../sprintGame/scriptSprint";

export const sprintContainer = async () => {
  const sprintBtns = document.querySelectorAll(".sprint");
  async function sprintHandler() {
    startGameSprint();
  }

  sprintBtns.forEach((sprintBtn) =>
    sprintBtn.addEventListener("click", sprintHandler)
  );
};
