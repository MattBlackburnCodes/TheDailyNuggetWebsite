import { useEffect, useMemo, useState } from "react";
import { SiteSettingsContext } from "./siteSettingsContext.js";

const SITE_SETTINGS_STORAGE_KEY = "dailyNuggetSiteSettings";

const defaultSettings = {
  backgroundColor: "#4a4e43",
  fontColor: "#ffffff",
  fontFamily: "System",
  fontSize: 18,
};

function getSavedSettings() {
  try {
    return {
      ...defaultSettings,
      ...(JSON.parse(localStorage.getItem(SITE_SETTINGS_STORAGE_KEY)) || {}),
    };
  } catch {
    return defaultSettings;
  }
}

function getCssFontFamily(fontFamily) {
  return fontFamily === "System"
    ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    : fontFamily;
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
