// src/components/DsezaStaticHeader.tsx
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react'; // Icon cho menu mobile

interface DsezaStaticHeaderProps {
  currentLang: string;
  // Thêm các props khác nếu cần, ví dụ: onContactClick
}

const DsezaStaticHeader: React.FC<DsezaStaticHeaderProps> = ({ currentLang }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'gioi-thieu', labelKey: 'INTRODUCTION', vi: 'GIỚI THIỆU', en: 'INTRODUCTION', href: '#gioi-thieu' },
    { id: 'tin-tuc', labelKey: 'NEWS', vi: 'TIN TỨC', en: 'NEWS', href: '#tin-tuc' },
    { id: 'doanh-nghiep', labelKey: 'BUSINESS', vi: 'DOANH NGHIỆP', en: 'BUSINESS', href: '#doanh-nghiep' },
    { id: 'cam-nang', labelKey: 'HANDBOOK', vi: 'CẨM NANG', en: 'HANDBOOK', href: '#cam-nang' },
    { id: 'hanh-chinh', labelKey: 'ADMINISTRATION', vi: 'HÀNH CHÍNH', en: 'ADMINISTRATION', href: '#hanh-chinh' },
  ];

  const getLabel = (item: typeof navItems[0]) => {
    return currentLang === 'vi' ? item.vi : item.en;
  };

  const contactButtonText = currentLang === 'vi' ? 'LIÊN HỆ' : 'CONTACT';
  const dsezaLogoText = "DSEZA";
  const innovationHubText = "INNOVATION HUB";
  const sustainableDevelopmentText = "SUSTAINABLE DEVELOPMENT";

  // Tailwind CSS classes tương ứng với style.css của header DSEZA
  // bg-dark-gray tương ứng với background-color: var(--dark-gray);
  // text-white tương ứng với color: var(--white);
  // py-4 tương ứng với padding: 15px 0; (Tailwind's py-4 là 1rem = 16px)
  // container-custom là class đã có trong dự án React
  // items-center, justify-between là của Flexbox
  // font-black tương ứng font-weight: 900;
  // tracking-wider tương ứng letter-spacing: 1px;
  // text-xs tương ứng font-size: 11px; (Tailwind's text-xs là 0.75rem = 12px, cần điều chỉnh nếu muốn chính xác 11px)
  // hover:text-primary đã có trong NavLink của dự án React (màu --primary-color: #4B7D3F của bạn)

  return (
    <div className="bg-[#222] text-white"> {/* --dark-gray */}
      <div className="container-custom flex items-center justify-between py-4">
        {/* Logo DSEZA */}
        <div className="logo flex items-center">
          {/* Nếu có file ảnh logo, hãy dùng <img src="/dseza_logo_dseza.png" alt="DSEZA Logo" className="h-10 mr-3"/> */}
          {/* Giả sử bạn có logo này trong public/dseza_logo_dseza.png */}
          <img src="/dseza_logo_dseza.png" alt="DSEZA Logo" className="h-12 mr-3" /> {/* Điều chỉnh kích thước nếu cần */}
          <div className="logo-text">
            <div className="main-text text-2xl font-black tracking-wider">{dsezaLogoText}</div>
            <div className="sub-text text-[11px] font-medium tracking-wide leading-tight">{innovationHubText}</div>
            <div className="sub-text text-[11px] font-medium tracking-wide leading-tight">{sustainableDevelopmentText}</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="main-nav hidden lg:flex flex-grow justify-center">
          <ul className="flex">
            {navItems.map(item => (
              <li key={item.id} className="mx-2 xl:mx-4">
                {/* Sử dụng Link của React Router nếu đây là navigation trong SPA */}
                {/* <Link to={item.href} className="font-medium text-sm hover:text-primary-DEFAULT transition-colors py-3 px-2"> */}
                <a href={item.href} className="font-medium text-sm hover:text-[#4B7D3F] transition-colors py-3 px-2">
                  {getLabel(item)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="contact-button hidden lg:block">
          <a
            href="#contact-section" // Thay thế bằng link hoặc hành động thực tế
            className="btn bg-[#4B7D3F] hover:bg-[#3A612F] text-white font-bold py-2 px-6 rounded-full text-sm uppercase"
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
        <div className="lg:hidden bg-[#222] absolute top-full left-0 right-0 z-40 shadow-lg">
          <nav>
            <ul className="flex flex-col items-center py-4">
              {navItems.map(item => (
                <li key={item.id} className="w-full text-center">
                  <a
                    href={item.href}
                    className="block font-medium text-sm hover:bg-[#333] transition-colors py-3"
                    onClick={() => setIsMobileMenuOpen(false)} // Đóng menu khi click
                  >
                    {getLabel(item)}
                  </a>
                </li>
              ))}
              <li className="w-full text-center mt-4">
                <a
                  href="#contact-section" // Thay thế
                  className="btn bg-[#4B7D3F] hover:bg-[#3A612F] text-white font-bold py-2 px-6 rounded-full text-sm uppercase inline-block"
                  onClick={() => setIsMobileMenuOpen(false)}
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