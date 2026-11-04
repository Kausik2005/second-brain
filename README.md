# Second Brain

A personal knowledge base that runs entirely in your browser. Capture ideas, things you learn, projects and tasks, link notes together with `[[Title]]`, and review them from a home dashboard.

**Live site:** https://kausik2005.github.io/second-brain/

## Using it

- **Capture:** type in the top bar and press Enter. With no prefix the capture goes to the Inbox. Start with `t:` for a task, `p:` for a project or `l:` for something you learned. Add `#tags` anywhere. Press `/` to focus the bar.
- **Inbox:** open a capture and file it as an Idea, Learning, Project or Task.
- **Notes:** support `## headings`, `- lists`, `- [ ] checklists`, `**bold**`, links and `#tags`. Learning notes have a source, tasks have a due date and a project, and projects show their tasks with progress.
- **Links:** `[[Note title]]` links two notes. Each note lists the notes that link to it, and renaming a note updates links to it.
- **Install:** on a phone, use "Add to Home Screen". The app also works offline.

## Where your notes are stored

Notes are saved in your browser's IndexedDB on the device you use. Nothing is sent to a server, and this repository contains only the app, none of your notes.

That means:

- Notes don't sync between devices or browsers. Use **Export backup** and **Import backup** on Home to move them.
- Clearing site data for this site deletes your notes. Export a backup regularly.
- Importing merges by note: a note in the file replaces the local copy only if it was edited more recently.

## Files

- `index.html` — the whole app (HTML, CSS and JavaScript, no build step)
- `sw.js` — service worker for offline use
- `manifest.webmanifest`, `icon.svg` — install metadata and icon

## Running locally

Any static file server works, for example:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.
