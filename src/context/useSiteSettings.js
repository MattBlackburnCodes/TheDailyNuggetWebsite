import { useContext } from "react";
import { SiteSettingsContext } from "./siteSettingsContext.js";

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);

  if (!context) {
    throw new Error("useSiteSettings must be used inside SiteSettingsProvider.");
  }

  return context;
}
