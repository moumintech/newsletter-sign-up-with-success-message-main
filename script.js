// @ts-nocheck

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const emailInput = document.querySelector(".email-input");
  const errorMessage = document.querySelector(".error-message");
  const confirmationMessage = document.querySelector(".confirmation-message");
  const insertedEmail = document.querySelector(".inserted-email");
  const dismissButton = document.querySelector(".dismiss-button");

  if (
    form instanceof HTMLFormElement &&
    emailInput instanceof HTMLInputElement &&
    errorMessage &&
    confirmationMessage &&
    insertedEmail &&
    dismissButton
  ) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (emailRegex.test(email)) {
        errorMessage.classList.add("hidden");

        form.classList.add("hidden");
        const wrapper = document.getElementById("wrapper");
        wrapper.classList.add("hidden");

        confirmationMessage.classList.remove("hidden");

        insertedEmail.textContent = email;

        form.reset();
      } else {
        errorMessage.classList.remove("hidden");
      }
    });

    dismissButton.addEventListener("click", () => {
      confirmationMessage.classList.add("hidden");
      form.classList.remove("hidden");
      wrapper.classList.remove("hidden");

      emailInput.focus();
    });
  } else {
    console.error("Un ou plusieurs éléments sont introuvables dans le DOM.");
  }
});
