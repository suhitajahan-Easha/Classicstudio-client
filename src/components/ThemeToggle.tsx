"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="size-9" />;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex w-auto min-w-max flex-nowrap items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-700 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <>
          <Sun className="size-5 shrink-0" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="size-5 shrink-0" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}
