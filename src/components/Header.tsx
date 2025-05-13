// src/components/Header.tsx (Dự án React)
import React, { useState, useEffect } from 'react';
import { Globe, User, MapSigns, Search as SearchIcon } from 'lucide-react';
import DsezaStaticHeader from './DsezaStaticHeader';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderProps {
  currentLang: string;
  onLanguageChange: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLanguageChange }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const isMobile = useIsMobile(); // Hook này lấy từ dự án danang-digital-hub

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date): string => {
    const optionsDateMobileVi: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const optionsDateMobileEn: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };

    const commonDesktopOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long', // 'numeric' cho tiếng Việt để có dạng "tháng X"
      year: 'numeric',
    };
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };

    if (isMobile) {
      return new Intl.DateTimeFormat(currentLang === 'vi' ? 'vi-VN' : 'en-US', currentLang === 'vi' ? optionsDateMobileVi : optionsDateMobileEn).format(date);
    } else {
      let datePart;
      if (currentLang === 'vi') {
        const dayOfWeek = new Intl.DateTimeFormat('vi-VN', { weekday: 'long' }).format(date);
        const day = new Intl.DateTimeFormat('vi-VN', { day: 'numeric' }).format(date);
        const month = new Intl.DateTimeFormat('vi-VN', { month: 'numeric' }).format(date); // 'tháng X'
        const year = new Intl.DateTimeFormat('vi-VN', { year: 'numeric' }).format(date);
        datePart = `${dayOfWeek}, ngày ${day} tháng ${month} năm ${year}`;
      } else {
        datePart = new Intl.DateTimeFormat('en-US', commonDesktopOptions).format(date);
      }
      const timePart = new Intl.DateTimeFormat(currentLang === 'vi' ? 'vi-VN' : 'en-US', timeOptions).format(date);
      return `${datePart}, ${timePart}`;
    }
  };


  const toggleLanguage = () => {
    const newLang = currentLang === 'vi' ? 'en' : 'vi';
    onLanguageChange(newLang);
  };

  const siteMapText = currentLang === 'vi' ? 'Sơ đồ trang' : 'Site Map';
  const loginText = currentLang === 'vi' ? 'Đăng nhập' : 'Login';
  const langText = currentLang === 'vi' ? 'Tiếng Việt' : 'English';
  const searchText = currentLang === "vi" ? "Tìm kiếm..." : "Search...";

  return (
    <header id="page-header" className="w-full sticky top-0 z-[100] shadow-md bg-white"> {/* Thêm bg-white để đảm bảo nền */}
      {/* Top Bar - Giữ lại từ Dự án React */}
      {/* Sử dụng màu dseza-primary-dark hoặc một màu tối phù hợp từ Tailwind config */}
      <div className="bg-dseza-primary-dark text-white">
        <div className="container-custom flex flex-wrap justify-between items-center py-2 text-xs sm:text-sm">
          <div>{formatDate(currentDateTime)}</div>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a href="/sitemap" className="flex items-center hover:text-dseza-accent"> {/* text-dseza-accent */}
              <MapSigns size={isMobile ? 14 : 16} className="mr-1" />
              <span>{siteMapText}</span>
            </a>
            <button onClick={toggleLanguage} className="flex items-center hover:text-dseza-accent"> {/* text-dseza-accent */}
              <Globe size={isMobile ? 14 : 16} className="mr-1" />
              <span>{langText}</span>
            </button>
            <a href="/login" className="flex items-center hover:text-dseza-accent"> {/* text-dseza-accent */}
              <User size={isMobile ? 14 : 16} className="mr-1" />
              <span>{loginText}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Header tĩnh DSEZA đã được tái tạo và tích hợp */}
      <DsezaStaticHeader currentLang={currentLang} />

      {/* Phần Search Bar (tùy chọn, có thể tích hợp vào DsezaStaticHeader hoặc giữ riêng) */}
      {/* Ví dụ giữ riêng bên dưới DsezaStaticHeader */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-3 md:py-2 flex justify-center sm:justify-end"> {/* Căn giữa trên mobile, phải trên desktop */}
           <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <input
              type="text"
              placeholder={searchText}
              className="w-full px-4 py-2 border border-gray-300 rounded-full pr-10 text-sm focus:ring-dseza-primary focus:border-dseza-primary outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-dseza-primary">
              <SearchIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;