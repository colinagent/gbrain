# OpenBrain Fork Deltas

This branch is the thin OpenBrain integration fork of `garrytan/gbrain`.
Every OpenBrain-only delta should stay small, carry an upstream PR, and be
removed after it lands upstream and the fork rebases.

## Active Deltas

| Area | Fork commit | Upstream PR | Status |
| --- | --- | --- | --- |
| Think gather source scope | `025d060` | garrytan/gbrain#2619 | Pending upstream |
| `diagnoseEmbedding` user-provided model | `1385af6` | garrytan/gbrain#2622 | Pending upstream |
| Bootstrap `timeline_entries.event_page_id` before schema-blob replay | `2e3a41d` | garrytan/gbrain#2623 | Pending upstream |
| Postgres CJK keyword fallback | Working tree | TBD | OpenBrain local; upstream PR decision required before release |
| Dedicated expansion LLM timeout | Working tree | TBD | OpenBrain local; upstream PR decision required before release |
| macOS verify fallback preserves check exit code | Working tree | TBD | Upstreamable CI/dev ergonomics fix |
| Four-platform `openbrain-fork-*` release assets | Working tree | N/A | Fork release packaging |

## Fork Upkeep Rules

- OpenBrain-specific fixes land on `openbrain` first and should have an
  upstream PR against `garrytan/gbrain` before release unless the change is
  only release packaging for this fork.
- After upstream merges a delta, rebase `openbrain` onto upstream `master`,
  remove the delta from this ledger, and verify the behavior still holds.
- Before publishing an `openbrain-fork-*` tag, run `bun run verify`, build the
  platform binaries, and run the OpenBrain Cloud GBrain smoke suite after
  deployment.
- Do not add OpenBrain private hosts, secrets, or deployment runbooks here.
