# Personal website — setup and updating

## One-time setup (about 10 minutes, free)
1. Create a free account at https://github.com (e.g. username `tonmoy-geo`).
2. Click **New repository**. Name it exactly `USERNAME.github.io` (your username). Set it to **Public** and click **Create**.
3. Click **uploading an existing file**. Drag in everything from this folder, including the `assets` folder, then click **Commit changes**.
4. Go to **Settings → Pages**. Under *Branch*, choose `main` and `/ (root)`, then click **Save**.
5. After 1–2 minutes the site is live at `https://USERNAME.github.io`.

## Updating (no coding)
- Open `content.js` on GitHub and click the pencil icon. Edit the text and click **Commit changes**. The site updates in about a minute.
- **Add a project:** copy one `{ title: ... show: true },` block, paste it below, and edit it.
- **Hide something:** set `show: false`.
- **Show the Research section:** set `show: true` on the research items.
- **Add a CV:** upload `cv.pdf` into `assets/`, then set `cv: "assets/cv.pdf"`.
- **Change the photo:** upload a new `assets/photo.jpg` with the same name.
- If the page goes blank after an edit, a quote or comma is missing. Open the file history on GitHub to compare with the previous version.

## Preview locally
Double-click `index.html`. It works offline, but fonts need internet.
