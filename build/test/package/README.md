# Package Check Script

## Overview

The `checkPackage.sh` script validates correct functionality across **ESM, CJS, and browser contexts**. It ensures the package works consistently across different module formats and environments. Running this script before publishing the npm package or as part of a CI/CD pipeline is highly recommended.

## Prerequisites

- **Zsh** (ensure you are running the script in a Zsh-compatible shell)
- **Node.js & npm** (installed globally)
- Ensure the package has been built before running the script:

  ```sh
  npm run build
  ```

- Make sure the script is executable:

  ```sh
  chmod +x build/test/package/checkPackage.sh
  ```

## Running the Script

Instead of calling the script directly, use the command defined in the root `package.json`:

```sh
npm run check-package
```

This ensures that all dependencies and environment setups are correctly handled.

## Reminders

- The `dist` directory and its compiled contents must be generated at the root of the project by the build process.
- `npm install` must be run at the root level.
