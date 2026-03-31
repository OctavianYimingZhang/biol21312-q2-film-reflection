const content = window.SITE_CONTENT;

function renderHero() {
  const title = document.getElementById("hero-title");
  const intro = document.getElementById("hero-intro");
  const bridge = document.getElementById("hero-bridge");

  if (!title || !intro || !bridge) return;

  title.textContent = content.hero.title;
  intro.textContent = content.hero.intro;
  bridge.textContent = content.hero.bridge;
}

function renderFilmAnalyses() {
  const container = document.getElementById("film-analyses");
  if (!container) return;

  content.films.forEach((film) => {
    const section = document.createElement("div");
    section.className = "film-section";
    section.innerHTML = `
      <h3>${film.title}</h3>
      <p>${film.body}</p>
    `;
    container.appendChild(section);
  });
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

function renderDiscussion() {
  const intro = document.getElementById("discussion-intro");
  const container = document.getElementById("discussion-sections");
  if (!intro || !container) return;

  intro.textContent = content.discussion.intro;

  content.discussion.sections.forEach((section) => {
    const div = document.createElement("div");
    div.className = "discussion-section";
    const bodyHtml = section.body.map((p) => `<p>${p}</p>`).join("");
    div.innerHTML = `
      <h3>${section.title}</h3>
      ${bodyHtml}
    `;
    container.appendChild(div);
  });
}

function renderVerdict() {
  const container = document.getElementById("verdict-content");
  if (!container) return;

  let html = `<p>${content.verdict.text}</p>`;

  content.verdict.films.forEach((film) => {
    html += `
      <div class="verdict-film">
        <h3>${film.title}</h3>
        <p>${film.assessment}</p>
      </div>
    `;
  });

  container.innerHTML = html;
}

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

function revealOnScroll() {
  const targets = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  targets.forEach((target) => observer.observe(target));
}

renderHero();
renderFilmAnalyses();
renderVideoModule();
renderDiscussion();
renderVerdict();
renderReferencesPage();
revealOnScroll();
