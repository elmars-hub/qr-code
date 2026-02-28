export interface AppSettings {
  restaurantName: string;
  themeId: string;
  fontId: string;
  brandColor: string;
}

export const defaultSettings: AppSettings = {
  restaurantName: "Maison Dorée",
  themeId: "orange",
  fontId: "dm-sans",
  brandColor: "#FF6F00",
};

export const SETTINGS_STORAGE_KEY = "qr-menu-settings";
export const FAVOURITES_STORAGE_KEY = "qr-menu-favourites";
