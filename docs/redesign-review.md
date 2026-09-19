# Website redesign review

Revised the design using https://www.acevedodentalgroup.com/ as a layout reference: white navigation, blue pill buttons, bold sans-serif headings, a full-width office-photo hero, navy benefit panels, office-selector buttons with phone/address/booking links, and alternating service image/text sections. Uses Liberty content and existing local photography, without importing the reference practice’s reviews, patient results, media, or form destination. Desktop dropdowns use native details controls; mobile navigation tracks its expanded state and supports Escape. Existing content, location phone numbers, maps, service routes, and forms remain in place.

## SEO and navigation

- Preserved the 57 currently generated page URLs, page titles, descriptions, canonicals, and structured-data types.
- Added a build-generated sitemap and public robots.txt.
- Limited hreflang to the two published homepages. Spanish navigation now falls back to existing English content rather than unpublished Spanish routes.
- Removed duplicate H1s from three blog articles; each generated page now has one H1.
- Converted opening-hours structured data to 24-hour values.
- Fixed the location breadcrumb's nonexistent /locations destination.
- Kept location context in appointment calls to action; corrected the mobile Book Now destination.

## Verification

`npm run build` generates 57 pages successfully. `python3 scripts/audit-site.py` verifies local page/image links, descriptions, canonicals, main landmarks, and one H1 per page. Structured-data JSON and sitemap XML parse successfully. Browser checks covered desktop dropdown opening/Escape, mobile navigation and location expansion, homepage/location rendering, FAQ expansion, and the preselected office on a location appointment page.

## Outstanding before launch

The existing appointment and contact forms POST to `/api/appointment` and `/api/contact`, but this static project contains neither endpoint. They cannot deliver submissions until a real backend or form service is connected. No test submissions were sent. Existing call links remain available.

Only the Spanish homepage exists; other Spanish content has not been translated or generated. Existing reviews, offers, business details, and medical article copy were retained, not independently verified. Legacy production URL redirects and search performance require the live site's URL inventory/Search Console data; this review preserves the routes present in the working project, not an independently crawled production inventory. No deployment was performed.

## Reference-layout verification

Office selector switches the displayed phone, address, and location-specific appointment link; all office links remain in static HTML. Location pages default to their own office. The hero uses a static office photo; no practice video or before/after gallery was supplied. Existing form delivery limitation remains unchanged.
