// src/App.tsx
import { Toaster as ShadcnToaster } from "./components/ui/toaster"; // Đổi tên để tránh xung đột
import { Toaster as SonnerToaster } from "./components/ui/sonner"; // Đổi tên để tránh xung đột
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider
import { useEffect } from "react";
import { initializeDsezaScripts } from "./lib/tab-utils";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Initialize DSEZA scripts
    initializeDsezaScripts();
  }, []);

  return (
    // Bọc toàn bộ ứng dụng bằng ThemeProvider
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ShadcnToaster />
          <SonnerToaster /> {/* next-themes sẽ tự động áp class 'dark' cho Sonner nếu theme là dark */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;