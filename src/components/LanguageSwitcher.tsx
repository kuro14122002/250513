// src/components/LanguageSwitcher.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react'; // Hoặc một icon khác bạn thích

interface LanguageSwitcherProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  const toggleLanguage = () => {
    const newLang = currentLang === 'vi' ? 'en' : 'vi';
    onLanguageChange(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm" // Kích thước nhỏ hơn cho top bar
      onClick={toggleLanguage}
      aria-label="Change language"
      className="flex items-center px-2 py-1 h-auto text-xs" // Tùy chỉnh class cho phù hợp
    >
      <Globe size={14} className="mr-1" />
      {currentLang === 'vi' ? 'Tiếng Việt' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;