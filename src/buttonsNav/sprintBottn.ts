export const sprintContainer = async () => {
  const sprintBtn = document.querySelector(".sprint");
  const mainInfoContainer = document.querySelector(".main") as HTMLElement;
  async function sprintHandler() {
    return (mainInfoContainer.innerHTML = `
      
    `);
  }

  sprintBtn?.addEventListener("click", sprintHandler);
};
