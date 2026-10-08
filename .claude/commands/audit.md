# Command: `/audit`

## Purpose
Executes a comprehensive, full-spectrum architectural and quality audit of the HighEd repository.

## Execution Procedure
1. **Architectural Review:**
   - Audit directory layout against Next.js 16 conventions.
   - Detect duplicate or obsolete components.
   - Verify server/client component boundaries.
2. **Codebase Health Check:**
   - Run type checking: `npx tsc --noEmit`.
   - Run linting: `npm run lint`.
3. **Automated Suite Run:**
   - Execute test harness: `python tests/run_all_tests.py`.
4. **Subsystem Verification:**
   - **UI/UX:** Brand token alignment, typography sizing, button pill standards.
   - **SEO:** Single H1 presence, metadata definitions, canonical tags, schema markup.
   - **a11y:** Focus rings, contrast levels, modal focus trapping.
   - **Performance:** Image attributes, lazy loading, font swap settings.
   - **Security:** Secret leakage check, input validation in lead routes.

## Output Format
Categorize all findings into standard severity levels:
- `[CRITICAL]` Immediate blocker (broken build, runtime crash, data loss, security exposure)
- `[HIGH]` Serious regression (broken lead intake, missing H1, mobile overflow)
- `[MEDIUM]` Non-critical defect (suboptimal contrast, missing alt tag, redundant re-render)
- `[LOW]` Polish / enhancement (formatting, minor spacing inconsistency)

For every issue report:
- **Location:** File path & line number
- **Problem:** Clear technical explanation
- **Impact:** Why it matters to users or business
- **Recommended Fix:** Exact drop-in solution
