# Zepee — landing page

The landing page for **[Zepee](https://zepee.com)**.

Zepee turns any website into a video and screenshots, automatically — no screen
recording or editing. Give it a website link, tell it what to show, and it clicks
through your live site like a real visitor, then hands you a video plus screenshots
ready to post on Product Hunt, X, or your own site.

This is the marketing / waitlist site at [zepee.com](https://zepee.com) — a small
static site built with **Vite + Tailwind CSS v4** and hosted on **Netlify** (which
also captures the waitlist emails).

## Develop

```bash
pnpm install
pnpm dev        # local dev server with hot reload
pnpm build      # production build → dist/
pnpm preview    # preview the production build
```

## Layout

```
index.html      # the page
src/main.js     # entry — imports the CSS and handles the waitlist form
src/style.css   # Tailwind import + custom styles
public/         # static assets served as-is (favicon, screenshots)
```

## Waitlist

Both email forms post to Netlify Forms (`name="waitlist"`). On submit they save the
email and flip to an inline thank-you — no page reload.

## License

[MIT](LICENSE) © Zepee
