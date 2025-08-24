import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_ULfkcpxa.mjs';
import { manifest } from './manifest_CIxu7c_F.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/boarding.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/how-to-adopt.astro.mjs');
const _page4 = () => import('./pages/piggies.astro.mjs');
const _page5 = () => import('./pages/surrender.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.12.0_@types+node@24.0.14_jiti@2.4.2_lightningcss@1.30.1_rollup@4.45.1_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/boarding.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/how-to-adopt.astro", _page3],
    ["src/pages/piggies.astro", _page4],
    ["src/pages/surrender.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7cedf0c6-ffe9-4f29-b34f-88adce37a11c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
