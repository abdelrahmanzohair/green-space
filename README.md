# GREENSCAPE — ArabonWeb Website Template

A bilingual (Arabic RTL / English LTR), responsive static website concept for a fictional Saudi landscaping company.

**Designed by ArabonWeb — Your Vision, Our Creation.**

## Included
- `index.html` — single-page website entry point.
- `css/style.css` — responsive styling and layout.
- `js/main.js` — language switch, mobile navigation, portfolio filters, WhatsApp enquiry form and scroll reveal.
- `assets/` — reserved for your own local images and brand assets.

## Before publishing
1. Open `js/main.js`.
2. Find `CONFIG.whatsappNumber`.
3. Replace `966500000000` with the real WhatsApp number in international format using digits only (Saudi example: `9665XXXXXXXX`).
4. Replace the sample Unsplash image URLs in `index.html` and the hero background URL in `css/style.css` with licensed project photos or local images.
5. Replace the demo testimonial with a genuine client review only after receiving permission.
6. Update the page title, meta description, business details and social links to match the real business.

The portfolio photos and testimonial are explicitly illustrative. Do not present them as completed client projects or real reviews.

## Preview locally
No installation or build process is needed.
- Extract the ZIP.
- Open `index.html` in a modern browser; or
- For a local server, open the folder in VS Code and use the Live Server extension.

## Publish to GitHub
1. Create a new GitHub repository, for example `greenscape-website`.
2. Upload the contents of this folder (not the ZIP itself).
3. Ensure `index.html` is in the repository root.
4. Commit and push to the `main` branch.

## Deploy on Cloudflare Pages
1. Sign in to Cloudflare.
2. Open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the GitHub repository.
4. Framework preset: **None**.
5. Build command: leave empty.
6. Build output directory: `/` (repository root).
7. Save and deploy.

Every push to the connected branch will trigger a new deployment.

## Important notes
- This is a static front-end website. The quote form validates fields and opens WhatsApp with a prefilled message; it does not save enquiries to a database or send email.
- Set the real WhatsApp number before launch.
- If you use local images, place them in `assets/` and update their paths in the HTML/CSS.
- The demo business name GREENSCAPE and all sample copy are fictional placeholders.
- Check domain registration, hosting plan terms, privacy requirements and any applicable Saudi business requirements before accepting customer enquiries.
