"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Wine } from "lucide-react";
import Link from "next/link";
import { useAppContext } from "@/context/app-context";

export default function LandingPage() {
  const { settings } = useAppContext();

  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80')",
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-8 px-6 text-center"
      >
        {/* Restaurant name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {settings.restaurantName}
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="h-px w-24"
          style={{ backgroundColor: "var(--brand)" }}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg font-light tracking-widest uppercase text-white/70"
        >
          Choose Menu
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link href="/menu/food">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-200"
              style={{
                backgroundColor: "var(--brand)",
              }}
            >
              <UtensilsCrossed className="h-5 w-5" />
              Food Menu
            </motion.button>
          </Link>

          <Link href="/menu/drinks">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-full border-2 px-8 py-4 text-base font-semibold text-white transition-all duration-200"
              style={{ borderColor: "var(--brand)" }}
            >
              <Wine className="h-5 w-5" />
              Drinks Menu
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
