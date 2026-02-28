"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  Heart,
  Flame,
  Leaf,
  Wheat,
  Sparkles,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useAppContext } from "@/context/app-context";
import { menuItems, categories } from "@/data/menu";

export default function ItemDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { toggleFavourite, isFavourite } = useAppContext();

  const item = menuItems.find((i) => i.id === id);
  const category = item ? categories.find((c) => c.id === item.category) : null;
  const fav = item ? isFavourite(item.id) : false;

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-lg font-medium text-muted-foreground">
          Item not found
        </p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-sm font-medium underline"
          style={{ color: "var(--brand)" }}
        >
          Go back
        </button>
      </div>
    );
  }

  const relatedItems = menuItems
    .filter((i) => i.category === item.category && i.id !== item.id)
    .slice(0, 4);

  const dietaryInfo = [
    item.isVegetarian && { label: "Vegetarian", icon: Leaf, color: "#16a34a" },
    item.isVegan && { label: "Vegan", icon: Leaf, color: "#15803d" },
    item.isGlutenFree && {
      label: "Gluten Free",
      icon: Wheat,
      color: "#ca8a04",
    },
    item.isSpicy && { label: "Spicy", icon: Flame, color: "#dc2626" },
  ].filter(Boolean) as { label: string; icon: typeof Leaf; color: string }[];

  return (
    <div className="mx-auto max-w-2xl">
      {/* Hero Image */}
      <div className="relative aspect-16/10 w-full overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 672px"
          priority
        />
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
        >
          <ArrowLeft className="h-5 w-5 text-gray-800" />
        </button>
        {/* Favourite button */}
        <button
          onClick={() => toggleFavourite(item.id)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md backdrop-blur-sm transition-colors hover:bg-white"
        >
          <Heart
            className="h-5 w-5 transition-colors"
            style={
              fav
                ? { fill: "var(--brand)", color: "var(--brand)" }
                : { color: "#6b7280" }
            }
          />
        </button>
        {/* Badges overlay */}
        <div className="absolute bottom-3 left-4 flex gap-2">
          {item.isNew && (
            <Badge
              className="flex items-center gap-1 text-xs font-semibold text-white"
              style={{ backgroundColor: "var(--brand)" }}
            >
              <Sparkles className="h-3 w-3" />
              New
            </Badge>
          )}
          {item.isPopular && (
            <Badge className="flex items-center gap-1 bg-amber-500 text-xs font-semibold text-white">
              <Star className="h-3 w-3" />
              Popular
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="px-5 py-5"
      >
        {/* Category */}
        {category && (
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {category.icon} {category.name}
          </p>
        )}

        {/* Name & Price */}
        <div className="mt-2 flex items-start justify-between gap-4">
          <h1 className="text-2xl font-bold text-foreground">{item.name}</h1>
          <span
            className="shrink-0 text-2xl font-bold"
            style={{ color: "var(--brand)" }}
          >
            {item.currency}
            {item.price}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        {/* Dietary Info */}
        {dietaryInfo.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {dietaryInfo.map((info) => {
              const Icon = info.icon;
              return (
                <span
                  key={info.label}
                  className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                  style={{ borderColor: info.color, color: info.color }}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {info.label}
                </span>
              );
            })}
          </div>
        )}

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs capitalize"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-foreground">
              More from {category?.name}
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {relatedItems.map((related) => (
                <button
                  key={related.id}
                  onClick={() => router.push(`/item/${related.id}`)}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-left"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-2">
                    <p className="text-xs font-semibold text-foreground line-clamp-1">
                      {related.name}
                    </p>
                    <p
                      className="mt-0.5 text-xs font-bold"
                      style={{ color: "var(--brand)" }}
                    >
                      {related.currency}
                      {related.price}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
