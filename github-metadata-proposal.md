# Proposed GitHub repo metadata

Not applied. Review, then run these yourself. Each command only changes the description, homepage and topics.

Notes:
- Topics must be lowercase, with hyphens, 50 characters or fewer.
- WaNonprofitConnect gets no homepage: its deployed URLs carry a product name that isn't public yet.
- Set Steadygate's homepage only after https://mesmoraz.github.io/steadygate/ loads (it returned 404 on 2026-10-25).
- Pinning repos on the profile has no API. Do it by hand: profile page, "Customize your pins", pick Steadygate, WaNonprofitConnect and nativeloc.

## steadygate

Current description is good, so it stays. Adds a homepage and topics.

```bash
gh repo edit Mesmoraz/steadygate \
  --homepage "https://mesmoraz.github.io/steadygate/" \
  --add-topic llm-evaluation --add-topic release-gate --add-topic flaky-tests \
  --add-topic regression-testing --add-topic ci --add-topic statistics \
  --add-topic ai-reliability --add-topic python
```

## WaNonprofitConnect

Current description ("Name TBD alpha: app, API, roadmap") hides the stack and the testing.

```bash
gh repo edit Mesmoraz/WaNonprofitConnect \
  --description "A platform for Washington nonprofits: React + TypeScript app, .NET API with SignalR, IRS and OSPI public data, Playwright tests, Azure deploys via GitHub Actions." \
  --add-topic react --add-topic typescript --add-topic dotnet --add-topic signalr \
  --add-topic maplibre --add-topic playwright --add-topic github-actions \
  --add-topic azure --add-topic nonprofit --add-topic open-data
```

## nativeloc

Current description is accurate. Adds the live demo and topics.

```bash
gh repo edit Mesmoraz/nativeloc \
  --homepage "https://mesmoraz.github.io/nativeloc/" \
  --add-topic localization --add-topic i18n --add-topic translation \
  --add-topic android --add-topic linux --add-topic typescript --add-topic docker
```

## Mesmoraz.github.io

No description today, and the topics include "blog", which the site no longer has.

```bash
gh repo edit Mesmoraz/Mesmoraz.github.io \
  --description "My portfolio: AI reliability, test engineering and forward deployed work." \
  --homepage "https://mesmoraz.github.io" \
  --remove-topic blog \
  --add-topic portfolio --add-topic sdet --add-topic ai-reliability
```

## Mesmoraz (profile README repo)

Optional. The current description ("Config files for my GitHub profile.") is fine, since GitHub shows the README, not the description.

```bash
gh repo edit Mesmoraz/Mesmoraz \
  --homepage "https://mesmoraz.github.io"
```
