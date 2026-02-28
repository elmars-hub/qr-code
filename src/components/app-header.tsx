"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  UtensilsCrossed,
  Wine,
  Heart,
  Settings,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAppContext } from "@/context/app-context";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/menu/food", label: "FOOD MENU", icon: UtensilsCrossed },
  { href: "/menu/drinks", label: "DRINKS MENU", icon: Wine },
  { href: "/favourites", label: "My favorite", icon: Heart },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function AppHeader() {
  const { settings } = useAppContext();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border lg:hidden"
      style={{ backgroundColor: "var(--brand)" }}
    >
      <div className="flex h-14 items-center gap-3 px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/20">
              <Menu className="h-6 w-6 text-white" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-border bg-background p-0"
          >
            <div className="flex h-14 items-center justify-between border-b border-border px-4">
              <span className="text-lg font-bold text-foreground">
                {settings.restaurantName}
              </span>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-secondary"
              >
                <X className="h-4 w-4 text-foreground" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundColor: "var(--brand)",
                            color: "var(--primary-foreground)",
                          }
                        : undefined
                    }
                  >
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex-1">
          <h1 className="text-xl font-bold text-white">
            {settings.restaurantName}
          </h1>
        </Link>
      </div>
    </header>
  );
}
