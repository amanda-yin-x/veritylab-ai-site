const scrollTriggers = document.querySelectorAll("[data-scroll]");
const form = document.getElementById("mailing-list-form");
const feedback = document.getElementById("form-feedback");
const yearLabel = document.getElementById("year");

// Smooth scrolling for nav and CTA buttons
scrollTriggers.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Lightweight client-side form handler to simulate subscription
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();

    if (!name || !email) {
      feedback.textContent = "Please add your name and email.";
      feedback.style.color = "#ff8f8f";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      feedback.textContent = "Please provide a valid email address.";
      feedback.style.color = "#ff8f8f";
      return;
    }

    feedback.textContent = "Thanks! You are on the list—see you soon.";
    feedback.style.color = "var(--accent)";
    form.reset();
  });
}

if (yearLabel) {
  yearLabel.textContent = new Date().getFullYear();
}
