export const statisticContainer = async () => {
  const bookBtn = document.querySelector(".statistic");
  const mainInfoContainer = document.querySelector(".main") as HTMLElement;
  async function bookHandler() {
    return (mainInfoContainer.innerHTML = `
      
    `);
  }

  bookBtn?.addEventListener("click", bookHandler);
};
