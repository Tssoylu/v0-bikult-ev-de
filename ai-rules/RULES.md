# AI Coding Rules — Bikult Redesign

## Always
- Read PROGRESS.md and SCRATCHPAD.md before starting
- Plan the steps mentally, then build immediately — no confirmation needed
- One file per response (unless trivial)
- Commit after every working chunk with conventional commit message
- Update PROGRESS.md and SCRATCHPAD.md after every task automatically
- Make your best judgment on design decisions — just build

## Never
- Don't refactor unless explicitly asked
- Don't add new dependencies without mentioning it in the commit message
- Don't change working code just to fix style
- Don't ask "shall I proceed?" — just do it
- Don't hardcode secrets or API keys — use .env.local
- Don't commit broken/untested code
- Don't touch files outside the current task

## Code Style
- Tailwind classes only — no inline styles, no CSS modules
- TypeScript strict mode — no `any`
- All text content in /content folder as typed constants
- All images via next/image with width/height defined
- Component names: PascalCase — file names: kebab-case
- No magic numbers — use Tailwind spacing scale

## Git Workflow
- feat: new feature or page
- fix: bug fix
- style: visual / CSS only change
- refactor: restructure without behavior change
- chore: config, deps, tooling, .env
- Every session ends with: git push

## Response Format
1. What you built (1 sentence)
2. The code
3. Git commit message used
4. PROGRESS.md updated ✅# AI Coding Rules — Bikult Redesign

## Always
- Read PROGRESS.md and SCRATCHPAD.md before starting
- Plan the steps mentally, then build immediately — no confirmation needed
- One file per response (unless trivial)
- Commit after every working chunk with conventional commit message
- Update PROGRESS.md and SCRATCHPAD.md after every task automatically
- Make your best judgment on design decisions — just build

## Never
- Don't refactor unless explicitly asked
- Don't add new dependencies without mentioning it in the commit message
- Don't change working code just to fix style
- Don't ask "shall I proceed?" — just do it
- Don't hardcode secrets or API keys — use .env.local
- Don't commit broken/untested code
- Don't touch files outside the current task

## Code Style
- Tailwind classes only — no inline styles, no CSS modules
- TypeScript strict mode — no `any`
- All text content in /content folder as typed constants
- All images via next/image with width/height defined
- Component names: PascalCase — file names: kebab-case
- No magic numbers — use Tailwind spacing scale

## Git Workflow
- feat: new feature or page
- fix: bug fix
- style: visual / CSS only change
- refactor: restructure without behavior change
- chore: config, deps, tooling, .env
- Every session ends with: git push

## Response Format
1. What you built (1 sentence)
2. The code
3. Git commit message used
4. PROGRESS.md updated ✅