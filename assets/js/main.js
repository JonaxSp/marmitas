/* Marmitas Fit do Zero ao Negócio — interações leves.
   Sem contadores regressivos, sem escassez artificial. */
(function () {
  "use strict";

  // Ano atual no rodapé
  var ano = document.getElementById("ano");
  if (ano) { ano.textContent = String(new Date().getFullYear()); }

  // Botão fixo no celular: aparece depois da primeira dobra
  var sticky = document.getElementById("stickyCta");
  var hero = document.querySelector(".hero");
  if (sticky && hero && "IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      var fora = !entries[0].isIntersecting;
      sticky.setAttribute("aria-hidden", fora ? "false" : "true");
      sticky.style.opacity = fora ? "1" : "0";
      sticky.style.pointerEvents = fora ? "auto" : "none";
      sticky.style.transition = "opacity .25s ease";
    }, { rootMargin: "-40% 0px 0px 0px" });
    obs.observe(hero);
  }

  // Rolagem suave para o topo nos links de compra é desnecessária:
  // os botões abrem o checkout em outra página.
})();
