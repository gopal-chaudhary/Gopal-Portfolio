// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const repoName = process.env.GITHUB_REPOSITORY?.split("/").pop();
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true" && repoName;

export default defineConfig({
  nitro: isGithubPagesBuild ? false : undefined,
  vite: {
    base: isGithubPagesBuild ? `/${repoName}/` : "/",
  },
  tanstackStart: {
    router: {
      basepath: isGithubPagesBuild ? `/${repoName}` : undefined,
    },
    prerender: isGithubPagesBuild
      ? {
          enabled: true,
          crawlLinks: false,
        }
      : undefined,
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
