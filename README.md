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

Notes are saved in your browser's IndexedDB on each device. This repository contains only the app, none of your notes.

### Sync between devices (optional)

Sync keeps your phone and laptop in step through a secret GitHub Gist on your own account:

1. [Create a classic GitHub token](https://github.com/settings/tokens/new?scopes=gist&description=Second%20Brain%20sync) with only the **gist** scope.
2. On Home, under **Sync between devices**, paste the token and choose a passphrase. The first device asks you to confirm it.
3. On each other device, enter the same token and passphrase.

How it works:

- Notes are encrypted in the browser with AES-256-GCM, using a key derived from your passphrase (PBKDF2-SHA256, 310,000 iterations). The gist only ever holds ciphertext, and the passphrase never leaves your device.
- The passphrase can't be recovered. If you forget it, turn sync off, delete the gist named `second-brain.sync.json`, and set sync up again (your notes stay on each device).
- Devices merge note by note: the most recent edit wins, and deletions sync too.
- Sync runs when the app opens, a few seconds after you edit, when you return to the tab, when you come back online, and every 2 minutes. **Sync now** runs it immediately.
- The token and the derived key are stored in this browser's IndexedDB. Use a token with only the gist scope, and give it an expiry you're comfortable with.

### Backups

**Export backup** on Home downloads every note as JSON, and **Import backup** merges a file back in (a note in the file replaces the local copy only if it was edited more recently). Clearing site data for this site deletes the notes on that device, so export now and then, or keep sync on.

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
