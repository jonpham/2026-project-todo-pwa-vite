import * as dotenv from "dotenv";
import * as path from "path";

// Load .env from repo root (three levels up from apps/todo-pwa/infra/)
// When run standalone via `pulumi up`, this makes CLOUDFLARE_API_TOKEN available
// without needing to prefix the command. When driven by infra/index.ts, the
// token is already in the environment and this is a no-op.
dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

import * as pulumi from "@pulumi/pulumi";
import * as cloudflare from "@pulumi/cloudflare";

const config = new pulumi.Config();

// Required secrets — set with:
//   pulumi config set cloudflareAccountId <id> --secret
//   pulumi config set cloudflareZoneId <zone-id-for-witty-m.com> --secret
const accountId = config.requireSecret("cloudflareAccountId");

// Cloudflare Pages project (standalone repo version)
const pagesProject = new cloudflare.PagesProject("todo-pwa-vite", {
  accountId: accountId,
  name: "todo-pwa-vite",
  productionBranch: "main",
});

export const projectName = pagesProject.name;
export const pagesUrl = pagesProject.subdomain.apply((s) => `https://${s}`);

// Note: Custom domain binding is configured in the monorepo's Pulumi stack
// to use the main todo-pwa project at app.todo.witty-m.com
