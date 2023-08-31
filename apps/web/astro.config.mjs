import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    partytown(),
    prefetch({
      selector: ["anchor-link[href]", "anchor-gradient[href]"],
    }),
    sitemap(),
    compress({
      html: true,
      css: true,
      js: true,
    }),
    critters({
      path: ["./dist"],
    }),
  ],
});
