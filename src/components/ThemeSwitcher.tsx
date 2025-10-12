import { useTheme } from "../context/ThemeContext";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="mt-6 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};
