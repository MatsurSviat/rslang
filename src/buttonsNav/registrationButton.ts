import { Users } from "../API";

function registrationHandler() {
  const mainContainer = document.querySelector(".main") as HTMLElement;
  mainContainer.innerHTML = `
        <div class="main-autorization-wrapper">
        <div class="autorization-wrapper">
            <form id="auth-reg-form" action="">
                <p>Name<input id="input-name" type="text"></p>
                <p>E-mail<input id="input-email" type="email"></p>
                <p>Password<input  id="input-password" type="password"></p>
                <p><input id="auth-reg-submit" type="button" value="Submit"></p>
            </form>
        </div>
    </div>
        `;
  const btnSubmit = document.querySelector("#auth-reg-submit");
  function btnSubmitHandler() {
    const nameInput = document.querySelector("#input-name") as HTMLInputElement;
    const emailInput = document.querySelector(
      "#input-email"
    ) as HTMLInputElement;
    const passwordInput = document.querySelector(
      "#input-password"
    ) as HTMLInputElement;

    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    Users.createUser({ name, email, password });
  }
  btnSubmit?.addEventListener("click", btnSubmitHandler);
}

export function registration() {
  const registerBtn = document.querySelector("#register-btn") as HTMLElement;
  registerBtn.addEventListener("click", registrationHandler);
}
