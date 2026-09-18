(function () {
  const C = window.CONTENT;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const cite = (s) => esc(s).replace(/\[(\d+)\]/g, '<a href="#ref-$1" aria-label="Reference $1">[$1]</a>');
  const vis = (arr) => (arr || []).filter((x) => x.show !== false);
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmtDate = (d) => {
    if (!d) return "";
    const [y, m, day] = String(d).split("-");
    return (day ? +day + " " : "") + (m ? MONTHS[+m - 1] + " " : "") + y;
  };
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
  $("summary").innerHTML = [].concat(C.summary).map((p) => `<p>${esc(p)}</p>`).join("");
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
  if (C.contact.linkedin) acts.push(`<a class="btn" href="${esc(C.contact.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`);
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
  const order = ["Foundation design", "Excavation design", "Liquefaction", "Field supervision", "Laboratory testing"];
  const used = new Set(projects.flatMap((p) => p.tags || []));
  const tags = ["All", ...order.filter((t) => used.has(t)), ...[...used].filter((t) => !order.includes(t))];
  const renderProjects = (tag) => {
    $("projectList").innerHTML = projects
      .filter((p) => tag === "All" || (p.tags || []).includes(tag))
      .map((p) => `<li><h3>${esc(p.title)}</h3>${p.sector || p.status ? `<p class="meta">${esc(p.sector || "")}${p.status ? ` <span class="status">${esc(p.status)}</span>` : ""}</p>` : ""}<p>${esc(p.text)}</p><span class="tags">${(p.tags || []).map(esc).join(", ")}</span></li>`)
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

  // blog
  const posts = vis(C.blog);
  if (posts.length) {
    $("blog").hidden = false; $("navBlog").hidden = false;
    $("blogList").innerHTML = posts.map((p) => `
      <li>
        <p class="meta">${esc(fmtDate(p.date))}${(p.tags || []).length ? " | " + p.tags.map(esc).join(", ") : ""}</p>
        <h3><a href="post.html?p=${encodeURIComponent(p.slug)}">${esc(p.title)}</a></h3>
        <p>${esc(p.summary)}</p>
        <a class="more" href="post.html?p=${encodeURIComponent(p.slug)}">Read the article</a>
      </li>`).join("");
  }

  // documents
  const docs = vis(C.documents);
  if (docs.length) {
    $("documents").hidden = false; $("navDocs").hidden = false;
    $("docList").innerHTML = docs.map((d) => `
      <li>
        <p class="meta">${esc(d.type || "Document")}${d.date ? " | " + esc(fmtDate(d.date)) : ""}</p>
        <h3>${esc(d.title)}</h3>
        <p>${esc(d.text || "")}</p>
        <a class="more" href="${esc(d.file)}" target="_blank" rel="noopener">Open PDF</a>
      </li>`).join("");
  }

  // education
  $("educationList").innerHTML = vis(C.education)
    .map((e) => `<li><h3>${esc(e.degree)}</h3><p>${esc(e.org)}, ${esc(e.from)}–${esc(e.to)}</p></li>`).join("");

  // memberships
  const mem = vis(C.memberships);
  $("member").textContent = mem.map((m) => m.name + (m.id ? " (" + m.id + ")" : "")).join("; ");
  if (!mem.length) $("member").remove();
  $("educationList").innerHTML += mem.map((m) => `<li><h3>${esc(m.name)}</h3>${m.id ? `<p>Membership no. ${esc(m.id)}</p>` : ""}</li>`).join("");

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

  // structured data for search engines (schema.org Person)
  const site = "https://tauhid-tonmoy-geotech.github.io/";
  const person = {
    "@context": "https://schema.org", "@type": "Person",
    name: C.name, alternateName: ["Tauhidul Islam Tonmoy", "Md. Tauhidul Islam Akanda"],
    jobTitle: "Geotechnical Engineer", url: site, image: site + (C.photo || ""),
    email: C.contact.email ? "mailto:" + C.contact.email : undefined,
    worksFor: { "@type": "Organization", name: (C.experience[0] || {}).org },
    address: { "@type": "PostalAddress", addressLocality: "Dhaka", addressCountry: "BD" },
    alumniOf: vis(C.education).map((e) => ({ "@type": "CollegeOrUniversity", name: e.org })),
    memberOf: vis(C.memberships).map((m) => ({ "@type": "Organization", name: "Institution of Engineers, Bangladesh" })),
    knowsAbout: ["Geotechnical engineering", "Pile foundation design", "Mat foundation design", "Liquefaction analysis",
      "Braced excavation design", "Sheet pile design", "Soil investigation", "BNBC 2020", "PLAXIS 2D", "GEO5"],
    sameAs: [C.contact.linkedin, C.contact.researchgate, C.contact.scholar].filter(Boolean)
  };
  const ld = document.createElement("script");
  ld.type = "application/ld+json"; ld.textContent = JSON.stringify(person);
  document.head.appendChild(ld);

  // borehole depth ticks (14 px per metre, 0–30 m)
  let t = "";
  for (let d = 0; d <= 30; d += 5) {
    const y = 30 + d * 14;
    t += `<line x1="34" y1="${y}" x2="40" y2="${y}"/><text x="30" y="${y + 3.5}" text-anchor="end">${d}</text>`;
  }
  $("ticks").innerHTML = t;
})();
