# Myorg

## Commands

This monorepo uses Nx for task orchestration. All commands are run from the root via `pnpm <script>`. These scripts handle common workflows across apps in `apps/*` and libs in `libs/*`. Human developers can use them for local development, while AI agents (e.g., in containerized environments) can leverage them for automated checks and builds. Note: Commands like `dev` enable the Nx Terminal UI (TUI) by default for interactive use; others disable it for plain console output suitable for agents or CI.

- `pnpm dev`: Starts watch mode for all apps using the Nx TUI. Ideal for human developers during interactive coding sessions. Agents should avoid this unless equipped with tools for handling interactive browser-based development.

- `pnpm build`: Builds all buildable targets (e.g., apps) to console output. Use for production builds or validation in both human and agent workflows.

- `pnpm test`: Runs all unit tests to console. Suitable for quick verification by humans or iterative testing by agents.

- `pnpm e2e`: Executes all end-to-end tests to console. Best after builds; useful for humans in local testing or agents in final validation.

- `pnpm typecheck`: Performs type checking across all projects to console. A fast check for type safety, handy for both humans and agents during development.

- `pnpm lint`: Runs lint checks on all projects to console. Ensures code style consistency; run frequently by humans or agents.

- `pnpm format:check`: Checks formatting of all source files against Prettier rules. Non-destructive; use to identify issues before writing fixes.

- `pnpm format:write`: Formats all source files in place using Prettier. Apply this before commits or as part of agent workflows to auto-fix formatting.

- `pnpm check:quick`: Combines typecheck and lint in parallel to console. A lightweight, iterative check for code quality—perfect for human debugging or agent loops during code generation/modification.

- `pnpm check:full`: Runs format:write first, then typecheck, lint, build, test, and e2e in parallel to console. Comprehensive validation for final checks; ideal for humans before pushes or agents confirming task completion.

- `pnpm reset`: Clears the Nx cache and daemon. Use for debugging cache-related issues in local or CI environments by both humans and agents.

## Nx Plugins and Generators

You can use `npx nx list` to get a list of installed plugins and generators. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
