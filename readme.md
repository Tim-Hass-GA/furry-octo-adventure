# UNIT TESTING

## Tech Used
Node, Javascript, Jest

Avalara Tax (Ava Tax Api)
https://developer.avalara.com/avatax/

- calc_order_total.js - initial file for calculating order total
- code_and_tests.js - initial file for testing (no test runners)

- order_total.test.js - test files for Jest tests
- sandbox.js - testing the api
- order_total.js - main function file

Added Quokka to Atom dev environment.... nice
- quokkajs.com


```

npm run watch

PASS  ./order_total.test.js
 ✓ calls the api correctly (7ms)
 ✓ Quantity promise (1ms)
 ✓ No quantity specified promise
 ✓ Checks Happy Path 1 promise
 ✓ Checks Happy Path 2 promise (1ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.092s
Ran all test suites matching /calc_order_total.js|code_and_tests.js|order_total.js|order_total.test.js|sandbox.js/i.

Active Filters: filename /calc_order_total.js|code_and_tests.js|order_total.js|order_total.test.js|sandbox.js/
› Press c to clear filters.

Watch Usage
› Press a to run all tests.
› Press f to run only failed tests.
› Press o to only run tests related to changed files.
› Press p to filter by a filename regex pattern.
› Press t to filter by a test name regex pattern.
› Press q to quit watch mode.
› Press Enter to trigger a test run.

```
