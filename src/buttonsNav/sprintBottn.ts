export const sprintContainer = async () => {
  const sprintBtns = document.querySelectorAll(".sprint");
  const mainInfoContainer = document.querySelector(".main") as HTMLElement;
  async function sprintHandler() {
    return (mainInfoContainer.innerHTML = `
      
    `);
  }

  sprintBtns.forEach((sprintBtn) =>
    sprintBtn.addEventListener("click", sprintHandler)
  );
};
