// src/components/Header.tsx
import React, { useState } from 'react';
// Thay MapSigns bằng Sitemap (hoặc icon bạn chọn)
import { Globe, User, Map, Search as SearchIcon } from 'lucide-react';
import DsezaStaticHeader from './DsezaStaticHeader';
import { useIsMobile } from '../hooks/use-mobile';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const isMobile = useIsMobile();

  const toggleLanguage = () => {
    const newLang = currentLang === 'vi' ? 'en' : 'vi';
    onLanguageChange(newLang);
  };

  const siteMapText = currentLang === 'vi' ? 'Sơ đồ trang' : 'Site Map';
  const loginText = currentLang === 'vi' ? 'Đăng nhập' : 'Login';
  const langText = currentLang === 'vi' ? 'Tiếng Việt' : 'English';
  const searchText = currentLang === 'vi' ? 'Tìm kiếm...' : 'Search...';

  return (
    <header id="page-header" className="w-full sticky top-0 z-[100] shadow-md bg-white">
      <div className="bg-dseza-green-dark text-white"> {/* Đảm bảo 'dseza-green-dark' được định nghĩa trong tailwind.config.ts */}
        <div className="container-custom flex flex-wrap justify-between items-center py-2 text-xs sm:text-sm">
          <div></div> {/* Placeholder for date/time if needed */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Sử dụng icon Map thay vì Sitemap */}
            <a href="/sitemap" className="flex items-center hover:text-dseza-accent-hover"> {/* Đảm bảo 'dseza-accent-hover' có trong tailwind.config.ts */}
              <Map size={isMobile ? 14 : 16} className="mr-1" />
              <span>{siteMapText}</span>
            </a>
            <button onClick={toggleLanguage} className="flex items-center hover:text-dseza-accent-hover">
              <Globe size={isMobile ? 14 : 16} className="mr-1" />
              <span>{langText}</span>
            </button>
            <a href="/login" className="flex items-center hover:text-dseza-accent-hover">
              <User size={isMobile ? 14 : 16} className="mr-1" />
              <span>{loginText}</span>
            </a>
          </div>
        </div>
      </div>

      {/* DsezaStaticHeader này sẽ được thay thế hoặc chỉnh sửa dựa trên header của file HTML tĩnh */}
      <DsezaStaticHeader currentLang={currentLang} />

      <div className="bg-white border-b border-border">
        <div className="container-custom py-3 md:py-2 flex justify-center sm:justify-end">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <input
              type="text"
              placeholder={searchText}
              className="w-full px-4 py-2 border border-input rounded-full pr-10 text-sm focus:ring-ring focus:border-ring outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-primary">
              <SearchIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;