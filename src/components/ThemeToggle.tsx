// src/components/ThemeToggle.tsx
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"; // Sử dụng Button của shadcn
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme(); // resolvedTheme cho biết theme hiện tại (light/dark) kể cả khi theme="system"
  const [mounted, setMounted] = useState(false);

  // useEffect chỉ chạy ở client-side, sau khi component được mount
  // Điều này quan trọng để tránh lỗi hydration mismatch với next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render một placeholder hoặc null trong quá trình server-side rendering hoặc trước khi client-side mount
    // để tránh lỗi hydration
    return <Button variant="ghost" size="icon" disabled className="w-9 h-9" aria-label="Toggle theme (loading)"></Button>;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="w-9 h-9">
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
};

export default ThemeToggle;