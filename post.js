(function () {
  const C = window.CONTENT;
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fmtDate = (d) => { if (!d) return ""; const [y, m, day] = String(d).split("-"); return (day ? +day + " " : "") + (m ? MONTHS[+m - 1] + " " : "") + y; };

  $("brand").textContent = C.shortName || C.name;
  $("footName").textContent = C.name;
  $("year").textContent = new Date().getFullYear();

  // small Markdown renderer: headings, paragraphs, lists, quotes, tables, images, links, bold, italic, code
  const inline = (s) => esc(s)
    .replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  function md(src) {
    const lines = src.replace(/\r/g, "").split("\n");
    let out = "", i = 0;
    while (i < lines.length) {
      const l = lines[i];
      if (!l.trim()) { i++; continue; }
      let m;
      if ((m = l.match(/^(#{1,4})\s+(.*)/))) { const n = Math.min(m[1].length + 1, 4); out += `<h${n}>${inline(m[2])}</h${n}>`; i++; continue; }
      if (/^>\s?/.test(l)) { let q = []; while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, "")); out += `<blockquote><p>${inline(q.join(" "))}</p></blockquote>`; continue; }
      if (/^\s*[-*]\s+/.test(l)) { let it = []; while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) it.push(lines[i++].replace(/^\s*[-*]\s+/, "")); out += "<ul>" + it.map((x) => `<li>${inline(x)}</li>`).join("") + "</ul>"; continue; }
      if (/^\s*\d+[.)]\s+/.test(l)) { let it = []; while (i < lines.length && /^\s*\d+[.)]\s+/.test(lines[i])) it.push(lines[i++].replace(/^\s*\d+[.)]\s+/, "")); out += "<ol>" + it.map((x) => `<li>${inline(x)}</li>`).join("") + "</ol>"; continue; }
      if (/^\|/.test(l)) {
        let rows = []; while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
        rows = rows.filter((r) => !/^\|\s*:?-+/.test(r)).map((r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
        out += "<table>" + rows.map((r, k) => "<tr>" + r.map((c) => k ? `<td>${inline(c)}</td>` : `<th>${inline(c)}</th>`).join("") + "</tr>").join("") + "</table>";
        continue;
      }
      let p = []; while (i < lines.length && lines[i].trim() && !/^(#{1,4}\s|>|\s*[-*]\s|\s*\d+[.)]\s|\|)/.test(lines[i])) p.push(lines[i++]);
      out += `<p>${inline(p.join(" "))}</p>`;
    }
    return out;
  }

  const slug = new URLSearchParams(location.search).get("p") || "";
  const post = (C.blog || []).find((b) => b.slug === slug && b.show !== false);
  if (!post || !/^[\w-]+$/.test(slug)) {
    $("title").textContent = "Article not found";
    $("body").innerHTML = '<p>This article is not published. Check that its slug in content.js matches the file name and that show is set to true.</p>';
    return;
  }
  document.title = `${post.title} | ${C.name}`;
  const desc = document.querySelector('meta[name="description"]'); if (desc) desc.content = post.summary || "";
  $("title").textContent = post.title;
  $("meta").textContent = `${C.name} | ${fmtDate(post.date)}${(post.tags || []).length ? " | " + post.tags.join(", ") : ""}`;
  fetch(slug + ".md", { cache: "no-cache" })
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then((t) => { $("body").innerHTML = md(t); })
    .catch(() => { $("body").innerHTML = `<p>The file <code>${esc(slug)}.md</code> could not be loaded. Check that it has been uploaded with exactly this name.</p>`; });

  const ld = document.createElement("script"); ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, datePublished: post.date, description: post.summary, author: { "@type": "Person", name: C.name, url: "https://tauhid-tonmoy-geotech.github.io/" } });
  document.head.appendChild(ld);
})();
