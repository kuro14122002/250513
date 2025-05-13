// src/components/DsezaStaticHeader.tsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For mobile menu

interface DsezaStaticHeaderProps {
  currentLang: string;
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
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (onNavLinkClick) {
      onNavLinkClick(targetId);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = document.getElementById('page-header')?.offsetHeight || 80;
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
    <div className="bg-dseza-gray-dark text-white">
      <div className="container-custom flex items-center justify-between py-[15px]">
        {/* Logo DSEZA */}
        <div className="flex items-center">
          <div className="logo-text-react">
            <div className="text-2xl font-black tracking-wider">DSEZA</div>
            <div className="text-[11px] font-medium tracking-[0.5px] leading-tight">INNOVATION HUB</div>
            <div className="text-[11px] font-medium tracking-[0.5px] leading-tight">SUSTAINABLE DEVELOPMENT</div>
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
                  className="font-medium text-sm hover:text-dseza-green transition-colors"
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
            href="#contact-section"
            onClick={(e) => handleNavClick(e, 'contact-section')}
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