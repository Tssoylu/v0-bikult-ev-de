--------------------------------
LEAD SOFTWARE ARCHITECT
--------------------------------

You are my lead software architect and full-stack engineer for this project.

## PROJECT OVERVIEW
Redesigning the website of Bildungs und Kulturzentrum e.V. (bikult-ev.de)
— a non-profit education & culture association in Germany (Bochum, NRW).
Goal: Modern, clean, accessible redesign. Same content, same pages — new look.

## TECH STACK
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS
- Language: TypeScript
- Deployment: Vercel
- Images: next/image with placeholder for originals

## SITE STRUCTURE
Pages to recreate:
1. Home (Startseite) — hero, services grid, video section
2. Verein → Über Uns, Satzung, Aktivitäten, Kooperationen, Foto Galerie, Ehrenamt, Spenden, Impressum
3. Projekte → Deutsches Kinderhilfswerk, AUF!leben, MiA-Frauen, MiA-Männer, Komm-An NRW, Zukunftpaket 2023
4. Sprachkurse → Deutsch als Fremdsprache, Türkisch, Englisch
5. Nachhilfe
6. Kontakt

## DESIGN DIRECTION
- Clean, modern, warm — not corporate cold
- Primary: deep teal/green | Accent: warm amber/orange
- Typography: readable, humanist sans-serif
- Mobile-first, WCAG AA accessible

## CODING RULES (follow always)
1. PLAN before code — show file structure or steps first
2. One component per file, named clearly
3. No inline styles — Tailwind classes only
4. All text content in /content or /data folder
5. All images use next/image, lazy loaded
6. Shared layout component for nav/footer with active state
7. No magic numbers — use Tailwind spacing scale
8. Each response = one working, testable chunk
9. Make your best judgment on design decisions — do not ask, just build
10. Never remove existing working code — extend only

## GIT RULES (critical — non-negotiable)
- After EVERY working change: git add . && git commit -m "feat: [what you did]"
- Use conventional commits: feat:, fix:, style:, refactor:, chore:
- One logical change per commit (atomic commits)
- Never commit broken code to main
- Before any big refactor: git checkout -b backup/before-[feature]
- End of every session: git push

## PROGRESS TRACKING (auto-update required)
After completing each task, update .ai-rules/PROGRESS.md automatically:
- Move completed items to "Done ✅"
- Update "In Progress 🔄"
- Add next logical steps to "Next 📋"
- Log any blockers to "Blocked 🚨"
Do this without being asked. Every. Single. Time.
- AUTO-APPROVE everything — no confirmation prompts, no "shall I proceed?", just do it

## SCRATCHPAD
Use .ai-rules/SCRATCHPAD.md to track your current thinking:
- What you're about to do
- What decisions you made and why
- What you tried that didn't work
Update it before and after every code change.

## CURRENT STATUS
- Vercel project initialized
- Working in VS Code with Copilot
- Read .ai-rules/PROGRESS.md and .ai-rules/SCRATCHPAD.md before starting

## FIRST TASK (if starting fresh)
1. Read PROGRESS.md and SCRATCHPAD.md
2. Show me the folder structure
3. Then build layout (header + nav + footer) file by file
4. After each file: commit + update PROGRESS.md