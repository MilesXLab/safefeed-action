# Optimize project: dynamic announcements, a11y, CI, and banner scroll

## Summary

Improves performance, maintainability, accessibility, and CI reliability. Announcement banner now uses fully dynamic data (batch count, region count, brand list, and date from generation time).

## Changes

### Announcements
- **Dynamic stats**: Batch count, region count, and brand list in announcements are computed from CSV at build time; `RECALL_METADATA.coverage` uses the same region count.
- **Dynamic date**: Announcement date in title/body uses generation time (PST) instead of a fixed string.
- **Placeholders**: All announcement text is driven from `csv_to_js.py` via `{batch_count}`, `{region_count}`, `{brand_list_en}`, `{date_en}`, `{date_zh}`.

### Banner
- **Scroll fix**: Restart scroll animation after `renderAnnouncement()` injects content so the banner scrolls reliably in all browsers.

### Frontend
- **Search**: Prebuilt index (exact + series), input debounce; faster and more consistent results.
- **I18N**: Expanded `REASON_MAP` and `COUNTRY_FLAGS`; data-driven `ANNOUNCEMENTS` with I18N fallback.
- **A11y**: `sr-only` labels, `aria-live`/`role` on results, dialog attributes, `prefers-reduced-motion` for animations.

### CI
- **sync-data**: Concurrency group to avoid overlapping runs; Python 3.10; pre-commit `final_deployment_check` step.
- **.gitignore**: `PRE_DEPLOYMENT_REPORT.md`, `fix_links_temp.csv`.

### Scripts
- **Paths**: Relative paths in `append_new_batches.py` and `fix_links.py` (no hardcoded absolutes).
- **deduplicate_csv.py**: Uses `DictReader`/`DictWriter`; file-existence check; shebang and docstring.
- **archive_and_sync.py**: Creates archive dir if missing; clearer exception handling.
- **final_deployment_check.py**: Docstring and series/speculative logic fixes.

## Testing

- `python csv_to_js.py` regenerates `js/data.js` with dynamic announcement and metadata.
- Open index locally; confirm announcement banner scrolls and shows current date and counts.
