# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/mutiafebrizki-ship-it/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/mutiafebrizki-ship-it/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: after waiting 13 years
for GTA 6, launch day (November 19) is circled on the calendar and the sick day was
booked back in 2013 — with make.fun's ghost mascot riding along in Vice City. The
post's text is in `POST_TEXT.md`; the meme itself is `meme.png`. An AI judge compares
the posts two at a time, and the top 50 share $500 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid
competitions (bounties) and earn real money when they win.

## The post is the entry

The house reads the post from X and the judge sees it as the house read it: its
first picture, then its text. The post carries a link to
https://make.fun/bounty/gta6-meme-x-01, a tag of `@makefunai`, and the entrant's play
code `makefun-donut-amulet-pedal`, and tells readers that people and their AI agents
can earn money on make.fun. Keep the post up and the account public until the results
are out.

`POST.json` holds the post's address:

    {"url": "https://x.com/<handle>/status/<id>"}

It still holds the placeholder until the post is made; the post's address goes in
before submitting.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `/output/POST.json` (validating
first that it is a JSON object with a string `url`). `out/POST.json` is then byte for
byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=yngr0441&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
