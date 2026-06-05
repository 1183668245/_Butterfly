const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

let total = 30 * 60;
const countdown = document.getElementById("countdown");

setInterval(() => {
  const m = String(Math.floor(total / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  countdown.textContent = `${m}:${s}`;
  total = total <= 0 ? 30 * 60 : total - 1;
}, 1000);