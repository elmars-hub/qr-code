"use client";

import { useAppContext } from "@/context/app-context";
import { themes } from "@/data/themes";
import { fonts } from "@/data/fonts";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

export default function SettingsPage() {
  const { settings, updateSettings } = useAppContext();

  return (
    <div className="mx-auto max-w-lg px-4 py-6">
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Customize your menu experience
      </p>

      <Separator className="my-6" />

      {/* Restaurant Name */}
      <section className="mb-8">
        <Label className="text-sm font-semibold text-foreground">
          Restaurant Name
        </Label>
        <Input
          className="mt-2 bg-secondary"
          value={settings.restaurantName}
          onChange={(e) => updateSettings({ restaurantName: e.target.value })}
        />
      </section>

      {/* Theme Selection */}
      <section className="mb-8">
        <Label className="text-sm font-semibold text-foreground">Theme</Label>
        <div className="mt-3 grid grid-cols-1 gap-2">
          {themes.map((theme) => {
            const isActive = settings.themeId === theme.id;
            return (
              <button
                key={theme.id}
                onClick={() => updateSettings({ themeId: theme.id })}
                className="flex items-center gap-3 rounded-xl border p-3 transition-all"
                style={{
                  borderColor: isActive ? "var(--brand)" : "var(--border)",
                  backgroundColor: isActive
                    ? "var(--secondary)"
                    : "transparent",
                }}
              >
                {/* Color preview dots */}
                <div className="flex gap-1.5">
                  <div
                    className="h-5 w-5 rounded-full border border-white/10"
                    style={{ backgroundColor: theme.colors.background }}
                  />
                  <div
                    className="h-5 w-5 rounded-full border border-white/10"
                    style={{ backgroundColor: theme.colors.brand }}
                  />
                  <div
                    className="h-5 w-5 rounded-full border border-white/10"
                    style={{ backgroundColor: theme.colors.foreground }}
                  />
                </div>
                <span className="flex-1 text-left text-sm font-medium text-foreground">
                  {theme.name}
                </span>
                {isActive && (
                  <Check
                    className="h-4 w-4"
                    style={{ color: "var(--brand)" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Font Selection */}
      <section className="mb-8">
        <Label className="text-sm font-semibold text-foreground">Font</Label>
        <div className="mt-3 grid grid-cols-1 gap-2">
          {fonts.map((font) => {
            const isActive = settings.fontId === font.id;
            return (
              <button
                key={font.id}
                onClick={() => updateSettings({ fontId: font.id })}
                className="flex items-center gap-3 rounded-xl border p-3 transition-all"
                style={{
                  borderColor: isActive ? "var(--brand)" : "var(--border)",
                  backgroundColor: isActive
                    ? "var(--secondary)"
                    : "transparent",
                }}
              >
                <span
                  className="flex-1 text-left text-sm font-medium text-foreground"
                  style={{ fontFamily: font.fontFamily }}
                >
                  {font.name}
                </span>
                {isActive && (
                  <Check
                    className="h-4 w-4"
                    style={{ color: "var(--brand)" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Brand Color Override */}
      <section className="mb-8">
        <Label className="text-sm font-semibold text-foreground">
          Brand Color
        </Label>
        <p className="mt-1 text-xs text-muted-foreground">
          Override the accent color used throughout the app
        </p>
        <div className="mt-3 flex items-center gap-3">
          <input
            type="color"
            value={settings.brandColor}
            onChange={(e) => updateSettings({ brandColor: e.target.value })}
            className="h-10 w-10 cursor-pointer rounded-lg border border-border bg-transparent"
          />
          <Input
            className="w-32 bg-secondary font-mono text-sm"
            value={settings.brandColor}
            onChange={(e) => updateSettings({ brandColor: e.target.value })}
            maxLength={7}
          />
          <button
            onClick={() => updateSettings({ brandColor: "#FF6F00" })}
            className="text-xs text-muted-foreground underline"
          >
            Reset
          </button>
        </div>
      </section>
    </div>
  );
}
