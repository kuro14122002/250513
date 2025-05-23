
import { Phone, Mail, MapPin, Facebook, Globe } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface FooterProps {
  currentLang: string;
}

const Footer = ({ currentLang }: FooterProps) => {
  const visitCount = Math.floor(Math.random() * 100000) + 50000;
  const isMobile = useIsMobile();
  
  return (
    <footer>
      <div className="bg-primary text-white py-6 md:py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">
                {currentLang === "vi" ? "Thông Tin Liên Hệ" : "Contact Information"}
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start">
                  <MapPin size={isMobile ? 18 : 20} className="mr-2 md:mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm md:text-base">
                    {currentLang === "vi" 
                      ? "Số 15 Đường Nguyễn Hữu Thọ, Phường Hòa Thuận Tây, Quận Hải Châu, TP. Đà Nẵng" 
                      : "15 Nguyen Huu Tho Street, Hoa Thuan Tay Ward, Hai Chau District, Da Nang City"}
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone size={isMobile ? 18 : 20} className="mr-2 md:mr-3 flex-shrink-0" />
                  <p className="text-sm md:text-base">(0236) 3 612 287 - 3 822 892</p>
                </div>
                <div className="flex items-center">
                  <Mail size={isMobile ? 18 : 20} className="mr-2 md:mr-3 flex-shrink-0" />
                  <p className="text-sm md:text-base break-all">banquanly@dhpiza.danang.gov.vn</p>
                </div>
                <div className="flex items-center">
                  <Globe size={isMobile ? 18 : 20} className="mr-2 md:mr-3 flex-shrink-0" />
                  <p className="text-sm md:text-base">www.dhpiza.danang.gov.vn</p>
                </div>
                <div className="flex items-center">
                  <Facebook size={isMobile ? 18 : 20} className="mr-2 md:mr-3 flex-shrink-0" />
                  <a href="#" className="text-sm md:text-base hover:underline">Facebook DSEZA</a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="md:col-span-2">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{currentLang === "vi" ? "Bản Đồ" : "Map"}</h3>
              <div className="h-48 md:h-64 bg-gray-200 rounded-lg">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm md:text-base">
                    {currentLang === "vi" ? "Bản đồ vị trí" : "Location Map"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="bg-primary-dark text-white py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
            <div className="text-xs md:text-sm">
              <p>
                {currentLang === "vi" 
                  ? "Cơ quan chủ quản: Ban Quản lý Khu Công nghệ cao và các Khu Công nghiệp Đà Nẵng" 
                  : "Authority: Da Nang Hi-Tech Park and Industrial Zones Authority"}
              </p>
              <p>
                {currentLang === "vi" 
                  ? "Giấy phép thiết lập trang tin điện tử số 12/GP-TTĐT cấp ngày 20/05/2023" 
                  : "Electronic information page license No. 12/GP-TTĐT issued on May 20, 2023"}
              </p>
            </div>
            <div className="text-xs md:text-sm">
              <p>© 2023 DSEZA. {currentLang === "vi" ? "Bản quyền." : "All rights reserved."}</p>
              <p>{currentLang === "vi" ? "Lượt truy cập" : "Visitors"}: {visitCount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
