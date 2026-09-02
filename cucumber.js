const os = require('node:os');
const process = require('node:process');

const IN_SCOPE_FEATURES = [
  'features/welcome.feature',
  'features/completeprofile.feature',
  'features/apiProfileEnrollment.feature',
];

const IN_SCOPE_STEPS = [
  'features/step-definitions/welcome.steps.ts',
  'features/step-definitions/signup.steps.ts',
  'features/step-definitions/apiEnrollment.steps.ts',
];

module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    paths: IN_SCOPE_FEATURES,
    require: ['src/hooks/world.ts', 'src/hooks/hooks.ts', ...IN_SCOPE_STEPS],
    format: [
      'html:reports/report.html',
      'json:reports/cucumber-report.json',
      'allure-cucumberjs/reporter',
    ],
    formatOptions: {
      resultsDir: 'reports/allure-results',
      environmentInfo: {
        os_platform: os.platform(),
        os_release: os.release(),
        node_version: process.version,
        test_env: process.env.TEST_ENV || 'dev',
      },
    },
  },
};
