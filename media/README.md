# media/ — demo clip + poster

Two files are referenced by `config.js`:

- `tratr_bench_livedrone_20260916.mp4` — the web cut of the 16 Sep 2026 bench run (laser OFF, take 1b).
- `tratr_bench_livedrone_20260916_poster.jpg` — the thumbnail shown before the gate (1920×1080, < 300 KB).

## Making the web cut (WSL, ffmpeg)

Source: `k9-mech/control/b5live_hover1b_20260916_phone_cut_web.mp4` (phone, ~20–30 s).
Target: 1080p H.264, faststart, ≤ 20 MB so GitHub/Vercel are happy and it starts instantly.

```
cd /mnt/d/Claude/Projects/K9-boss
ffmpeg -i k9-mech/control/b5live_hover1b_20260916_phone_cut_web.mp4 \
  -vf "scale=1920:-2,fps=30" -c:v libx264 -profile:v high -level 4.1 -preset slow -crf 24 \
  -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k -ac 2 \
  investor-site-v2/media/tratr_bench_livedrone_20260916.mp4
```

If the phone clip is portrait, add `,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:black` after `scale=-2:1080`
(i.e. `-vf "scale=-2:1080,pad=1920:1080:(ow-iw)/2:(oh-ih)/2:black,fps=30"`).

Poster from the clip (pick a frame where the head is clearly turned toward the drone, e.g. t = 8 s):

```
ffmpeg -ss 8 -i investor-site-v2/media/tratr_bench_livedrone_20260916.mp4 -frames:v 1 -q:v 3 \
  investor-site-v2/media/tratr_bench_livedrone_20260916_poster.jpg
```

## Download protection — what this is and isn't

The `<video>` has no `src` until the lead form succeeds, `controlsList="nodownload"`, no picture-in-picture,
and right-click disabled. That stops the casual viewer. A determined one can still read the file URL from the
browser's dev tools — on a static site there is no way around that. The real fix, when wanted: put the file in a
private Supabase Storage bucket and have a small Edge Function return a signed, expiring URL after the lead insert.
