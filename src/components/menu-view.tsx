"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { Search, LayoutGrid, SlidersHorizontal, X, Check } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuItemCard } from "@/components/menu-item-card";
import { categories, menuItems } from "@/data/menu";

interface MenuViewProps {
  menuType: "food" | "drinks";
}

const foodFilterTags = [
  { id: "popular", label: "Popular", abbr: "P" },
  { id: "new", label: "New", abbr: "N" },
  { id: "vegetarian", label: "Vegetarian", abbr: "V" },
  { id: "vegan", label: "Vegan", abbr: "VG" },
  { id: "spicy", label: "Spicy", abbr: "S" },
];

const drinksFilterTags = [
  { id: "popular", label: "Popular", abbr: "P" },
  { id: "new", label: "New", abbr: "N" },
  { id: "alcoholic", label: "Alcoholic", abbr: "A" },
  { id: "non-alcoholic", label: "Non-Alcoholic", abbr: "NA" },
  { id: "hot", label: "Hot", abbr: "H" },
  { id: "cold", label: "Cold", abbr: "C" },
];

export function MenuView({ menuType }: MenuViewProps) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const categoryScrollRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const filterTags = menuType === "food" ? foodFilterTags : drinksFilterTags;

  const menuCategories = useMemo(
    () => categories.filter((c) => c.menuType === menuType),
    [menuType],
  );

  const [activeCategory, setActiveCategory] = useState<string>(
    () => menuCategories[0]?.id ?? "",
  );

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const cat = categories.find((c) => c.id === item.category);
      if (!cat || cat.menuType !== menuType) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !item.name.toLowerCase().includes(q) &&
          !item.description.toLowerCase().includes(q)
        )
          return false;
      }
      if (activeFilters.length > 0) {
        const hasFilter = activeFilters.some((f) => item.tags.includes(f));
        if (!hasFilter) return false;
      }
      return true;
    });
  }, [menuType, search, activeFilters]);

  const groupedItems = useMemo(() => {
    const groups: Record<string, typeof filteredItems> = {};
    for (const cat of menuCategories) {
      const items = filteredItems.filter((i) => i.category === cat.id);
      if (items.length > 0) {
        groups[cat.id] = items;
      }
    }
    return groups;
  }, [filteredItems, menuCategories]);

  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        }
      },
      { rootMargin: "-200px 0px -60% 0px", threshold: 0 },
    );

    for (const catId of Object.keys(sectionRefs.current)) {
      const el = sectionRefs.current[catId];
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [groupedItems]);

  const scrollToCategory = useCallback((catId: string) => {
    setActiveCategory(catId);
    const el = sectionRefs.current[catId];
    const scrollContainer = el?.closest("main");
    if (el && scrollContainer) {
      const offset = 200;
      const containerTop = scrollContainer.getBoundingClientRect().top;
      const elementTop = el.getBoundingClientRect().top;
      const scrollTop =
        scrollContainer.scrollTop + (elementTop - containerTop) - offset;
      scrollContainer.scrollTo({ top: scrollTop, behavior: "smooth" });
    }
  }, []);

  const toggleFilter = useCallback((filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((f) => f !== filterId)
        : [...prev, filterId],
    );
  }, []);

  return (
    <div className="flex flex-col">
      {/* Sticky controls */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        {/* Row: grid toggle + search + filter */}
        <div className="flex items-center gap-2 px-4 py-2">
          <button
            onClick={() => setView(view === "grid" ? "list" : "grid")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-secondary"
          >
            <LayoutGrid className="h-5 w-5 text-foreground" />
          </button>

          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search Item By Name, Price Or Description."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-9 border-0 bg-transparent pl-9 text-sm placeholder:text-muted-foreground focus-visible:ring-0"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2"
              >
                <X className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            )}
          </div>

          <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
            <SheetTrigger asChild>
              <button className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors hover:bg-secondary">
                <SlidersHorizontal className="h-5 w-5 text-foreground" />
                {activeFilters.length > 0 && (
                  <span
                    className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: "var(--brand)" }}
                  >
                    {activeFilters.length}
                  </span>
                )}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 border-border bg-background p-0"
              showCloseButton={false}
            >
              {/* Filter header */}
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <h3 className="text-lg font-bold text-foreground">Filters</h3>
                {activeFilters.length > 0 && (
                  <button
                    onClick={() => setActiveFilters([])}
                    className="text-sm font-medium transition-colors"
                    style={{ color: "var(--brand)" }}
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Filter list */}
              <div className="flex flex-col pb-20">
                {filterTags.map((tag) => {
                  const isActive = activeFilters.includes(tag.id);
                  return (
                    <button
                      key={tag.id}
                      onClick={() => toggleFilter(tag.id)}
                      className="flex items-center gap-4 border-b border-border px-5 py-4 text-left transition-colors hover:bg-secondary/50"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border text-xs font-bold text-foreground">
                        {tag.abbr}
                      </span>
                      <span className="flex-1 text-sm font-medium text-foreground">
                        {tag.label}
                      </span>
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border transition-colors ${
                          isActive ? "border-transparent" : "border-border"
                        }`}
                        style={
                          isActive
                            ? { backgroundColor: "var(--brand)" }
                            : undefined
                        }
                      >
                        {isActive && (
                          <Check className="h-3.5 w-3.5 text-white" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Apply button */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-background p-4">
                <button
                  onClick={() => setFilterOpen(false)}
                  className="w-full rounded-lg py-3 text-sm font-semibold transition-colors"
                  style={
                    activeFilters.length > 0
                      ? { backgroundColor: "var(--brand)", color: "white" }
                      : {
                          backgroundColor: "var(--secondary)",
                          color: "var(--muted-foreground)",
                        }
                  }
                >
                  Apply filters
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Category image cards */}
        <div
          ref={categoryScrollRef}
          className="hide-scrollbar flex gap-3 overflow-x-auto px-4 pb-3 pt-1"
        >
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const hasItems = groupedItems[cat.id];
            return (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`relative flex shrink-0 flex-col items-center gap-1.5 transition-opacity ${
                  !hasItems ? "opacity-40" : ""
                }`}
              >
                <div
                  className="relative h-16 w-16 overflow-hidden rounded-xl border-2 transition-colors"
                  style={{
                    borderColor: isActive ? "var(--brand)" : "transparent",
                  }}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <span
                  className="text-[10px] font-semibold uppercase leading-tight max-w-16 text-center"
                  style={{
                    color: isActive
                      ? "var(--brand)"
                      : "var(--muted-foreground)",
                  }}
                >
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu items */}
      <div className="px-4 py-4">
        {Object.keys(groupedItems).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-lg font-medium text-muted-foreground">
              No items found
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Try adjusting your search or filters
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {menuCategories.map((cat) => {
              const items = groupedItems[cat.id];
              if (!items) return null;
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  ref={(el) => {
                    sectionRefs.current[cat.id] = el;
                  }}
                >
                  <h2 className="mb-4 text-2xl font-bold uppercase text-foreground">
                    {cat.name}
                  </h2>
                  <AnimatePresence mode="popLayout">
                    <div
                      className={
                        view === "grid"
                          ? "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4"
                          : "flex flex-col gap-3"
                      }
                    >
                      {items.map((item) => (
                        <MenuItemCard key={item.id} item={item} view={view} />
                      ))}
                    </div>
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
