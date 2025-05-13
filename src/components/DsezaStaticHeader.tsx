// src/components/DsezaStaticHeader.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Cho mobile menu

interface DsezaStaticHeaderProps {
  currentLang: string;
  // Thêm hàm để xử lý click vào link, ví dụ để cuộn mượt
  onNavLinkClick?: (targetId: string) => void;
}

const DsezaStaticHeader: React.FC<DsezaStaticHeaderProps> = ({ currentLang, onNavLinkClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'gioi-thieu', vi: 'GIỚI THIỆU', en: 'INTRODUCTION' },
    { id: 'tin-tuc', vi: 'TIN TỨC', en: 'NEWS' },
    { id: 'doanh-nghiep', vi: 'DOANH NGHIỆP', en: 'BUSINESS' },
    { id: 'cam-nang', vi: 'CẨM NANG', en: 'HANDBOOK' },
    { id: 'hanh-chinh', vi: 'HÀNH CHÍNH', en: 'ADMINISTRATION' },
  ];

  const getLabel = (item: typeof navItems[0]) => {
    return currentLang === 'vi' ? item.vi : item.en;
  };

  const contactButtonText = currentLang === 'vi' ? 'LIÊN HỆ' : 'CONTACT';
  const dsezaLogoText = "DSEZA";
  const innovationHubText = "INNOVATION HUB";
  const sustainableDevelopmentText = "SUSTAINABLE DEVELOPMENT";

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>
    if (onNavLinkClick) {
      onNavLinkClick(targetId);
    } else {
      // Fallback nếu không có hàm xử lý cuộn từ props
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = document.getElementById('page-header')?.offsetHeight || 80; // Lấy chiều cao header chung
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
      }
    }
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };


  return (
    // Sử dụng class Tailwind cho màu nền --dark-gray
    <div className="bg-dseza-gray-dark text-white"> {/* Đảm bảo 'dseza-gray-dark' có trong tailwind.config.ts */}
      <div className="container-custom flex items-center justify-between py-[15px]"> {/* py-4 của tailwind là 1rem (16px) */}
        {/* Logo DSEZA */}
        <div className="flex items-center">
          {/* Thay bằng ảnh logo nếu có, ví dụ từ /public */}
          {/* <img src="/dseza_logo_dseza.png" alt="DSEZA Logo" className="h-10 mr-3"/> */}
          <div className="logo-text"> {/* Các class này có thể cần định nghĩa trong src/index.css nếu Tailwind không đủ */}
            <div className="text-2xl font-black tracking-wider">{dsezaLogoText}</div>
            <div className="text-[11px] font-medium tracking-[0.5px] leading-tight">{innovationHubText}</div>
            <div className="text-[11px] font-medium tracking-[0.5px] leading-tight">{sustainableDevelopmentText}</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex">
            {navItems.map(item => (
              <li key={item.id} className="mx-[15px]">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="font-medium text-sm hover:text-dseza-green transition-colors py-3 px-2" // Sử dụng dseza-green
                >
                  {getLabel(item)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden lg:block">
          <a
            href="#contact-section" // Sẽ cần section này trong Index.tsx
            onClick={(e) => handleNavClick(e, 'contact-section')}
            // Sử dụng Button component của shadcn/ui thay vì class .btn tự định nghĩa
            // Hoặc tái tạo style của .btn bằng Tailwind
            className="bg-dseza-green hover:bg-dseza-green-dark text-white font-bold py-2.5 px-6 rounded-full text-sm uppercase transition-colors"
          >
            {contactButtonText}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="text-white p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-dseza-gray-dark absolute top-full left-0 right-0 z-40 shadow-lg">
          <nav>
            <ul className="flex flex-col items-center py-4">
              {navItems.map(item => (
                <li key={item.id} className="w-full text-center">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="block font-medium text-sm hover:bg-[#333333] transition-colors py-3"
                  >
                    {getLabel(item)}
                  </a>
                </li>
              ))}
              <li className="w-full text-center mt-4">
                <a
                  href="#contact-section"
                  onClick={(e) => handleNavClick(e, 'contact-section')}
                  className="bg-dseza-green hover:bg-dseza-green-dark text-white font-bold py-2.5 px-6 rounded-full text-sm uppercase inline-block mb-2"
                >
                  {contactButtonText}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default DsezaStaticHeader;