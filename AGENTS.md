# AGENTS.md

This document outlines commands for AI agents operating in this monorepo. Agents should run commands from the root via `pnpm <script>`, assuming a containerized, non-interactive environment. Focus on console-output commands for easy log parsing. Avoid long-running or interactive modes unless specified. All dependencies are in the root `package.json`; install with `pnpm install` if needed.

## Commands

These scripts use Nx to target apps in `apps/*` and libs in `libs/*`. Most disable the Nx TUI for plain console output. Use them in iterative loops (e.g., code changes → quick checks) or final validations.

- `pnpm build`: Builds all buildable targets to console. Use for generating artifacts or validating compilability.

- `pnpm test`: Runs all unit tests to console. Integrate into iteration for functional verification.

- `pnpm e2e`: Executes all end-to-end tests to console. Run after builds for integration checks.

- `pnpm typecheck`: Type checks all projects to console. Quick pass for type errors post-code changes.

- `pnpm lint`: Lints all projects to console. Enforce style and catch potential issues early.

- `pnpm format:check`: Checks formatting without changes. Scan for inconsistencies.

- `pnpm format:write`: Auto-formats all files. Apply before other checks to avoid false failures.

- `pnpm check:quick`: Parallel typecheck + lint to console. For fast, iterative code quality loops during task execution.

- `pnpm check:full`: Formats files first, then parallel typecheck, lint, build, test, and e2e to console. Use for thorough end-of-task validation before marking as done.

- `pnpm reset`: Resets Nx cache. Invoke if cache bugs cause inconsistent results.

**Important:** Avoid `pnpm dev` as it starts an interactive watch mode with Nx TUI, unsuitable for non-interactive agents. Only use if your agent has interactive browser tools for handling live development sessions.
