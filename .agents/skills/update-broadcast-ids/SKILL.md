---
name: update-broadcast-ids
description: Fix a broken default broadcast id. Use when a default channel shows a dead or unavailable YouTube stream and a new video id or YouTube URL is provided or needs to be found.
---

A default broadcast id is dead. Apply `docs/guides/Update-Broadcast-IDs.md` — it is the single source for this flow (the channel list JSON under `src/data/`, then `npm run build`).

Agent additions on top of the guide:

1. The new video arrives either as a bare 11-character id or as a full YouTube URL. Accept both, and never ask for one form when the other was given. Resolve a URL the way `extractYouTubeId` in `src/utils/extractYouTubeId.js` does: it reads `watch?v=`, `live/`, `youtu.be/` and `embed/` links, and `YOUTUBE_ID_PATTERN` in the same file owns the id format.
2. Confirm the new id is live before editing — the old one is usually already dead. YouTube's oEmbed endpoint answers without a key: `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>&format=json` returns 200 with the channel name for a good id, 404 for a dead one.
3. After the build passes, show the diff and a commit subject in the guide's format, then stop. Never commit, push or open a pull request unless asked.
