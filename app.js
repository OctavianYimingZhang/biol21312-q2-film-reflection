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

/* ── Film Analyses ── */
function renderFilmAnalyses() {
  const container = document.getElementById("film-analyses");
  if (!container) return;

  content.films.forEach((film) => {
    const card = document.createElement("article");
    card.className = "film-card";
    card.dataset.film = film.key;
    card.innerHTML = `
      <h3>${film.title}</h3>
      <p>${film.body}</p>
    `;
    container.appendChild(card);
  });
}

/* ── Discussion ── */
function renderDiscussion() {
  const intro = document.getElementById("discussion-intro");
  const container = document.getElementById("discussion-sections");
  if (!intro || !container) return;

  intro.textContent = content.discussion.intro;

  content.discussion.sections.forEach((section) => {
    const block = document.createElement("article");
    block.className = "discussion-block";
    const bodyHtml = section.body.map((p) => `<p>${p}</p>`).join("");
    block.innerHTML = `
      <h3>${section.title}</h3>
      ${bodyHtml}
    `;
    container.appendChild(block);
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
