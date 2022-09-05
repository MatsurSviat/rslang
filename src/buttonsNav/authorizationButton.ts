import { Auth } from "../API";
import { registration } from "./registrationButton";

const authorizationHandler = async () => {
  const mainContainer = document.querySelector(".main") as HTMLElement;
  mainContainer.innerHTML = `
        <div class="main-autorization-wrapper">
        <div class="autorization-wrapper">
            <form id="auth-reg-form" action="">
                <p>E-mail<input id="input-email" type="email"></p>
                <p>Password<input  id="input-password" type="password"></p>
                <button id="auth-reg-submit">Login</button>
                <button id="register-btn">Register</button>
            </form>
        </div>
    </div>
        `;
  const btnSubmit = document.querySelector("#auth-reg-submit");
  function btnSubmitHandler() {
    const emailInput = document.querySelector(
      "#input-email"
    ) as HTMLInputElement;
    const passwordInput = document.querySelector(
      "#input-password"
    ) as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!email || !password) return alert("Fill all fields");
    Auth.signIn({ email, password });
    console.log(Auth);
  }

  btnSubmit?.addEventListener("click", btnSubmitHandler);
  registration();
};

export const authorizationContainerRender = () => {
  const authorizationBtn = document.querySelector(
    ".authorization"
  ) as HTMLElement;
  authorizationBtn.addEventListener("click", authorizationHandler);
};
