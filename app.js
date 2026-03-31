const content = window.SITE_CONTENT;

/* ── Tab switching ── */
function initTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  const views = document.querySelectorAll(".tab-view");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      views.forEach((v) => {
        v.classList.remove("active");
        v.style.animation = "none";
      });

      const view = document.getElementById("view-" + target);
      if (view) {
        void view.offsetHeight;
        view.style.animation = "";
        view.classList.add("active");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* ── Overview ── */
function renderHero() {
  const title = document.getElementById("hero-title");
  const intro = document.getElementById("hero-intro");
  const bridge = document.getElementById("hero-bridge");
  if (!title || !intro || !bridge) return;

  title.textContent = content.hero.title;
  intro.textContent = content.hero.intro;
  bridge.textContent = content.hero.bridge;
}

function renderVideoModule() {
  const title = document.getElementById("video-title");
  const caption = document.getElementById("video-caption");
  const shell = document.getElementById("video-shell");
  if (!title || !caption || !shell) return;

  title.textContent = content.video.title;
  caption.textContent = content.video.caption;

  if (content.video.embedUrl) {
    shell.innerHTML = `
      <iframe
        src="${content.video.embedUrl}"
        title="Presentation video"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  }
}

/* ── Film Analyses (expandable cards) ── */
function renderFilmAnalyses() {
  const container = document.getElementById("film-analyses");
  if (!container) return;

  content.films.forEach((film, index) => {
    const card = document.createElement("article");
    card.className = "film-card";
    if (index === 0) card.classList.add("open");
    card.dataset.film = film.key;

    card.innerHTML = `
      <div class="film-card-header">
        <div>
          <h3>${film.title}</h3>
          <p class="film-card-summary">${film.summary}</p>
        </div>
        <span class="film-card-toggle">+</span>
      </div>
      <div class="film-card-body">
        <p>${film.body}</p>
      </div>
    `;

    const header = card.querySelector(".film-card-header");
    header.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");
      if (isOpen) {
        card.classList.remove("open");
      } else {
        card.classList.add("open");
      }
    });

    container.appendChild(card);
  });
}

/* ── Discussion (accordion) ── */
function renderDiscussion() {
  const intro = document.getElementById("discussion-intro");
  const container = document.getElementById("discussion-sections");
  if (!intro || !container) return;

  intro.textContent = content.discussion.intro;

  content.discussion.sections.forEach((section, index) => {
    const item = document.createElement("article");
    item.className = "accordion-item";
    if (index === 0) item.classList.add("open");

    const bodyHtml = section.body.map((p) => `<p>${p}</p>`).join("");

    item.innerHTML = `
      <div class="accordion-header">
        <h3>${section.title}</h3>
        <span class="accordion-chevron">\u25BC</span>
      </div>
      <div class="accordion-body">
        ${bodyHtml}
      </div>
    `;

    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      if (isOpen) {
        item.classList.remove("open");
      } else {
        item.classList.add("open");
      }
    });

    container.appendChild(item);
  });
}

/* ── Conclusion ── */
function renderVerdict() {
  const container = document.getElementById("verdict-content");
  if (!container) return;

  let html = `<p class="verdict-text">${content.verdict.text}</p>`;

  content.verdict.films.forEach((film) => {
    const key = film.title === "The Father" ? "father"
      : film.title === "Trainspotting" ? "trainspotting"
      : "requiem";
    html += `
      <article class="verdict-card" data-film="${key}">
        <h3>${film.title}</h3>
        <p>${film.assessment}</p>
      </article>
    `;
  });

  container.innerHTML = html;
}

/* ── References page ── */
function renderReferencesPage() {
  const list = document.getElementById("references-list");
  if (!list) return;

  content.references.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "references-entry";
    article.innerHTML = `<p>${entry.body}</p>`;
    list.appendChild(article);
  });
}

/* ── Init ── */
initTabs();
renderHero();
renderVideoModule();
renderFilmAnalyses();
renderDiscussion();
renderVerdict();
renderReferencesPage();
