# sunodejs

[![CI/CD](https://img.shields.io/badge/CI%2FCD-pending-yellow)](https://github.com/actions) [![Tests](https://img.shields.io/badge/tests-pending-yellow)](...) [![Coverage](https://img.shields.io/badge/coverage-45%25-orange)](...) [![NPM Version](https://img.shields.io/npm/v/sunodejs.svg)](https://www.npmjs.com/package/sunodejs) [![License](https://img.shields.io/npm/l/sunodejs.svg)](./LICENSE)

I need a standalone project that allows me to use Node modules:

Node core modules in a web bundle (such as jsdom and http-proxy-agent) use modules like net, tls, and child_process, which do not exist in a web environment. If you are building for the browser (e.g., electron-renderer or pure web), these modules cannot be bundled.

https://copilot.microsoft.com/shares/ERtZcJDHywUVJwKcR6BwL

This is due to apps like Electron, which strictly separate the Node and web parts.

