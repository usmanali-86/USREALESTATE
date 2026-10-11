# US Real Estate Options — targeted CTA update

This is the original user-supplied React project with **only the bottom property-search CTA banner redesigned**. All other visual components and CSS rules remain intact. React Router DOM is added with one Home route (`/`), without adding any other page.

## Run

```bash
npm install
npm run dev
```

## File guide

- `index.html`: Vite HTML mounting point.
- `src/main.jsx`: `BrowserRouter`, `Routes`, and `/` Home route.
- `src/App.jsx`: Original homepage and component order (unchanged).
- `src/components/Footer.jsx`: Original footer; now imports `<PropertySearchCTA />` above footer.
- `src/components/PropertySearchCTA.jsx`: **New, editable React/JSX banner.**
- `src/components/PropertySearchCTA.css`: **New, dedicated responsive CTA styles.**
- `src/data.js`: Existing image URL (`IMG.cta`), unchanged. Replace only this URL if you want a different high-resolution house image.
- `src/styles.css`: Original website-wide CSS, unchanged; older `.cta-banner` rules remain but do not affect the new banner.

No screenshot images were pasted as the banner. Text and CTA are editable DOM elements. The house photo uses the existing Unsplash URL and requires internet to load. All old links keep their original behavior. CTA button goes to `#finder` as before.
