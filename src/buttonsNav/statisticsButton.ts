export const statisticContainer = async () => {
  const bookBtns = document.querySelectorAll(".statistic");
  const mainInfoContainer = document.querySelector(".main") as HTMLElement;
  async function bookHandler() {
    return (mainInfoContainer.innerHTML = `
      
    `);
  }

  bookBtns?.forEach((bookBtn) =>
    bookBtn.addEventListener("click", bookHandler)
  );
};
