const emailInput = document.querySelector("#waitlist-email");
const form = document.querySelector("#waitlist-form");
const formMessage = document.querySelector("#form-message");
const waitlistButtons = document.querySelectorAll("[data-focus-waitlist]");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function submitWaitlistPlaceholder(email, audience) {
  // TODO: Replace this placeholder with a real waitlist integration when one exists.
  console.info("Larry waitlist placeholder submit", { email, audience });
}

waitlistButtons.forEach((button) => {
  button.addEventListener("click", () => {
    emailInput.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => emailInput.focus(), 450);
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const email = String(formData.get("email") || "");
  const audience = String(formData.get("audience") || "Parent");

  if (!isValidEmail(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    emailInput.focus();
    return;
  }

  await submitWaitlistPlaceholder(email, audience);
  formMessage.textContent = "You're on the list. We'll send product updates and early access invites soon.";
});
