const logBody = document.querySelector("[data-log-body]");
const faqItems = document.querySelectorAll(".faq-item");

const symbols = ["0", "1", "A", "B", "C", "D", "E", "F"];
const modules = ["core", "net", "auth", "relay", "cache", "worker", "infra"];

const randomItem = (list) => list[Math.floor(Math.random() * list.length)];

const randomString = (length) =>
  Array.from({ length }, () => randomItem(symbols)).join("");

const buildLine = () => {
  const time = new Date().toLocaleTimeString("de-DE", { hour12: false });
  const module = randomItem(modules).padEnd(6, " ");
  const payload = randomString(20 + Math.floor(Math.random() * 24));
  return `${time} | ${module} | ${payload}`;
};

const bootstrapLines = Array.from({ length: 12 }, buildLine);

const renderLogs = (lines) => {
  if (!logBody) return;
  logBody.innerHTML = lines.map((line) => `<p>${line}</p>`).join("");
};

renderLogs(bootstrapLines);

let currentLines = [...bootstrapLines];

setInterval(() => {
  currentLines = [...currentLines.slice(1), buildLine()];
  renderLogs(currentLines);
}, 3000);

faqItems.forEach((item) => {
  const trigger = item.querySelector(".faq-question");
  if (!trigger) return;
  trigger.addEventListener("click", () => {
    item.classList.toggle("is-open");
  });
});
