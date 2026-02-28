"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UtensilsCrossed, Wine, Heart, Settings } from "lucide-react";
import { useAppContext } from "@/context/app-context";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/menu/food", label: "Food Menu", icon: UtensilsCrossed },
  { href: "/menu/drinks", label: "Drinks Menu", icon: Wine },
  { href: "/favourites", label: "Favourites", icon: Heart },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function DesktopSidebar() {
  const { settings } = useAppContext();
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex lg:w-64 lg:shrink-0 lg:flex-col lg:border-r lg:border-border lg:bg-background lg:sticky lg:top-0 lg:h-dvh lg:overflow-y-auto">
      <div className="flex h-14 items-center border-b border-border px-5">
        <h1 className="text-lg font-bold" style={{ color: "var(--brand)" }}>
          {settings.restaurantName}
        </h1>
      </div>
      <nav className="flex flex-1 flex-col gap-1 p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
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
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
