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
const PALAVRAS_CODIGO = {
  en: { cargo: "role", valorCargo: "Full Stack Junior", local: "location", valorLocal: "Campinas, Brazil",
        sistemas: "systemsInProduction", disponivel: "available", comentario: "ready for the next challenge" },
  pt: { cargo: "cargo", valorCargo: "Full Stack Júnior", local: "local", valorLocal: "Campinas-SP",
        sistemas: "sistemasEmProducao", disponivel: "disponivel", comentario: "pronto para o próximo desafio" },
  es: { cargo: "puesto", valorCargo: "Full Stack Junior", local: "ubicacion", valorLocal: "Campinas, Brasil",
        sistemas: "sistemasEnProduccion", disponivel: "disponible", comentario: "listo para el próximo desafío" },
};

const CODIGO = (p) => [
  [["const ", "k"], ["lucas", "v"], [" = {", ""]],
  [[`  ${p.cargo}`, "p"], [": ", ""], [`"${p.valorCargo}"`, "s"], [",", ""]],
  [[`  ${p.local}`, "p"], [": ", ""], [`"${p.valorLocal}"`, "s"], [",", ""]],
  [["  stack", "p"], [": [", ""], ['"React"', "s"], [", ", ""], ['"Next.js"', "s"], [",", ""]],
  [["          ", ""], ['"TypeScript"', "s"], [", ", ""], ['"Supabase"', "s"], ["],", ""]],
  [[`  ${p.sistemas}`, "p"], [": ", ""], ["1", "b"], [",", ""]],
  [[`  ${p.disponivel}`, "p"], [": ", ""], ["true", "b"], [",", ""]],
  [["};", ""]],
  [["", ""]],
  [[`// ${p.comentario} 🚀`, "c"]],
];

const typed = document.getElementById("typed");
let timerDigitacao = null;

const escrever = (texto, classe) => {
  const span = document.createElement("span");
  if (classe) span.className = `tok-${classe}`;
  span.textContent = texto;
  typed.appendChild(span);
  return span;
};

// Recomeça a digitação do zero no idioma pedido
const digitarCodigo = (idioma) => {
  clearTimeout(timerDigitacao);
  typed.textContent = "";
  const linhas = CODIGO(PALAVRAS_CODIGO[idioma]);
  const segmentos = linhas.flatMap((linha, i) => [
    ...linha,
    ...(i < linhas.length - 1 ? [["\n", ""]] : []),
  ]);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    segmentos.forEach(([texto, classe]) => escrever(texto, classe));
    return;
  }

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
    timerDigitacao = setTimeout(digitar, texto === "\n" ? 180 : 28 + Math.random() * 40);
  };
  timerDigitacao = setTimeout(digitar, 600);
};

// Idiomas: o inglês é lido do próprio HTML; pt e es vêm do i18n.js (TRADUCOES)
const IDIOMAS = { en: "en", pt: "pt-BR", es: "es" };
const textosEn = {};
const elsTexto = document.querySelectorAll("[data-i18n]");
const elsAtributo = document.querySelectorAll("[data-i18n-attr]");
const botoesIdioma = document.querySelectorAll(".lang__btn");
const metaDescricao = document.querySelector('meta[name="description"]');

// data-i18n-attr="alt:chave" ou "href:chave1;download:chave2"
const paresAtributo = (el) => el.dataset.i18nAttr.split(";").map((par) => par.split(":"));

elsTexto.forEach((el) => (textosEn[el.dataset.i18n] = el.innerHTML));
elsAtributo.forEach((el) =>
  paresAtributo(el).forEach(([attr, chave]) => (textosEn[chave] = el.getAttribute(attr)))
);
textosEn["meta.title"] = document.title;
textosEn["meta.description"] = metaDescricao.content;
TRADUCOES.en = textosEn;

const aplicarIdioma = (idioma) => {
  const texto = (chave) => TRADUCOES[idioma][chave] ?? textosEn[chave];
  document.documentElement.lang = IDIOMAS[idioma];
  document.title = texto("meta.title");
  metaDescricao.content = texto("meta.description");
  elsTexto.forEach((el) => (el.innerHTML = texto(el.dataset.i18n)));
  elsAtributo.forEach((el) =>
    paresAtributo(el).forEach(([attr, chave]) => el.setAttribute(attr, texto(chave)))
  );
  botoesIdioma.forEach((btn) => btn.setAttribute("aria-pressed", btn.dataset.lang === idioma));
  digitarCodigo(idioma);
};

botoesIdioma.forEach((btn) =>
  btn.addEventListener("click", () => {
    const idioma = btn.dataset.lang;
    aplicarIdioma(idioma);
    try {
      localStorage.setItem("idioma", idioma);
    } catch {}
    // Mantém o idioma no link (?lang=pt) para poder compartilhar
    const url = new URL(location.href);
    if (idioma === "en") url.searchParams.delete("lang");
    else url.searchParams.set("lang", idioma);
    history.replaceState(null, "", url);
  })
);

// Ordem: ?lang= no link > escolha salva > inglês
let idiomaSalvo = null;
try {
  idiomaSalvo = localStorage.getItem("idioma");
} catch {}
const idiomaInicial = [new URLSearchParams(location.search).get("lang"), idiomaSalvo].find(
  (idioma) => idioma && Object.hasOwn(IDIOMAS, idioma)
) ?? "en";
aplicarIdioma(idiomaInicial);
