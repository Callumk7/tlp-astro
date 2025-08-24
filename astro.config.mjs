// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Yrsa",
        cssVariable: "--font-yrsa",
        weights: ["400", "700"],
      },
      {
        provider: fontProviders.google(),
        name: "Playfair",
        cssVariable: "--font-playfair",
        weights: ["700", "800"],
      },
      {
        provider: fontProviders.google(),
        name: "Oxygen",
        cssVariable: "--font-oxygen",
        weights: ["300", "400", "700"],
      },
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
    ],
  },

  adapter: vercel(),
});

