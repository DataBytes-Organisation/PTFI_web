/** @type {import('jest').Config} */
const config = {
  coverageThreshold: {
    global: {
    branches: 70,
    functions: 75,
    lines: 90,
    statements: -10,
    },
  },
};
  
module.exports = config;
