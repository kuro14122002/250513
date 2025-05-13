// src/pages/Index.tsx
import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeaturedNews from "../components/FeaturedNews";
import IndustrialZones from "../components/IndustrialZones";
import InvestorInfo from "../components/InvestorInfo";
import InvestmentEnv from "../components/InvestmentEnv";
import Footer from "../components/Footer";
import DsezaHero from "../components/DsezaHero";

const Index = () => {
  const [currentLang, setCurrentLang] = useState("vi");

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    // Thêm logic thay đổi ngôn ngữ cho toàn bộ trang nếu cần
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main>
        {/* DSEZA Hero Section */}
        <div id="gioi-thieu">
          <DsezaHero currentLang={currentLang} />
        </div>

        {/* Các component của "danang-digital-hub" */}
        <Banner currentLang={currentLang} />
        <FeaturedNews currentLang={currentLang} />
        <IndustrialZones currentLang={currentLang} />
        <InvestorInfo currentLang={currentLang} />
        <InvestmentEnv currentLang={currentLang} />

        {/* Other sections */}
        <section id="tin-tuc" className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">
              {currentLang === 'vi' ? 'TIN TỨC' : 'NEWS'}
            </h2>
            <p className="text-center">
              {currentLang === 'vi' ? 'Nội dung phần tin tức...' : 'News content...'}
            </p>
          </div>
        </section>

        <section id="doanh-nghiep" className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">
              {currentLang === 'vi' ? 'DOANH NGHIỆP' : 'BUSINESSES'}
            </h2>
            <p className="text-center">
              {currentLang === 'vi' ? 'Nội dung phần doanh nghiệp...' : 'Business content...'}
            </p>
          </div>
        </section>

        <section id="cam-nang" className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">
              {currentLang === 'vi' ? 'CẨM NANG' : 'HANDBOOK'}
            </h2>
            <p className="text-center">
              {currentLang === 'vi' ? 'Nội dung phần cẩm nang...' : 'Handbook content...'}
            </p>
          </div>
        </section>

        <section id="hanh-chinh" className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">
              {currentLang === 'vi' ? 'HÀNH CHÍNH' : 'ADMINISTRATION'}
            </h2>
            <p className="text-center">
              {currentLang === 'vi' ? 'Nội dung phần hành chính...' : 'Administration content...'}
            </p>
          </div>
        </section>

        <section id="contact-section" className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">
              {currentLang === 'vi' ? 'LIÊN HỆ' : 'CONTACT'}
            </h2>
            <p className="text-center">
              {currentLang === 'vi' ? 'Thông tin liên hệ DSEZA...' : 'DSEZA contact information...'}
            </p>
          </div>
        </section>
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;