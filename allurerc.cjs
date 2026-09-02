/**
 * Allure 3 config — multi-file report (required for step details on Windows).
 *
 * Do NOT use singleFile: true with the awesome plugin on Windows — it breaks
 * test detail navigation (blank page when clicking a scenario). See:
 * https://github.com/allure-framework/allure3/issues/348
 *
 * Open reports with: npm run report:open  (serves via HTTP — do not open index.html via file://)
 */
module.exports = {
  output: 'reports/allure-report',
  name: 'Loyalty Cucumber Report',
  plugins: {
    awesome: {
      options: {
        singleFile: false,
      },
    },
  },
};
