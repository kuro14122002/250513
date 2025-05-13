
import { Building2, MapPin } from "lucide-react"; // Giữ lại các icon cần thiết

interface IndustrialZonesProps {
  currentLang: string;
}

const IndustrialZones = ({ currentLang }: IndustrialZonesProps) => {
  const zones = [
    {
      id: "dnhtp", // Khu Công nghệ Cao Đà Nẵng
      nameKey: "daNangHiTechPark", // Key để tra cứu tên đa ngôn ngữ
      image: "/placeholder-kcnc.jpg", // Thay bằng ảnh thực tế
      area: "1,128.4",
      companies: 32,
      occupancy: 42.85, // Giữ dạng số để tính toán thanh progress
      href: "#kcnc", // Link chi tiết
      names: {
        vi: "Khu Công nghệ Cao Đà Nẵng",
        en: "Da Nang Hi-Tech Park"
      }
    },
    {
      id: "hoakhanh",
      nameKey: "hoaKhanhIZ",
      image: "/placeholder-hoakhanh.jpg",
      area: "394", // Giữ nguyên định dạng chuỗi nếu không cần tính toán
      companies: 228,
      occupancy: 100,
      href: "#kcn-hoakhanh",
      names: {
        vi: "KCN Hòa Khánh",
        en: "Hoa Khanh Industrial Zone"
      }
    },
    {
      id: "danang", // KCN Đà Nẵng (An Đồn)
      nameKey: "daNangIZ",
      image: "/placeholder-danang.jpg",
      area: "50.1",
      companies: 45,
      occupancy: 100,
      href: "#kcn-danang",
      names: {
        vi: "KCN Đà Nẵng",
        en: "Da Nang Industrial Zone"
      }
    },
    {
      id: "hoacam",
      nameKey: "hoaCamIZ",
      image: "/placeholder-hoacam.jpg",
      area: "149.84",
      companies: 81,
      occupancy: 97.66,
      href: "#kcn-hoacam",
      names: {
        vi: "KCN Hòa Cầm",
        en: "Hoa Cam Industrial Zone"
      }
    },
    {
      id: "lienchieu",
      nameKey: "lienChieuIZ",
      image: "/placeholder-lienchieu.jpg",
      area: "289.35",
      companies: 36,
      occupancy: 69.07,
      href: "#kcn-lienchieu",
      names: {
        vi: "KCN Liên Chiểu",
        en: "Lien Chieu Industrial Zone"
      }
    },
    {
      id: "thuysandn", // KCN Dịch vụ Thủy sản Đà Nẵng
      nameKey: "fisheryServicesIZ",
      image: "/placeholder-thuysan.jpg",
      area: "50.63",
      companies: 56,
      occupancy: 100,
      href: "#kcn-dv-thuysan",
      names: {
        vi: "KCN Dịch vụ Thủy sản Đà Nẵng",
        en: "Da Nang Fishery Services Industrial Zone"
      }
    },
    {
      id: "itpark", // Khu Công nghệ Thông tin Tập trung
      nameKey: "itPark",
      image: "/placeholder-itpark.jpg",
      area: "131.1",
      companies: 5,
      occupancy: 31.82,
      href: "#kcn-cntt",
      names: {
        vi: "Khu Công nghệ Thông tin Tập trung",
        en: "Centralized Information Technology Park"
      }
    },
    {
      id: "hoakhanhexp", // KCN Hòa Khánh Mở rộng
      nameKey: "hoaKhanhExpandedIZ",
      image: "/placeholder-hoakhanh-mr.jpg",
      area: "132.34",
      companies: 42,
      occupancy: 100,
      href: "#kcn-hoakhanh-mr",
      names: {
        vi: "KCN Hòa Khánh Mở rộng",
        en: "Hoa Khanh Expanded Industrial Zone"
      }
    }
  ];

  // Hàm trợ giúp để lấy tên đúng theo ngôn ngữ
  const getZoneName = (zone: typeof zones[0]) => {
    return currentLang === "vi" ? zone.names.vi : zone.names.en;
  };

  return (
    <section className="py-10 bg-primary text-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6 md:mb-8">
        <h2 className="text-base md:text-lg font-bold">
            {currentLang === "vi" ? "KHU CÔNG NGHỆ CAO, TRUNG TÂM VI MẠCH BÁN DẪN VÀ TRÍ TUỆ NHÂN TẠO, CÁC KHU CÔNG NGHIỆP, KHU CNTT TẬP TRUNG, KHU THƯƠNG MẠI TỰ DO" : "HIGH-TECH PARKS, SEMICONDUCTOR AND ARTIFICIAL INTELLIGENCE CENTERS, INDUSTRIAL ZONES, CONCENTRATED IT PARKS, FREE TRADE ZONES"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {zones.map((zone) => (
            <div key={zone.id} className="bg-white rounded-lg overflow-hidden shadow-lg text-gray-800 flex flex-col transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative h-48 w-full"> {/* Tăng chiều cao ảnh */}
                <img
                  src={zone.image} // Hãy đảm bảo bạn có các ảnh này trong thư mục public hoặc import chúng
                  alt={getZoneName(zone)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold text-lg leading-tight shadow-sm">
                    {getZoneName(zone)}
                  </h3>
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin size={18} className="text-primary-dark flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">
                          {currentLang === "vi" ? "Diện tích (ha)" : "Area (ha)"}
                        </p>
                        <p className="font-semibold text-gray-700">{zone.area}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 text-sm">
                      <Building2 size={18} className="text-primary-dark flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500">
                          {currentLang === "vi" ? "Doanh nghiệp" : "Companies"}
                        </p>
                        <p className="font-semibold text-gray-700">{zone.companies}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="text-xs text-gray-500 mb-1">
                      {currentLang === "vi" ? "Tỷ lệ lấp đầy" : "Occupancy rate"}
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${zone.occupancy}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-xs text-gray-600 mt-1">{zone.occupancy}%</p>
                  </div>
                </div>

                <div className="mt-auto"> {/* Đẩy nút xuống dưới cùng */}
                  <a
                    href={zone.href}
                    className="block text-center bg-primary text-white py-2.5 px-4 rounded-md hover:bg-primary-dark focus:ring-4 focus:ring-primary/50 transition-colors duration-300 font-medium text-sm"
                  >
                    {currentLang === "vi" ? "Xem chi tiết" : "View details"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialZones;
