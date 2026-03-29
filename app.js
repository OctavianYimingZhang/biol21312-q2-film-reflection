const content = window.SITE_CONTENT;

function renderHero() {
  const title = document.getElementById("hero-title");
  const intro = document.getElementById("hero-intro");
  const lensPanel = document.getElementById("lens-panel");

  if (!title || !intro || !lensPanel) return;

  title.textContent = content.hero.title;
  intro.textContent = content.hero.intro;

  function applyTab(tab) {
    document.body.dataset.lens = tab.key;
    lensPanel.innerHTML = `
      <div class="hero-film-tabs" id="hero-film-tabs"></div>
      <div class="hero-film-card">
        <h2>${tab.title}</h2>
        <p>${tab.body}</p>
        ${tab.note ? `<div class="hero-film-note">${tab.note}</div>` : ""}
      </div>
    `;

    const tabBar = document.getElementById("hero-film-tabs");
    content.hero.filmTabs.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "film-role-button";
      button.innerHTML = `<strong>${item.label}</strong>`;
      const active = item.key === tab.key;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
      button.addEventListener("click", () => applyTab(item));
      tabBar.appendChild(button);
    });
  }

  applyTab(content.hero.filmTabs[0]);
}

function renderVideoModule() {
  const title = document.getElementById("video-title");
  const caption = document.getElementById("video-caption");
  const note = document.getElementById("video-note");
  const shell = document.getElementById("video-shell");

  if (!title || !caption || !note || !shell) return;

  title.textContent = content.video.title;
  caption.textContent = content.video.caption;
  note.textContent = content.video.note;

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
    return;
  }

  shell.innerHTML = `
    <div class="video-placeholder">
      <div class="video-placeholder-copy">
        <span class="video-kicker">${content.video.placeholderTitle}</span>
        <h3>${content.video.title}</h3>
        <p>${content.video.placeholderText}</p>
        <code class="embed-code">${content.video.placeholderCode}</code>
      </div>
      <div class="play-pulse" aria-hidden="true"></div>
    </div>
  `;
}

function renderDiscussion() {
  const heading = document.getElementById("discussion-title");
  const intro = document.getElementById("discussion-intro");
  const menu = document.getElementById("discussion-menu");
  const stage = document.getElementById("discussion-stage");
  if (!heading || !intro || !menu || !stage) return;

  heading.textContent = "When does representing illness remain legitimate?";
  intro.textContent = content.discussion.intro;

  function renderView(tab) {
    stage.innerHTML = "";
    const view = document.createElement("div");
    view.className = "discussion-view";
    const summary = Array.isArray(tab.summary)
      ? tab.summary.map((item) => `<p>${item}</p>`).join("")
      : `<p>${tab.summary}</p>`;
    view.innerHTML = `
      <p class="eyebrow">${tab.label}</p>
      <h3>${tab.title}</h3>
      <div class="discussion-copy">${summary}</div>
    `;
    stage.appendChild(view);
  }

  content.discussion.tabs.forEach((tab, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "discussion-tab";
    button.textContent = tab.label;
    if (index === 0) button.classList.add("active");
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", index === 0 ? "true" : "false");
    button.addEventListener("click", () => {
      menu.querySelectorAll(".discussion-tab").forEach((node) => {
        node.classList.remove("active");
        node.setAttribute("aria-selected", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");
      renderView(tab);
    });
    menu.appendChild(button);
  });

  renderView(content.discussion.tabs[0]);
}

function renderVerdict() {
  const verdictText = document.getElementById("verdict-text");
  const verdictNote = document.getElementById("verdict-note");
  const rankingBlock = document.getElementById("ranking-block");
  if (!verdictText || !verdictNote || !rankingBlock) return;

  verdictText.textContent = content.verdict.text;
  verdictNote.textContent = content.verdict.note;

  content.verdict.ranking.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "ranking-card";
    if (index === 0) card.classList.add("open");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "ranking-toggle";
    button.innerHTML = `
      <span>
        <strong>${item.title}</strong>
        <small>${item.line}</small>
      </span>
      <span class="marker" aria-hidden="true">${index === 0 ? "−" : "+"}</span>
    `;

    const reason = document.createElement("div");
    reason.className = "ranking-reason";
    reason.innerHTML = `<p>${item.reason}</p>`;

    button.addEventListener("click", () => {
      const isOpen = card.classList.contains("open");
      rankingBlock.querySelectorAll(".ranking-card").forEach((node) => {
        node.classList.remove("open");
        const marker = node.querySelector(".marker");
        if (marker) marker.textContent = "+";
      });
      if (!isOpen) {
        card.classList.add("open");
        const marker = card.querySelector(".marker");
        if (marker) marker.textContent = "−";
      }
    });

    card.appendChild(button);
    card.appendChild(reason);
    rankingBlock.appendChild(card);
  });
}

function renderReferencesPage() {
  const list = document.getElementById("references-list");
  if (!list) return;

  content.references.forEach((entry) => {
    const article = document.createElement("article");
    article.className = "references-entry";
    article.innerHTML = `
      <h2>${entry.heading}</h2>
      <p>${entry.body}</p>
    `;
    list.appendChild(article);
  });
}

function setActiveNavLink() {
  const links = [...document.querySelectorAll(".top-nav-links a[href^='#']")];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (!links.length || !sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", isCurrent);
        });
      });
    },
    { rootMargin: "-40% 0px -45% 0px", threshold: 0.18 }
  );

  sections.forEach((section) => observer.observe(section));
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
    { threshold: 0.14 }
  );

  targets.forEach((target) => observer.observe(target));
}

renderHero();
renderVideoModule();
renderDiscussion();
renderVerdict();
renderReferencesPage();
setActiveNavLink();
revealOnScroll();
