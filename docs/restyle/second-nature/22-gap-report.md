# Gap report — second-nature — 2026-08-10

## Summary
- Variables missing: formal Figma variable collections (deck is PDF)
- Components missing: finalized logo lockup, peptide product photography, filter taxonomy
- Variants/states missing: full cart checkout, auth
- Patterns missing: product PDP (out of scope)
- Blockers for in-scope pages: none under stub-and-list

## Variables
| Role needed | Suggested name | Type | Priority |
| --- | --- | --- | --- |
| Formal spacing scale | `space/*` | number | P2 |
| Focus ring token | `focus/ring` | color | P1 — stubbed as ink outline |

## Components
| Role | Suggested name | Priority | Stub? |
| --- | --- | --- | --- |
| Final wordmark | `Logo/Primary` | P0 | Custom SVG from logo refs |
| Peptide icons set | `Symbol/Peptide/*` | P1 | Geometric marks |
| Filter drawer | `Shop/Filters` | P1 | Stub panel |
| Cart line items | `Cart/Line` | P1 | Stub drawer |

## Compromises accepted
| Decision | Risk | Revisit when |
| --- | --- | --- |
| Synthesized tokens from PDF slides | Drift vs future Figma | Figma library exists |
| Shop sells Second Nature formulas (not Usal merch) | IA same, catalog new | Product list finalized |
| Neon yellow `pollen` (`#E5F97A`) as brand accent | Confirmed | — |

## Ready-for-Figma checklist
- [ ] Publish variable collections matching `10-target-tokens.md`
- [ ] Draw final Second Nature wordmark
- [ ] Product photography system
- [ ] Component set: Nav, Button, ProductTile, CartDrawer, Accordion
