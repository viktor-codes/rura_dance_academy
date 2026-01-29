"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_CTA_LABEL, NAV_LINKS } from "../types";

type MobileMenuSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  triggerClass: string;
};

export function MobileMenuSheet({
  open,
  onOpenChange,
  triggerClass,
}: MobileMenuSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger
        aria-label="Open menu"
        className={`inline-flex size-10 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose ${triggerClass}`}
      >
        <Menu className="size-6" aria-hidden />
      </SheetTrigger>
      <SheetContent side="right" className="border-sense-dark/10 bg-sense-light">
        <SheetHeader>
          <SheetTitle className="sr-only">Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="flex flex-col gap-6 pt-8">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-lg text-sense-dark"
              onClick={() => onOpenChange(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#trial"
            className="inline-flex w-fit rounded-full bg-sense-rose px-6 py-3 font-sans text-sense-dark uppercase tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sense-rose"
            onClick={() => onOpenChange(false)}
          >
            {NAV_CTA_LABEL}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
