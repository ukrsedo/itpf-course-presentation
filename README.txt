IT Procurement Foundations — 84-slide single presentation

Open index.html.

Navigation:
- Left/Right arrows and Page Up/Page Down change slides.
- In full-screen presentation mode, the bottom control remains visible with previous/next buttons and the current slide number.
- Changing slides no longer closes full-screen mode because full screen is applied to the presentation shell, not to the individual slide iframe.
- Full-screen buttons embedded in early slides are routed to the presentation shell.

Course Assistant integration
- Open index.html from Good Spending or GitHub Pages.
- Use "Explain this slide" in the main toolbar or fullscreen navigation.
- The presentation sends only the current slide number to:
  https://itpf-course-assistant.ukrsedo-e2e.workers.dev/explain-slide
- Explanations are cached in the browser for the current session.
- Local file previews are not permitted by the Worker's CORS policy.
