import { useSiteSettings } from "../context/useSiteSettings.js";

const colorOptions = [
  { label: "Ketchup Splat", value: "#FF3B30" },
  { label: "Sriracha Splash", value: "#D84315" },
  { label: "Buffalo Sauce", value: "#FF6F00" },
  { label: "Honey Mustard", value: "#F4C430" },
  { label: "Cool Ranch Dip", value: "#E0F7FA" },
  { label: "Blue Flame", value: "#2979FF" },
  { label: "Midnight Fryer", value: "#0D47A1" },
  { label: "Plum Sauce", value: "#8E24AA" },
  { label: "Sweet Sauce", value: "#F48FB1" },
  { label: "Herb Crust", value: "#8BC34A" },
  { label: "Savory Sprinkle", value: "#4E5A3D" },
  { label: "Pickle Punch", value: "#009688" },
  { label: "Toasty Breading", value: "#4E342E" },
  { label: "Grill Line", value: "#9E9E9E" },
  { label: "Frozen Fry", value: "#BDBDBD" },
  { label: "Salt Dust", value: "#EDEDED" },
  { label: "Buttermilk Batter", value: "#FFF8E1" },
  { label: "Napkin White", value: "#FFFFFF" },
  { label: "Burnt Nugget", value: "#000000" },
];

const fontOptions = [
  "System",
  "Arial",
  "Courier New",
  "Georgia",
  "Times New Roman",
  "Verdana",
  "Tahoma",
  "Trebuchet MS",
  "Impact",
  "Comic Sans MS",
];

const fontSizeOptions = [
  { label: "X-Small", value: 18 },
  { label: "Small", value: 22 },
  { label: "Medium", value: 26 },
  { label: "Large", value: 30 },
  { label: "X-Large", value: 34 },
];

export default function AppearanceSettings() {
  const { settings, updateSetting, resetSettings } = useSiteSettings();

  return (
    <div className="appearance-settings-card">
      <div className="account-section-heading">
        <div>
          <p className="challenge-kicker">Appearance</p>
          <h2>Customize your nuggets</h2>
        </div>
        <button type="button" onClick={resetSettings}>
          Reset
        </button>
      </div>

      <div className="appearance-settings-grid">
        <label>
          Background color
          <select
            value={settings.backgroundColor}
            onChange={(event) => updateSetting("backgroundColor", event.target.value)}
          >
            {colorOptions.map((color) => (
              <option key={color.value} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Text color
          <select
            value={settings.fontColor}
            onChange={(event) => updateSetting("fontColor", event.target.value)}
          >
            {colorOptions.map((color) => (
              <option key={color.value} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Font style
          <select
            value={settings.fontFamily}
            onChange={(event) => updateSetting("fontFamily", event.target.value)}
          >
            {fontOptions.map((font) => (
              <option key={font} value={font}>
                {font}
              </option>
            ))}
          </select>
        </label>

        <label>
          Font size
          <select
            value={settings.fontSize}
            onChange={(event) => updateSetting("fontSize", event.target.value)}
          >
            {fontSizeOptions.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="appearance-preview">
        <p>Small choices are quiet architects.</p>
        <small>- The Daily Nugget</small>
      </div>
    </div>
  );
}
