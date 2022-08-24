export async function bookContainer() {
  const bookBtn = document.querySelector(".book");
  const infoContainer = document.querySelector(".information") as HTMLElement;
  async function bookHandler() {
    return (infoContainer.innerHTML = `
        <div class="book-buttons">
			<button class="elementary">A1 Elementary</button>
			<button class="pre-intermediate">A2 Pre-Intermediate</button>
			<button class="intermediate">B1 Intermediate</button>
			<button class="upper-intermediate">B2 Upper-Intermediate</button>
			<button class="advanced">C1 Advanced</button>
			<button class="profiency">C2 Profiency</button>
            </div>
		  </div>
    `);
  }

  bookBtn?.addEventListener("click", bookHandler);
}
