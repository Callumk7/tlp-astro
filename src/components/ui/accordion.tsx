import * as AccordionPrimitive from "@radix-ui/react-accordion";
import clsx from "clsx";
import type { ComponentProps } from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
  className,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item className={clsx("border-b", className)} {...props} />
);

const AccordionTrigger = ({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={clsx(
        "flex flex-1 items-center justify-between py-4 font-bold transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent = ({
  className,
  children,
  ...props
}: ComponentProps<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm transition-all"
    {...props}
  >
    <div className={clsx("pt-0 pb-4", className)}>{children}</div>
  </AccordionPrimitive.Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
