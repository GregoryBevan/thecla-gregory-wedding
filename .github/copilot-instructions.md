# Wedding website project guidance

## Working flow with Gregory

- Propose the next modification clearly before making changes, and keep each issue isolated in its own branch.
- Create a new branch for each new issue only when Gregory confirms the previous branch is merged and the next issue is ready to start.
- Use the branch naming convention: `feat/#<issue_number>-<description>`, `chore/#<issue_number>-<description>`, or `fix/#<issue_number>-<description>`.
- Stage the work for the active issue on that branch before presenting it back for review.
- Do not start a new issue branch until the current one has been merged by Gregory.
- Use a gitmoji-based commit message when committing staged work, following the format: `type(#issue_number): <gitmoji> <short description>`.
- Use the number of the exact issue being worked, not the parent umbrella issue. For the current responsive layout work, use issue `#2`.
- Example commit messages: `feat(#2): ✨ create mobile-first layout skeleton`, `fix(#2): 🩹 improve header contrast`, `chore(#3): 🧹 add project guidance rules`.

## Design guidance

- Keep the visual direction elegant, warm, and romantic without becoming ornate or cluttered.
- Default to a mobile-first layout. Start with small-screen styles, then enhance with `min-width` breakpoints for tablet and desktop.
- Prefer semantic HTML landmarks and a clear heading hierarchy for every page or section.
- Use accessible contrast, touch-friendly controls, and obvious call-to-action buttons.
- Favor CSS Grid and Flexbox with relative units such as `rem`, `%`, `clamp()`, and viewport units.
- Keep content easy to personalize: do not hardcode fictional wedding logistics unless the issue explicitly asks for them.
- Reuse shared design tokens and spacing patterns instead of introducing one-off values.
- Add JavaScript only when a feature truly needs behavior; static content and layout should stay simple.

## Documentation guidance

- Keep `README.md` user-facing and focused on project overview plus setup/run basics.
- Put development-only checks (for example contrast verification commands) in contributor-focused docs such as `CONTRIBUTING.md` or `docs/accessibility.md`.
- If a development-only check is important for day-to-day work, keep only a brief pointer in `README.md` and link to the full instructions in the contributor docs.

