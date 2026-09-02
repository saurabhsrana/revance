# Loyalty Cucumber Automation Framework

Lean **Cucumber + Playwright** framework for Revance loyalty flows.

## In-scope features

| Feature | Tags | Command |
|---------|------|---------|
| `features/welcome.feature` | `@welcome`, `@smoke`, `@regression` | `npm run test:welcome` |
| `features/completeprofile.feature` | `@completeprofile`, `@loyaltyProfile` | `npm run test:completeprofile` |
| `features/apiProfileEnrollment.feature` | `@apiEnrollment`, `@loyaltyProfile` | `npm run test:api-enrollment` |

Run all three:

```bash
npm test                    # default TEST_ENV=dev
cross-env TEST_ENV=qa npm test
```

## Quick start

```bash
npm install
npx playwright install chromium
cross-env TEST_ENV=qa npm test
npm run report:generate
npm run report:open
npm run traceability:generate
```

## Environment

| Variable | Purpose |
|----------|---------|
| `TEST_ENV` | `dev` (default), `qa`, or `prod` — selects `src/config/env.*.ts` |
| `SIGNUP_OTP` | OTP override for signup/API enrollment (default `112233` in features) |
| `HEADED=true` | Run browser headed locally |
| `HEADLESS=true` | Force headless |
| `PW_DEFAULT_TIMEOUT` | Override page default timeout (ms) |

## Reporting

- **Allure:** `reports/allure-results` → `npm run report:generate` → `reports/allure-report`
- **Open report (required):** `npm run report:open` — serves via local HTTP so step details render correctly
- **Do not** double-click `index.html` — the multi-file report needs a web server on Windows
- **One-shot:** `npm run test:report` — clean → test (QA) → generate → open
- **Cucumber HTML:** `reports/report.html`
- **Traceability:** `npm run traceability:generate` → `reports/traceability-matrix.md`

On failure, hooks attach **screenshot**, **Playwright trace** (`.zip`), **console logs**, and **network logs** to Allure at the scenario level.

Each scenario shows expandable **Given / When / Then** steps in the Allure test detail view.

## CI

GitHub Actions workflow `.github/workflows/ci.yml`:

1. Runs all 3 features (`TEST_ENV=qa`)
2. Generates Allure + traceability matrix (`if: always()`)
3. Uploads artifacts and deploys Allure to GitHub Pages on `main`

## Structure

```
features/           # Gherkin + step-definitions
src/
  hooks/            # World + Before/After (tracing, Allure)
  pages/            # POM (Welcome, Signup, Home + components)
  api/              # loyaltyEnrollment.ts
  config/           # env.dev / env.qa / env.prod
scripts/            # traceability matrix generator
```

See **`framework.md`** for full architecture documentation.
