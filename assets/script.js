/* ============================================================
   Negrett Cabelos — interações
   ============================================================ */

// Link único de agendamento (Booksy). Trocar aqui se necessário.
const BOOKING_URL = "https://booksy.com/pt-br/211337_negrett-cabelos_saloes-de-beleza_1016889_sao-jose-do-rio-preto";

// ============================================================
// Trustindex — avaliações do Google que se atualizam sozinhas.
// Cole aqui o ID do widget (o trecho depois de "loader.js?").
// Ex.: const TRUSTINDEX_WIDGET_ID = "111fa111950c622dern267v531";
// Enquanto estiver vazio (""), o site mostra os depoimentos fixos abaixo.
// ============================================================
const TRUSTINDEX_WIDGET_ID = "4f67ae0779ac7394a236214a4a7";

document.querySelectorAll("[data-booking]").forEach((el) => {
  el.setAttribute("href", BOOKING_URL);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

/* ---------- Serviços ---------- */
const SERVICES = [
  {
    title: "Corte especializado em cabelos com curvatura",
    tag: "curvatura", icon: "scissors",
    desc: "Corte que respeita o movimento natural do fio, com higienização e finalização completa. Definido no atendimento, após a avaliação da curvatura e uma conversa entre especialista e cliente.",
    price: "180", duration: "1h10",
  },
  {
    title: "Corte + Tratamento Completo",
    tag: "tratamento", icon: "sparkle",
    desc: "Corte especializado em curvatura com cuidado extra: higienização, tratamento nutritivo, finalização e secagem. Ideal para sair com o cabelo cortado, tratado e finalizado de uma vez.",
    price: "270", duration: "1h30",
  },
  {
    title: "Corte + Ritual Deva Curl",
    tag: "tratamento", icon: "drop",
    desc: "Ritual em quatro etapas: higienização (low/no poo), hidratação, corte e finalização. Indicado para cabelos porosos, ressecados ou descoloridos, que pedem mais nutrição.",
    price: "290", duration: "1h40",
  },
  {
    title: "Ritual Arvensis",
    tag: "tratamento", icon: "drop",
    desc: "Tratamento de nutrição com a linha Arvensis, escolhida conforme a necessidade do cabelo. Devolve maciez, brilho e definição à curvatura.",
    price: "160", duration: "1h",
  },
  {
    title: "Corte Taperedcut",
    tag: "curvatura", icon: "scissors",
    desc: "Mais volume e comprimento no topo, com as laterais e a nuca gradualmente mais baixas. Inclui higienização e finalização.",
    price: "190", duration: "1h20",
  },
  {
    title: "Corte Black Power",
    tag: "curvatura", icon: "afro",
    desc: "Valoriza o volume e o formato do cabelo crespo em sua forma mais autêntica e cheia de atitude. Inclui higienização e finalização. O valor varia conforme o tamanho e o volume do cabelo.",
    price: "120", priceFrom: true, duration: "1h",
  },
  {
    title: "Manutenção do Pixie",
    tag: "curvatura", icon: "scissors",
    desc: "Manutenção do corte curto (pixie) para manter o formato e o caimento sempre em dia.",
    price: "120", duration: "50min",
  },
  {
    title: "Corte + Nu dreads",
    tag: "curvatura", icon: "afro",
    desc: "Corte afro curto com finalização em nudreds, criando textura e um acabamento cheio de personalidade. Inclui higienização e finalização.",
    price: "110", duration: "45min",
  },
  {
    title: "Corte Masculino",
    tag: "masc", icon: "scissors",
    desc: "Corte masculino simples. Cabelo médio, com finalização ou risco tem valor adicional. Inclui higienização.",
    price: "80", priceFrom: true, duration: "45min",
  },
  {
    title: "Corte + Barba",
    tag: "masc", icon: "scissors",
    desc: "Corte de cabelo + barba aparada e alinhada. Inclui higienização e finalização.",
    price: null, duration: "1h",
  },
  {
    title: "Higienização e finalização",
    tag: "tratamento", icon: "drop",
    desc: "Lavagem e finalização completa, para realçar a definição e o brilho da sua curvatura.",
    price: "120", duration: "40min",
  },
];

const TAG_LABEL = { curvatura: "Curvatura", tratamento: "Tratamento", masc: "Masculino" };

const ICONS = {
  scissors: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4 8.1 15.9M14.5 12.5 20 20M8.1 8.1 12 12"/>',
  sparkle: '<path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18"/>',
  drop: '<path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
  afro: '<path d="M5 12a7 7 0 0 1 14 0"/><path d="M4 12h16v2a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"/><path d="M9 18v3M12 18v3M15 18v3"/>',
};

function serviceCard(s) {
  const priceHTML = s.price
    ? `<span class="price">${s.priceFrom ? '<small>a partir de</small> ' : ''}R$ ${s.price}</span>`
    : `<span class="price" style="font-size:.95rem">Sob consulta</span>`;
  return `
    <article class="card reveal">
      <div class="card__top">
        <svg class="card__icon" viewBox="0 0 24 24" fill="none" stroke="var(--terracota-dark)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[s.icon] || ICONS.scissors}</svg>
        <span class="tag tag--${s.tag}">${TAG_LABEL[s.tag]}</span>
      </div>
      <h3>${s.title}</h3>
      <p class="card__desc">${s.desc}</p>
      <div class="card__meta">
        ${priceHTML}
        <span class="duration">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
          ${s.duration}
        </span>
      </div>
      <a href="${BOOKING_URL}" target="_blank" rel="noopener" class="btn btn--ghost btn--block">Agendar este serviço</a>
    </article>`;
}

const grid = document.getElementById("servicesGrid");
if (grid) grid.innerHTML = SERVICES.map(serviceCard).join("");

/* ---------- Depoimentos (Google) ---------- */
const REVIEWS = [
  { name: "Nathalia", text: "Resultado sempre incrível! Saio de lá me sentindo outra pessoa, com o cabelo lindo e definido." },
  { name: "Larice", text: "O Negrett é sempre muito atencioso, ótimo profissional! Entende exatamente o que o meu cabelo precisa." },
  { name: "Duda", text: "Atendimento incrível, me senti super à vontade do início ao fim. Recomendo demais!" },
  { name: "Milena", text: "Atendimento sensacional, deixou meu cabelo perfeito. Já virei cliente fiel." },
  { name: "Bianca", text: "Especialista de verdade em cacho e crespo. Finalmente encontrei um lugar que respeita a minha curvatura." },
  { name: "Rafael", text: "Melhor corte que já fiz. Profissional atencioso, ambiente acolhedor e resultado impecável." },
];

function initials(name) { return name.trim().charAt(0).toUpperCase(); }
function reviewCard(r) {
  return `
    <article class="review reveal">
      <div class="stars">★★★★★</div>
      <p>“${r.text}”</p>
      <div class="review__author">
        <div class="review__avatar">${initials(r.name)}</div>
        <div>
          <b>${r.name}</b>
          <span>Avaliação no Google</span>
        </div>
      </div>
    </article>`;
}
const rGrid = document.getElementById("reviewsGrid");
if (rGrid) rGrid.innerHTML = REVIEWS.map(reviewCard).join("");

// Trustindex: se o ID estiver configurado, carrega o widget ao vivo e
// esconde os depoimentos fixos (fallback). Sem ID, mantém o fallback.
const tiMount = document.getElementById("tiWidget");
if (TRUSTINDEX_WIDGET_ID && tiMount) {
  const s = document.createElement("script");
  s.src = "https://cdn.trustindex.io/loader.js?" + TRUSTINDEX_WIDGET_ID;
  s.defer = true;
  s.async = true;
  tiMount.appendChild(s);
  if (rGrid) rGrid.style.display = "none";

  // Rede de segurança: se o widget do Trustindex não renderizar
  // (ex.: domínio ainda não liberado, ou visualização em localhost),
  // os depoimentos fixos voltam para a seção nunca ficar vazia.
  setTimeout(() => {
    const rendered =
      tiMount.querySelector(".ti-widget, iframe, [class*='trustindex']") ||
      tiMount.innerText.trim().length > 40;
    if (!rendered && rGrid) rGrid.style.display = "";
  }, 5000);
} else if (tiMount) {
  tiMount.style.display = "none";
}

/* ---------- Horário de funcionamento ---------- */
/* Ajuste os horários reais aqui. dow: 0=Domingo ... 6=Sábado */
const HOURS = [
  { dow: 1, label: "Segunda", value: "09:00 – 19:00" },
  { dow: 2, label: "Terça",   value: "09:00 – 19:00" },
  { dow: 3, label: "Quarta",  value: "09:00 – 19:00" },
  { dow: 4, label: "Quinta",  value: "09:00 – 19:00" },
  { dow: 5, label: "Sexta",   value: "09:00 – 19:00" },
  { dow: 6, label: "Sábado",  value: "09:00 – 18:00" },
  { dow: 0, label: "Domingo", value: "Fechado" },
];
const hoursList = document.getElementById("hoursList");
if (hoursList) {
  const today = new Date().getDay();
  hoursList.innerHTML = HOURS.map(
    (h) => `<li class="${h.dow === today ? "today" : ""}"><b>${h.label}${h.dow === today ? " · hoje" : ""}</b><span>${h.value}</span></li>`
  ).join("");
}

/* ---------- Ano no rodapé ---------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Menu mobile ---------- */
const header = document.getElementById("header");
const toggle = document.getElementById("navToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  header.querySelectorAll(".nav a, .header-cta a").forEach((a) =>
    a.addEventListener("click", () => {
      header.classList.remove("nav-open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    })
  );
}

/* ---------- Header sombra ao rolar ---------- */
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Sticky CTA mobile (mostra após o hero) ---------- */
const mobileCta = document.getElementById("mobileCta");
const hero = document.getElementById("inicio");
if (mobileCta && hero && "IntersectionObserver" in window) {
  const ob = new IntersectionObserver(
    ([e]) => mobileCta.classList.toggle("show", !e.isIntersecting),
    { threshold: 0, rootMargin: "-70px 0px 0px 0px" }
  );
  ob.observe(hero);
}

/* ---------- Reveal on scroll ---------- */
if ("IntersectionObserver" in window) {
  const revObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  const observeReveals = () =>
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => revObserver.observe(el));
  observeReveals();
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}
