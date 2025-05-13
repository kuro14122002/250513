// src/components/layout/TopBar.tsx
import React, { useState, useEffect } from 'react';
import { Link as LinkIcon, Languages, Users } from 'lucide-react'; // Thay MapPin và Globe bằng icon phù hợp hơn
import LanguageSwitcher from '../LanguageSwitcher'; // Đường dẫn đến LanguageSwitcher
import ThemeToggle from '../ThemeToggle'; // Đường dẫn đến ThemeToggle

interface TopBarProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const TopBar: React.FC<TopBarProps> = ({ currentLang, onLanguageChange }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const day = new Intl.DateTimeFormat(currentLang === 'vi' ? 'vi-VN' : 'en-US', { weekday: 'long' }).format(date);
    const fullDate = new Intl.DateTimeFormat(currentLang === 'vi' ? 'vi-VN' : 'en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
    return `${day}, ${fullDate}`;
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat(currentLang === 'vi' ? 'vi-VN' : 'en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(date);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-200"> {/* Tăng độ đậm chữ một chút */}
      <div className="container-custom mx-auto flex flex-wrap justify-between items-center py-1.5 px-4"> {/* Tăng padding Y một chút */}
        {/* Phần trái: Thời gian */}
        <div className="flex items-center space-x-2">
          <span>{formatDate(dateTime)}</span>
          <span className="hidden sm:inline">|</span> {/* Chỉ hiển thị trên màn hình lớn hơn sm */}
          <span className="hidden sm:inline">{formatTime(dateTime)}</span>
        </div>

        {/* Phần phải: Sơ đồ site, Ngôn ngữ, Dark/Light Mode */}
        <div className="flex items-center space-x-3 sm:space-x-4"> {/* Thêm sm:space-x-4 để có khoảng cách lớn hơn trên desktop */}
          <a
            href="https://dseza.danang.gov.vn/so-do-site"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary dark:hover:text-dseza-green flex items-center"
            title={currentLang === 'vi' ? 'Sơ đồ trang' : 'Site Map'}
          >
            <LinkIcon size={14} className="mr-1" />
            <span className="hidden md:inline">{currentLang === 'vi' ? 'Sơ đồ site' : 'Site Map'}</span>
          </a>

          <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />

          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default TopBar;