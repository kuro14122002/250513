// src/pages/Index.tsx
import { useState } from "react";
import Header from "../components/Header"; // Component Header đã cập nhật
import Banner from "../components/Banner";
import FeaturedNews from "../components/FeaturedNews";
import IndustrialZones from "../components/IndustrialZones";
import InvestorInfo from "../components/InvestorInfo";
import InvestmentEnv from "../components/InvestmentEnv";
import Footer from "../components/Footer";
// ... (import các component khác nếu có)

// Ví dụ về các section mà DsezaStaticHeader có thể link tới
const DsezaGioiThieuSection = () => (
  <section id="gioi-thieu" className="py-16 bg-gray-50 min-h-[400px]">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">GIỚI THIỆU DSEZA</h2>
      {/* Nội dung phần giới thiệu DSEZA */}
      <p className="text-center">Nội dung giới thiệu về Ban Quản Lý Khu Công Nghệ Cao và Các Khu Công Nghiệp Đà Nẵng...</p>
      <p className="text-center mt-4">Đây là phần bạn sẽ điền nội dung tương ứng với mục "GIỚI THIỆU" trong menu của DSEZA.</p>
    </div>
  </section>
);

const DsezaTinTucSection = () => (
  <section id="tin-tuc" className="py-16 min-h-[400px]">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">TIN TỨC</h2>
      <p className="text-center">Nội dung phần tin tức...</p>
    </div>
  </section>
);
const DsezaDoanhNghiepSection = () => (
  <section id="doanh-nghiep" className="py-16 bg-gray-50 min-h-[400px]">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">DOANH NGHIỆP</h2>
      <p className="text-center">Nội dung phần doanh nghiệp...</p>
    </div>
  </section>
);
const DsezaCamNangSection = () => (
  <section id="cam-nang" className="py-16 min-h-[400px]">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">CẨM NANG</h2>
      <p className="text-center">Nội dung phần cẩm nang...</p>
    </div>
  </section>
);
const DsezaHanhChinhSection = () => (
  <section id="hanh-chinh" className="py-16 bg-gray-50 min-h-[400px]">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">HÀNH CHÍNH</h2>
      <p className="text-center">Nội dung phần hành chính...</p>
    </div>
  </section>
);
// Placeholder cho phần liên hệ nếu nút "LIÊN HỆ" trong header trỏ tới
const DsezaContactSection = () => (
  <section id="contact-section" className="py-16 min-h-[400px]">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-center text-dseza-primary mb-8">LIÊN HỆ</h2>
      <p className="text-center">Thông tin liên hệ DSEZA...</p>
    </div>
  </section>
);


const Index = () => {
  const [currentLang, setCurrentLang] = useState("vi");

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    // Thêm logic thay đổi ngôn ngữ cho toàn bộ trang nếu cần
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100"> {/* Hoặc màu nền bạn muốn */}
      <Header currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      <main>
        {/* Các component của "danang-digital-hub" */}
        <Banner currentLang={currentLang} />
        <FeaturedNews currentLang={currentLang} />
        <IndustrialZones currentLang={currentLang} />
        <InvestorInfo currentLang={currentLang} />
        <InvestmentEnv currentLang={currentLang} />

        {/* Các section mới tương ứng với menu DSEZA tĩnh */}
        {/* Bạn có thể thay thế các component này bằng nội dung thực tế */}
        {/* Hoặc tích hợp nội dung DSEZA tĩnh vào các component hiện có của danang-digital-hub */}
        <div id="gioi-thieu"> {/* Wrapper div với ID để smooth scroll */}
           {/* Đây là nơi bạn sẽ đặt nội dung chính của trang mà header DSEZA tĩnh link tới */}
           {/* Ví dụ, nếu "GIỚI THIỆU" trong menu DSEZA tĩnh là phần đầu trang này: */}
           <DsezaGioiThieuSection />
        </div>

        <DsezaTinTucSection />
        <DsezaDoanhNghiepSection />
        <DsezaCamNangSection />
        <DsezaHanhChinhSection />
        <DsezaContactSection/>


        {/* ... (Các sections/components khác của trang Index.tsx) ... */}
      </main>
      <Footer currentLang={currentLang} />
    </div>
  );
};

export default Index;