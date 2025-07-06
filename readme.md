# sunodejs

[![CI/CD](https://img.shields.io/badge/CI%2FCD-pending-yellow)](https://github.com/actions) [![Tests](https://img.shields.io/badge/tests-37%2F37%20passed-green)](...) ![Coverage](https://img.shields.io/badge/coverage-57.57%25-yellow)

I need a standalone project that allows me to use Node modules:

Node core modules in a web bundle (such as jsdom and http-proxy-agent) use modules like net, tls, and child_process, which do not exist in a web environment. If you are building for the browser (e.g., electron-renderer or pure web), these modules cannot be bundled.

https://copilot.microsoft.com/shares/ERtZcJDHywUVJwKcR6BwL

This is due to apps like Electron, which strictly separate the Node and web parts.
