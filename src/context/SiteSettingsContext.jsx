import { useEffect, useMemo, useState } from "react";
import { SiteSettingsContext } from "./siteSettingsContext.js";

const SITE_SETTINGS_STORAGE_KEY = "dailyNuggetSiteSettings";

const legacyDefaultSettings = {
  backgroundColor: "#4a4e43",
  fontColor: "#ffffff",
  fontFamily: "System",
  fontSize: 18,
};

const defaultSettings = {
  backgroundColor: "#fff4bf",
  fontColor: "#18140f",
  fontFamily: "Nunito",
  fontSize: 22,
};

function getSavedSettings() {
  try {
    const savedSettings = JSON.parse(localStorage.getItem(SITE_SETTINGS_STORAGE_KEY)) || {};

    const isLegacyDefault = Object.entries(legacyDefaultSettings).every(
      ([key, value]) => savedSettings[key] === value,
    );

    if (isLegacyDefault) return defaultSettings;

    return {
      ...defaultSettings,
      ...savedSettings,
    };
  } catch {
    return defaultSettings;
  }
}

const fontStacks = {
  "Arial Rounded MT Bold": "'Arial Rounded MT Bold', 'Nunito', system-ui, sans-serif",
  "Baloo 2": "'Baloo 2', 'Nunito', system-ui, sans-serif",
  Chewy: "'Chewy', 'Baloo 2', 'Arial Rounded MT Bold', system-ui, sans-serif",
  Nunito: "'Nunito', system-ui, sans-serif",
  System: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

function getCssFontFamily(fontFamily) {
  return fontStacks[fontFamily] || fontFamily;
}

export function SiteSettingsProvider({ children }) {
  const [settings, setSettings] = useState(getSavedSettings);

  useEffect(() => {
    localStorage.setItem(SITE_SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  }, [settings]);

  function updateSetting(name, value) {
    setSettings((currentSettings) => ({
      ...currentSettings,
      [name]: name === "fontSize" ? Number(value) : value,
    }));
  }

  function resetSettings() {
    setSettings(defaultSettings);
  }

  const styleVariables = useMemo(() => ({
    "--nugget-user-bg": settings.backgroundColor,
    "--nugget-user-text": settings.fontColor,
    "--nugget-user-font": getCssFontFamily(settings.fontFamily),
    "--nugget-user-size": `${settings.fontSize}px`,
    "--nugget-user-line-height": `${Math.round(settings.fontSize * 1.35)}px`,
  }), [settings]);

  const value = useMemo(() => ({
    settings,
    updateSetting,
    resetSettings,
    styleVariables,
  }), [settings, styleVariables]);

  return (
    <SiteSettingsContext.Provider value={value}>
      <div className="site-settings-scope" style={styleVariables}>
        {children}
      </div>
    </SiteSettingsContext.Provider>
  );
}
