const header = document.getElementById("header");
const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelectorAll(".nav__link");

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Fundo do cabeçalho ao rolar
const updateHeader = () => header.classList.toggle("header--scrolled", window.scrollY > 20);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

// Menu mobile
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  })
);

// Destaca o link da seção visível
const sections = document.querySelectorAll("main section[id]");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) =>
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((section) => sectionObserver.observe(section));

// Animação de entrada + barras de skill
const revealTargets = document.querySelectorAll(
  ".about, .timeline-grid, .skills, .project, .contact"
);
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

// Editor do hero: digita o código abaixo, com as cores de cada pedaço
// [texto, classe] — "k" palavra-chave, "v" variável, "p" propriedade, "s" texto, "b" booleano/número, "c" comentário
const CODIGO = [
  [["const ", "k"], ["lucas", "v"], [" = {", ""]],
  [["  cargo", "p"], [": ", ""], ['"Full Stack Júnior"', "s"], [",", ""]],
  [["  local", "p"], [": ", ""], ['"Campinas-SP"', "s"], [",", ""]],
  [["  stack", "p"], [": [", ""], ['"React"', "s"], [", ", ""], ['"Next.js"', "s"], [",", ""]],
  [["          ", ""], ['"TypeScript"', "s"], [", ", ""], ['"Supabase"', "s"], ["],", ""]],
  [["  sistemasEmProducao", "p"], [": ", ""], ["1", "b"], [",", ""]],
  [["  disponivel", "p"], [": ", ""], ["true", "b"], [",", ""]],
  [["};", ""]],
  [["", ""]],
  [["// pronto para o próximo desafio 🚀", "c"]],
];

const typed = document.getElementById("typed");
const segmentos = CODIGO.flatMap((linha, i) => [
  ...linha,
  ...(i < CODIGO.length - 1 ? [["\n", ""]] : []),
]);

const escrever = (texto, classe) => {
  const span = document.createElement("span");
  if (classe) span.className = `tok-${classe}`;
  span.textContent = texto;
  typed.appendChild(span);
  return span;
};

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  segmentos.forEach(([texto, classe]) => escrever(texto, classe));
} else {
  let seg = 0;
  let pos = 0;
  let span = null;
  const digitar = () => {
    if (seg >= segmentos.length) return;
    const [texto, classe] = segmentos[seg];
    if (!span) span = escrever("", classe);
    // Array.from não quebra emojis no meio
    const letras = Array.from(texto);
    span.textContent += letras[pos++] ?? "";
    if (pos >= letras.length) {
      seg++;
      pos = 0;
      span = null;
    }
    setTimeout(digitar, texto === "\n" ? 180 : 28 + Math.random() * 40);
  };
  setTimeout(digitar, 600);
}
