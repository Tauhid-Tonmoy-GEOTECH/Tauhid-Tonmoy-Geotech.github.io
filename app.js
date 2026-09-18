(function () {
  const C = window.CONTENT;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const cite = (s) => esc(s).replace(/\[(\d+)\]/g, '<a href="#ref-$1" aria-label="Reference $1">[$1]</a>');
  const vis = (arr) => (arr || []).filter((x) => x.show !== false);
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmt = (ym) => {
    if (!ym || ym === "present") return "Present";
    const [y, m] = ym.split("-");
    return m ? `${MONTHS[+m - 1]} ${y}` : y;
  };

  // simple bindings
  document.querySelectorAll("[data-bind]").forEach((el) => (el.textContent = C[el.dataset.bind] || ""));
  document.querySelectorAll("[data-src]").forEach((el) => {
    if (C[el.dataset.src]) el.src = C[el.dataset.src]; else el.remove();
  });
  $("year").textContent = new Date().getFullYear();

  // years of experience, computed so it never goes stale
  const [sy, sm] = C.careerStart.split("-").map(Number);
  const now = new Date();
  const years = Math.floor((now.getFullYear() * 12 + now.getMonth() - (sy * 12 + sm - 1)) / 12);
  $("facts").textContent = `${years}+ years in practice across investigation, liquefaction assessment and foundation design.`;

  // actions
  const acts = [];
  if (C.contact.email) acts.push(`<a class="btn primary" href="mailto:${esc(C.contact.email)}">Email me</a>`);
  if (C.cv) acts.push(`<a class="btn" href="${esc(C.cv)}" download>Download CV</a>`);
  $("actions").innerHTML = acts.join("");

  // competencies
  $("competencyList").innerHTML = vis(C.competencies)
    .map((c) => `<article><h3>${esc(c.title)}</h3><p>${cite(c.text)}</p></article>`).join("");

  // software
  $("softwareList").innerHTML = (C.software || [])
    .map((g) => `<dt>${esc(g.group)}</dt><dd>${g.items.map(esc).join(", ")}</dd>`).join("");

  // experience
  $("experienceList").innerHTML = vis(C.experience).map((e) => `
    <li>
      <div class="when">${fmt(e.from)} – ${fmt(e.to)}</div>
      <div>
        <h3>${esc(e.role)}</h3>
        <p class="org">${esc(e.org)}${e.place ? ", " + esc(e.place) : ""}</p>
        <ul>${(e.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>
    </li>`).join("");

  // projects + filter
  const projects = vis(C.projects);
  const tags = ["All", ...new Set(projects.flatMap((p) => p.tags || []))];
  const renderProjects = (tag) => {
    $("projectList").innerHTML = projects
      .filter((p) => tag === "All" || (p.tags || []).includes(tag))
      .map((p) => `<li><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p><span class="tags">${(p.tags || []).map(esc).join(", ")}</span></li>`)
      .join("");
  };
  $("filters").innerHTML = tags.map((t, i) => `<button type="button" aria-pressed="${i === 0}" data-tag="${esc(t)}">${esc(t)}</button>`).join("");
  $("filters").addEventListener("click", (ev) => {
    const b = ev.target.closest("button"); if (!b) return;
    $("filters").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    renderProjects(b.dataset.tag);
  });
  renderProjects("All");

  // research + publications (section hidden unless something is visible)
  const res = vis(C.research), pubs = vis(C.publications);
  if (res.length || pubs.length) {
    $("research").hidden = false;
    $("researchList").innerHTML = res.map((r) => `<li><h3>${esc(r.title)}</h3><p>${esc(r.text)}${r.status ? " (" + esc(r.status) + ")" : ""}</p></li>`).join("");
    $("pubList").innerHTML = pubs.map((p) => `<li>${esc(p.text)}</li>`).join("");
  }

  // education
  $("educationList").innerHTML = vis(C.education)
    .map((e) => `<li><h3>${esc(e.degree)}</h3><p>${esc(e.org)}, ${esc(e.from)}–${esc(e.to)}</p></li>`).join("");

  // references
  if ((C.references || []).length) {
    $("refList").innerHTML = C.references.map((r, i) => `<li id="ref-${i + 1}">${esc(r)}</li>`).join("");
  } else $("references").remove();

  // contact
  const k = C.contact, items = [];
  if (k.email) items.push(`<li><a href="mailto:${esc(k.email)}">${esc(k.email)}</a></li>`);
  if (k.phone) items.push(`<li><a href="tel:${esc(k.phone.replace(/\s/g, ""))}">${esc(k.phone)}</a></li>`);
  [["linkedin", "LinkedIn"], ["researchgate", "ResearchGate"], ["scholar", "Google Scholar"]].forEach(([key, label]) => {
    if (k[key]) items.push(`<li><a href="${esc(k[key])}" rel="noopener" target="_blank">${label}</a></li>`);
  });
  $("contactList").innerHTML = items.join("");

  // borehole depth ticks (14 px per metre, 0–30 m)
  let t = "";
  for (let d = 0; d <= 30; d += 5) {
    const y = 30 + d * 14;
    t += `<line x1="34" y1="${y}" x2="40" y2="${y}"/><text x="30" y="${y + 3.5}" text-anchor="end">${d}</text>`;
  }
  $("ticks").innerHTML = t;
})();
