import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="ml-4 p-2 min-w-0 rounded-full border-none hover:bg-primary/10"
    >
      {isDark ? (
        <LightModeRoundedIcon className="text-primary" fontSize="small" />
      ) : (
        <DarkModeRoundedIcon className="text-primary" fontSize="small" />
      )}
    </Button>
  );
};
