"use client";

import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/store/theme-store";
import React from "react";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useThemeStore((state) => state);

  return (
    <div>
      <Button onClick={toggleTheme}>Toogle theme</Button>
    </div>
  );
};

export default ToggleTheme;
