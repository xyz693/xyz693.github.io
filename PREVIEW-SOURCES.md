# Portfolio preview sources

Singing with Sprouts continues to load its published project URL.

The other five pages were restored from IndexNov2026.zip to make the existing planet previews and Open links work immediately:

- Mercury: SiteGenerator.html
- Earth: TideClock.html
- Mars: TMinusKSC.html
- Jupiter: Webtrek.html and webtrek-lcars.css
- Saturn: Silver.html

These are bundled snapshots, not automatic mirrors of other repositories. When a project has its own published URL, replace its file value in both index.html and portfolio-index.html. The shared preview controller uses that URL automatically. Do not replace the iframe sandbox with allow-same-origin.

External services still supply launch schedules, tide predictions, map tiles, and some libraries. Their availability is independent of whether the preview page loads. WebTrek does not probe endpoints until explicitly requested in the full project.

The restored countdown handles unavailable WebGL and renders external launch names as text.

Draft PR #3 proposes a separately hosted Mars destination. Do not merge that change until LaunchCountdown Pages is enabled and verified; until then the bundled TMinusKSC.html is the working destination.
