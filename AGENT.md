# AGENT.md

## Build/Test/Lint Commands

- **Development**: `pnpm dev` or `npm run dev`
- **Build**: `pnpm build` or `npm run build`
- **Preview**: `pnpm preview` or `npm run preview`
- **Typecheck**: `npx tsc --noEmit` (uses strict Astro config)

## Code Style Guidelines

- **Package manager**: Use pnpm (pnpm-lock.yaml present)
- **Imports**: Relative imports for local files, absolute from node_modules
- **Types**: Strict TypeScript with explicit interfaces/types, export types with `type` keyword
- **Formatting**: Prettier with Astro and Tailwind plugins, consistent 2-space indentation
- **Components**: .astro for pages/layouts, Migrating from old react components in the src/components/react folder to new .astro components
- **File structure**: Pages in `src/pages/`, components in `src/components/`, utils in `src/lib/`
- **Styling**: Tailwind CSS with custom design tokens (sage, plum, teal colors)
- **Props**: Use interface for component props, destructure in function signature
- **Error handling**: Optional chaining for object access, array length checks before indexing
- **Naming**: PascalCase for components, camelCase for variables/functions, kebab-case for files
- **CSS variables**: Custom font variables (--font-yrsa, --font-playfair, --font-oxygen, --font-inter)

## Framework Notes

- Astro 5.x with React integration for interactive components
- Notion API integration for CMS functionality
- Cloudinary for image handling
