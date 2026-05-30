/* ==========================
   ANO AUTOMÁTICO NO FOOTER
========================== */
document.getElementById("ano").textContent = new Date().getFullYear();

/* ==========================
   DARK MODE COM LOCALSTORAGE
========================== */
const toggleTheme = document.getElementById("toggle-theme");
const body = document.body;

// carregar preferência salva
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleTheme.textContent = "☀️";
}

toggleTheme.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleTheme.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleTheme.textContent = "🌙";
  }
});

/* ==========================
   INTERSECTION OBSERVER
========================== */
const sections = document.querySelectorAll("section, .projeto");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2
  }
);

sections.forEach(section => {
  section.classList.add("reveal");
  observer.observe(section);
});

/* ==========================
   MICROINTERAÇÕES AVANÇADAS
========================== */

// efeito ripple nos botões
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", e => {
    const ripple = document.createElement("span");
    ripple.style.position = "absolute";
    ripple.style.width = "10px";
    ripple.style.height = "10px";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255,255,255,0.6)";
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";

    button.style.position = "relative";
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

/* ==========================
   ANIMAÇÃO RIPPLE
========================== */
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
  to {
    transform: scale(15);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
