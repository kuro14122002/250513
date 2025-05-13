// src/components/layout/ThemeToggle.tsx
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes"; // Lỗi module not found sẽ được xử lý sau
import { Button } from "@/components/ui/button"; // Đảm bảo ButtonProps được import đúng
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Trả về một Button bị vô hiệu hóa với kích thước tương tự để tránh layout shift
    // và lỗi hydration.
    return <Button variant="ghost" size="icon" disabled className="w-8 h-8" aria-label="Toggle theme (loading)" />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="w-8 h-8">
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.1rem] w-[1.1rem]" />
      ) : (
        <Moon className="h-[1.1rem] w-[1.1rem]" />
      )}
    </Button>
  );
};

export default ThemeToggle;