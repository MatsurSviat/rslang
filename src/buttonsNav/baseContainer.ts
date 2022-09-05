import { authorizationContainerRender } from "./authorizationButton";

export const baseContainerRender = async () => {
  const rootContainer = document.querySelector(".root") as HTMLDivElement;
  rootContainer.innerHTML = `
  <div class="wrapper">
    <header class="header">
			<div class="header-nav">
			<a class="header-link" href="../index.html"><h2 class="rs-lang">RS Lang</h2></a>
			<div class="header-buttons">
			<button class="authorization">🔒</button>
			<div class="menu">
  <button class="menu-btn">☰</button>
  <div class="menu-content">
    <button class="book" id="book-link">Учебник</button>
    <button class="statistic" id="statistic-link">Статистика</button>
 <button class="sprint" id="sprint-link">Спринт</button>
 <button class="audio" id="audio-link">Аудиовызов</button>
  </div>
</div>
		</div>
		</div>
		</header>
		<main class="main">
		<div class="nav">
			<button class="book">Учебник</button>
			<button class="statistic">Статистика</button>
			<button class="sprint">Спринт</button>
			<button class="audio">Аудиовызов</button>
		  </div>

		  <div class="information">
			  <div class="information-buttons">
			  <button class="more">Узнать больше о приложении</button>
			  <button class="start">Начать изучение</button>
			  <button class="video">Как работает приложение</button>
			  <button class="about">О команде</button>
			  </div>
		  </div>
		</main>


		<footer class="footer">
			<div class="footer-nav">
				<a href="https://rs.school/js/"><img class="logo" src="./assets/rslogo.png" alt="rs-logo"></a>
				<ul class="create-author">
				<li>Created at 2022:</li>
				<li><a href="https://github.com/MatsurSviat">Sviat</a></li>
				<li><a href="https://github.com/ALIAKSEI-sl">Aliaksei</a></li>
				<li><a href="https://github.com/kayirmak">Kayrat</a></li> 
				</ul>
			</div>
		</footer>
  </div>
      `;
  authorizationContainerRender();
};
