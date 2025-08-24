import { d as decodeKey } from './chunks/astro/server_Bi9CFwpO.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B1vyMQMC.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/callum/Projects/this-little-piggy/","cacheDir":"file:///home/callum/Projects/this-little-piggy/node_modules/.astro/","outDir":"file:///home/callum/Projects/this-little-piggy/dist/","srcDir":"file:///home/callum/Projects/this-little-piggy/src/","publicDir":"file:///home/callum/Projects/this-little-piggy/public/","buildClientDir":"file:///home/callum/Projects/this-little-piggy/dist/client/","buildServerDir":"file:///home/callum/Projects/this-little-piggy/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"boarding/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/boarding","isIndex":false,"type":"page","pattern":"^\\/boarding\\/?$","segments":[[{"content":"boarding","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/boarding.astro","pathname":"/boarding","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"how-to-adopt/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/how-to-adopt","isIndex":false,"type":"page","pattern":"^\\/how-to-adopt\\/?$","segments":[[{"content":"how-to-adopt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/how-to-adopt.astro","pathname":"/how-to-adopt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"surrender/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/surrender","isIndex":false,"type":"page","pattern":"^\\/surrender\\/?$","segments":[[{"content":"surrender","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/surrender.astro","pathname":"/surrender","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.12.0_@types+node@24.0.14_jiti@2.4.2_lightningcss@1.30.1_rollup@4.45.1_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/boarding.D31B0Csh.css"}],"routeData":{"route":"/piggies","isIndex":false,"type":"page","pattern":"^\\/piggies\\/?$","segments":[[{"content":"piggies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/piggies.astro","pathname":"/piggies","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/callum/Projects/this-little-piggy/src/pages/boarding.astro",{"propagation":"none","containsHead":true}],["/home/callum/Projects/this-little-piggy/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/callum/Projects/this-little-piggy/src/pages/how-to-adopt.astro",{"propagation":"none","containsHead":true}],["/home/callum/Projects/this-little-piggy/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/callum/Projects/this-little-piggy/src/pages/piggies.astro",{"propagation":"none","containsHead":true}],["/home/callum/Projects/this-little-piggy/src/pages/surrender.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.12.0_@types+node@24.0.14_jiti@2.4.2_lightningcss@1.30.1_rollup@4.45.1_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/boarding@_@astro":"pages/boarding.astro.mjs","\u0000@astro-page:src/pages/surrender@_@astro":"pages/surrender.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/how-to-adopt@_@astro":"pages/how-to-adopt.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/piggies@_@astro":"pages/piggies.astro.mjs","/home/callum/Projects/this-little-piggy/node_modules/.pnpm/astro@5.12.0_@types+node@24.0.14_jiti@2.4.2_lightningcss@1.30.1_rollup@4.45.1_typescript@5.8.3/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BxOIR-LJ.mjs","/home/callum/Projects/this-little-piggy/node_modules/.pnpm/@unpic+placeholder@0.1.2/node_modules/@unpic/placeholder/dist/index.mjs":"chunks/index_BVcfRxua.mjs","/home/callum/Projects/this-little-piggy/node_modules/.pnpm/blurhash@2.0.5/node_modules/blurhash/dist/index.mjs":"chunks/index_CkGk45UB.mjs","\u0000@astrojs-manifest":"manifest_CIxu7c_F.mjs","/home/callum/Projects/this-little-piggy/node_modules/.pnpm/astro-cloudinary@1.3.4_astro@5.12.0_@types+node@24.0.14_jiti@2.4.2_lightningcss@1.30.1__ca7f7796a6aa1269bc55237a05a443ca/node_modules/astro-cloudinary/src/components/CldVideoPlayer.astro?astro&type=script&index=0&lang.ts":"_astro/CldVideoPlayer.astro_astro_type_script_index_0_lang.BenpXjxX.js","/home/callum/Projects/this-little-piggy/node_modules/.pnpm/astro-cloudinary@1.3.4_astro@5.12.0_@types+node@24.0.14_jiti@2.4.2_lightningcss@1.30.1__ca7f7796a6aa1269bc55237a05a443ca/node_modules/astro-cloudinary/src/components/CldImage.astro?astro&type=script&index=0&lang.ts":"_astro/CldImage.astro_astro_type_script_index_0_lang.BiyEvQB9.js","/home/callum/Projects/this-little-piggy/node_modules/.pnpm/astro-cloudinary@1.3.4_astro@5.12.0_@types+node@24.0.14_jiti@2.4.2_lightningcss@1.30.1__ca7f7796a6aa1269bc55237a05a443ca/node_modules/astro-cloudinary/src/components/CldUploadWidget.astro?astro&type=script&index=0&lang.ts":"_astro/CldUploadWidget.astro_astro_type_script_index_0_lang.bCPEqopK.js","/home/callum/Projects/this-little-piggy/src/components/react/surrender-accordion":"_astro/surrender-accordion.Dre5KXzM.js","@astrojs/react/client.js":"_astro/client.DHYUtGoQ.js","/home/callum/Projects/this-little-piggy/src/components/react/navigation":"_astro/navigation.C3G6GXlb.js","/home/callum/Projects/this-little-piggy/src/components/ui/button":"_astro/button.Bjz9WSFZ.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/callum/Projects/this-little-piggy/node_modules/.pnpm/astro-cloudinary@1.3.4_astro@5.12.0_@types+node@24.0.14_jiti@2.4.2_lightningcss@1.30.1__ca7f7796a6aa1269bc55237a05a443ca/node_modules/astro-cloudinary/src/components/CldImage.astro?astro&type=script&index=0&lang.ts","async function c(e){try{const r=await fetch(e.src);return r.status===423?(await new Promise(s=>setTimeout(s,500)),await c(e)):r.ok?{success:!0,status:r.status}:{success:!1,status:r.status,error:r.headers.get(\"x-cld-error\")||\"Unknown error\"}}catch(r){return{success:!1,status:500,error:r.message||\"Network error\"}}}document.addEventListener(\"error\",n,!0);async function n(e){const r=e.target;if(!r||r.tagName!==\"IMG\")return;const s=new CustomEvent(\"cldimage:error\",{detail:{Image:r,type:\"error\"}});r?.dispatchEvent(s);const t=await c({src:r.src});if(t.error,t.success){const a=`${Date.now()}${Math.random()}`;r.src.includes(\"?\")?r.src=`${r.src}?key=${a}`:r.src=`${r.src}&key=${a}`}}"]],"assets":["/_astro/4.0FqjvbU-.jpg","/_astro/1.sO-_Mxr7.jpg","/_astro/2.BLbs8ZF_.jpg","/_astro/3.l7PtAl-e.jpg","/_astro/boarding.D31B0Csh.css","/favicon.svg","/_astro/CldUploadWidget.astro_astro_type_script_index_0_lang.bCPEqopK.js","/_astro/CldVideoPlayer.astro_astro_type_script_index_0_lang.BenpXjxX.js","/_astro/button.Bjz9WSFZ.js","/_astro/client.DHYUtGoQ.js","/_astro/clsx.Bq1LokoP.js","/_astro/index.Ch09iVLb.js","/_astro/index.Dy7WD_uu.js","/_astro/navigation.C3G6GXlb.js","/_astro/surrender-accordion.Dre5KXzM.js","/_astro/util.BpmjTJwX.js","/_astro/fonts/05f879362247e88e.woff2","/_astro/fonts/062a628e7d92549a.woff2","/_astro/fonts/082d828a1df8334f.woff2","/_astro/fonts/0db8a7bbf88ae1e9.woff2","/_astro/fonts/146c5d6ce2c05de7.woff2","/_astro/fonts/218ff3c112c51d6f.woff2","/_astro/fonts/3f1c84cc5c4e1ccd.woff2","/_astro/fonts/4346ae6302252f86.woff2","/_astro/fonts/49fcfcad943b1b17.woff2","/_astro/fonts/4e78973b51a9a37f.woff2","/_astro/fonts/51bc7350c32ae7ef.woff2","/_astro/fonts/59fda1318f276415.woff2","/_astro/fonts/70b41ec41499acbc.woff2","/_astro/fonts/70e20f0339e25caa.woff2","/_astro/fonts/727afbd866909ce8.woff2","/_astro/fonts/753698471a2b759b.woff2","/_astro/fonts/75be173e3f749968.woff2","/_astro/fonts/77bb15c3695e465f.woff2","/_astro/fonts/78c0e6f7e2c1829a.woff2","/_astro/fonts/793eba7ff79f4ecd.woff2","/_astro/fonts/7a9531467c8331e1.woff2","/_astro/fonts/811cd80ef5ab4321.woff2","/_astro/fonts/95df6aa5e5d0381a.woff2","/_astro/fonts/95e92b731ad04c2e.woff2","/_astro/fonts/98196d84b4b7999b.woff2","/_astro/fonts/a22bfaabe21af8a2.woff2","/_astro/fonts/af2e5083914baa40.woff2","/_astro/fonts/afab3c0e87960729.woff2","/_astro/fonts/b645d0eb2cb47d24.woff2","/_astro/fonts/c45f8276ab4aa2e4.woff2","/_astro/fonts/cb3f17e141df54cc.woff2","/_astro/fonts/d19921464d5ca3f7.woff2","/_astro/fonts/d32d84cf272ba9a4.woff2","/_astro/fonts/d518a76f49ad9b8f.woff2","/_astro/fonts/f84503f09b05096f.woff2","/_astro/fonts/fd2d44d84234de0b.woff2","/boarding/index.html","/contact/index.html","/how-to-adopt/index.html","/surrender/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"7YZh3PavfCoEp1d9sz6LHqu009OImISLA62qMjutOAg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
