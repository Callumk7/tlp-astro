import { c as createComponent, e as createAstro, m as maybeRenderHead, b as addAttribute, f as renderSlot, a as renderTemplate, s as spreadAttributes, r as renderComponent, g as renderHead } from './astro/server_Bi9CFwpO.mjs';
import clsx from 'clsx';
import { cva } from 'class-variance-authority';
import './index_BRwviSIQ.mjs';
import { c as $$Font } from './_astro_assets_CNhE15QL.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';
/* empty css                            */

const $$Astro$3 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([className, "mx-auto w-4/5"], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/home/callum/Projects/this-little-piggy/src/components/Container.astro", void 0);

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const headerVariants = cva("font-playfair font-bold", {
    variants: {
      header: {
        one: "text-6xl",
        two: "text-4xl",
        three: "text-3xl"
      },
      decoration: {
        underline: "underline decoration-plum-10 decoration-3"
      }
    },
    defaultVariants: {
      header: "one"
    }
  });
  const { header, decoration, class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(clsx(headerVariants({ className, header, decoration })), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/home/callum/Projects/this-little-piggy/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}>${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-yrsa", "preload": true })}${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-oxygen", "preload": true })}${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-inter", "preload": true })}${renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-playfair", "preload": true })}`;
}, "/home/callum/Projects/this-little-piggy/src/components/BaseHead.astro", void 0);

const DotsIcon = ({ className }) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          d: "M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"
        }
      )
    }
  );
};

const Circle = ({ className }) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "24",
      height: "24",
      className,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", fill: "none", stroke: "currentColor", strokeWidth: "2" })
    }
  );
};

const Tick = ({ className }) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: "15",
      height: "15",
      className,
      viewBox: "0 0 15 15",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "none",
          stroke: "currentColor",
          strokeLinecap: "square",
          d: "m1 7l4.5 4.5L14 3"
        }
      )
    }
  );
};

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: clsx(
      "focus:bg-accent data-[state=open]:bg-accent flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(DotsIcon, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: clsx(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-sage-1 p-1 text-sage-12 shadow-lg data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: clsx(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-sage-1 p-1 text-sage-12 shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: clsx(
      "relative flex cursor-default items-center rounded-sm px-3 py-3 font-inter font-semibold transition-colors outline-none select-none focus:bg-plum-3 focus:text-sage-12 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: clsx(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Tick, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: clsx(
      "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm transition-colors outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: clsx(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: clsx("bg-foreground/10 -mx-1 my-1 h-px", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const MenuIcon = ({ className }) => {
  return /* @__PURE__ */ jsx("svg", { width: "24", height: "24", className, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx(
    "path",
    {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M20.75 7a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Zm0 5a.75.75 0 0 1-.75.75H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 .75.75Z",
      clipRule: "evenodd"
    }
  ) });
};

const buttonVariants = cva(
  "w-fit rounded-md font-inter h-fit font-semibold transition-colors ease-in-out shadow-lg shadow-black-A1",
  {
    variants: {
      variant: {
        primary: "bg-plum-10 text-sage-1 hover:bg-plum-11",
        bronze: "bg-bronze10 text-sage-1 hover:bg-bronze-11",
        teal: "bg-teal-10 text-sage-1 hover:bg-teal-11",
        ghost: "bg-plum4 text-plum-11",
        secondary: "bg-sage-6 text-olive-9",
        outline: "border-2 border-plum-8 text-plum-10 hover:bg-plum-5"
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2",
        lg: "px-4 py-3 text-xl",
        xl: "px-4 py-3 text-2xl w-full"
      },
      shadow: {
        sm: "shadow-lg",
        lg: "shadow-xl"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);
function Button({
  children,
  className,
  variant,
  size,
  shadow,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: clsx(buttonVariants({ className, variant, size, shadow })),
      ...props,
      children
    }
  );
}
function Link({
  href,
  children,
  className,
  variant,
  size,
  shadow,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: clsx(buttonVariants({ className, variant, size, shadow })),
      ...props,
      children
    }
  );
}

const links = [
  {
    id: 0,
    href: "/",
    name: "Home"
  },
  {
    id: 1,
    href: "/piggies",
    name: "Our Piggies"
  },
  {
    id: 3,
    href: "/how-to-adopt",
    name: "How to Adopt"
  },
  {
    id: 4,
    href: "/boarding",
    name: "Boarding"
  },
  {
    id: 5,
    href: "/surrender",
    name: "Give up a Piggy"
  }
];
function NavigationLinks({
  isDropdownMenu = false,
  pathname
}) {
  return /* @__PURE__ */ jsx(Fragment, { children: links.map((link) => {
    if (isDropdownMenu) {
      return /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: link.href, children: link.name }) }, link.id);
    } else {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: link.href,
          className: clsx(
            "font-inter font-semibold text-sage-10 transition-colors ease-in-out hover:text-sage-12",
            pathname === link.href && "text-sage-12 underline decoration-plum-9 decoration-2"
          ),
          children: link.name
        }
      ) }, link.id);
    }
  }) });
}
function NavBar({ pathname }) {
  return /* @__PURE__ */ jsxs("nav", { className: "relative z-20 mx-auto flex w-4/5 flex-row items-center justify-end py-5 lg:justify-between lg:gap-12", children: [
    /* @__PURE__ */ jsx("ul", { className: "hidden flex-row items-center justify-start gap-8 lg:flex", children: /* @__PURE__ */ jsx(NavigationLinks, { pathname }) }),
    /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { className: "lg:hidden", children: /* @__PURE__ */ jsx(MenuIcon, { className: "h-9 w-9" }) }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "mx-6 w-[80vw]", children: [
        /* @__PURE__ */ jsx(NavigationLinks, { isDropdownMenu: true, pathname }),
        /* @__PURE__ */ jsx(Button, { className: "block w-full lg:hidden", variant: "primary", children: /* @__PURE__ */ jsx("a", { href: "/contact", children: "Contact Us" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex gap-7", children: /* @__PURE__ */ jsx(Button, { className: "hidden lg:block", variant: "primary", children: /* @__PURE__ */ jsx("a", { href: "/contact", children: "Contact Us" }) }) })
  ] });
}

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const pathname = Astro2.url.pathname;
  const { title, description, image } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "image": image, "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body class="h-full min-h-screen bg-gradient-to-tr from-sage-1 to-teal-2 font-oxygen text-sage-12" data-astro-cid-sckkx6r4> ${renderComponent($$result, "NavBar", NavBar, { "client:load": true, "pathname": pathname, "client:component-hydration": "load", "client:component-path": "/home/callum/Projects/this-little-piggy/src/components/react/navigation", "client:component-export": "NavBar", "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/callum/Projects/this-little-piggy/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Button as B, Link as L, $$Container as a, $$Header as b };
