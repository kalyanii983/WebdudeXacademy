# WebdudeX IT Skills Academy Website

React + Vite + Tailwind CSS + Framer Motion + React Router. SEO-friendly, responsive, lead-focused.

## Run
```
npm install
npm run dev        # development
npm run build      # production build -> dist/
npm run preview    # preview the build
```

## Deploy
Upload the `dist/` folder to Netlify, Vercel, Cloudflare Pages or any static host. It is a single-page app, so the host must redirect all routes to `index.html` (`public/_redirects` handles Netlify/Cloudflare; on Vercel add a rewrite). Then replace `https://www.example.com` in `public/sitemap.xml` and `public/robots.txt` with your real domain.

## What to edit
| Change | File |
|---|---|
| Phone, email, address, WhatsApp number & message | `src/data/site.js` (`site`) |
| Google Maps location | `src/data/site.js` (`mapsEmbed`, `mapsLink` use the address automatically) |
| Social media links | `src/data/site.js` (`site.social`, fill `url`) |
| Course information | `src/data/site.js` (`courses`) |
| Batch timings | `src/data/site.js` (`batches`) |
| Enquiry form backend | `src/lib/submit.js` (currently a simulated success) |
| SEO titles/descriptions | each file in `src/pages/` and `index.html` (also update structured data there) |

## Notes
- No fees, durations, certifications, testimonials or statistics are shown, by design. Add them in `courses` when confirmed.
- Add an Open Graph image: put `og-image.jpg` in `public/` and add an `og:image` meta tag in `index.html`.
