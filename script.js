const bindFaqToggles = () => {
  document.querySelectorAll(".faq-question").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      trigger.closest(".faq-item")?.classList.toggle("is-open");
    });
  });
};

bindFaqToggles();
