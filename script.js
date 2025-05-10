document.addEventListener("DOMContentLoaded", () => {
  // Copiar código
  document.querySelectorAll(".copy-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      const codeBlocks = card.querySelectorAll("pre code");

      let textToCopy = "";
      codeBlocks.forEach((block) => {
        textToCopy += block.innerText + "\n\n";
      });

      navigator.clipboard
        .writeText(textToCopy.trim())
        .then(() => {
          const original = button.textContent;
          button.textContent = "✅ Copiado";
          setTimeout(() => (button.textContent = original), 2000);
        })
        .catch(() => {
          alert("No se pudo copiar el código.");
        });
    });
  });

  // Mostrar botón "Volver arriba"
  const topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Fade-in al cargar
  document.body.classList.add("fade-in");

  // Transición suave entre páginas
  document.querySelectorAll("a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#") && !link.hasAttribute("target")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.remove("fade-in");
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // solo la primera vez
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".card").forEach((card) => {
    observer.observe(card);
  });
});
