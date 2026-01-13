document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  // =========================
  // LIGHT / DARK MODE
  // =========================
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      if (document.body.classList.contains("light")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
      } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // =========================
  // SCROLL SUAVE PARA PROJETOS (index.html)
  // =========================
  const btnProjetos = document.querySelector('.btn.btn-primary');
  if (btnProjetos) {
    btnProjetos.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector('#projetos');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Caso seja outro HTML, abre projetos.html
        window.location.href = "projetos.html";
      }
    });
  }

  // =========================
  // BOTÃO VOLTAR (projetos.html)
  // =========================
  const btnVoltar = document.getElementById("btn-voltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      history.back();
    });
  }
});
