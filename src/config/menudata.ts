// src/config/menuData.ts

// Định nghĩa một kiểu cơ bản cho tất cả các mục menu
export interface BaseMenuItem {
  id: string;
  labelVi: string;
  labelEn: string;
  href?: string; // href là tùy chọn, vì tiêu đề cột có thể không có href
  isTitle?: boolean; // Để đánh dấu một mục là tiêu đề cho một nhóm con
  children?: RecursiveMenuItem[]; // Cho phép lồng nhau đệ quy
}

// Kiểu đệ quy cho các mục menu
export type RecursiveMenuItem = BaseMenuItem; // Hiện tại BaseMenuItem đã đủ

// Dữ liệu menu chính
export const menuData: RecursiveMenuItem[] = [
  // 1. Giới thiệu
  {
    id: "gioi-thieu-parent",
    labelVi: "Giới thiệu",
    labelEn: "Introduction",
    href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/gioi-thieu/",
    children: [
      {
        id: "gioi-thieu-col-1",
        labelVi: "Giới thiệu",
        labelEn: "Introduction",
        isTitle: true, // Đây là tiêu đề cột
        children: [
          { id: "thu-ngo", labelVi: "Thư ngỏ", labelEn: "Welcome Letter", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/thu-ngo/" },
          { id: "tong-quan-da-nang", labelVi: "Tổng quan về TP. Đà Nẵng", labelEn: "Overview of Da Nang City", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/tong-quan-ve-tpda-nang/" },
          {
            id: "tong-quan-bql-group", // Đổi ID để rõ ràng hơn là một nhóm
            labelVi: "Tổng quan về Ban Quản lý",
            labelEn: "About DSEZA",
            href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/gioi-thieu/tong-quan-ve-ban-quan-ly/",
            children: [ // Các mục này giờ là con của "tong-quan-bql-group"
              { id: "chuc-nang-bql", labelVi: "Chức năng, nhiệm vụ, quyền hạn Ban Quản lý", labelEn: "Functions, Tasks, Powers of DSEZA", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/chuc-nang-nhiem-vu-quyen-han-ban-quan-ly/" },
              { id: "cac-phong-ban", labelVi: "Các phòng ban", labelEn: "Departments", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/cac-phong-ban/" },
              { id: "don-vi-truc-thuoc", labelVi: "Đơn vị trực thuộc", labelEn: "Affiliated Units", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/don-vi-truc-thuoc/" },
            ]
          },
        ]
      },
      {
        id: "khu-hanh-chinh-col-2",
        labelVi: "Khu hành chính",
        labelEn: "Administrative Areas",
        isTitle: true, // Đây là tiêu đề cột
        children: [
          { id: "kcnc-da-nang", labelVi: "Khu công nghệ cao Đà Nẵng", labelEn: "Da Nang Hi-Tech Park", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghe-cao-da-nang/" },
          { id: "kttmd-da-nang", labelVi: "Khu thương mại tự do Đà Nẵng", labelEn: "Da Nang Free Trade Zone", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-thuong-mai-tu-do-da-nang/" },
          { id: "kcntt-tap-trung", labelVi: "Khu CNTT tập trung", labelEn: "IT Park", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghe-thong-tin-tap-trung/" },
          {
            id: "cac-kcn-da-nang-group", // Đổi ID
            labelVi: "Các Khu công nghiệp Đà Nẵng",
            labelEn: "Da Nang Industrial Zones",
            href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/gioi-thieu/khu-hanh-chinh/cac-khu-cong-nghiep-da-nang/",
            children: [ // Các mục này là con của "cac-kcn-da-nang-group"
              { id: "kcn-hoa-ninh", labelVi: "Khu công nghiệp Hòa Ninh", labelEn: "Hoa Ninh Industrial Park", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghiep-hoa-ninh/" },
              { id: "kcn-hoa-khanh", labelVi: "Khu công nghiệp Hòa Khánh", labelEn: "Hoa Khanh Industrial Park", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghiep-hoa-khanh/" },
              { id: "kcn-hoa-khanh-mr", labelVi: "Khu công nghiệp Hòa Khánh mở rộng", labelEn: "Hoa Khanh Expanded Industrial Park", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghiep-hoa-khanh-mo-rong/" },
              { id: "kcn-hoa-cam", labelVi: "Khu công nghiệp Hòa Cầm", labelEn: "Hoa Cam Industrial Park", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghiep-hoa-cam/" },
              { id: "kcn-lien-chieu", labelVi: "Khu công nghiệp Liên Chiểu", labelEn: "Lien Chieu Industrial Park", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghiep-lien-chieu/" },
              { id: "kcn-dv-thuy-san", labelVi: "Khu công nghiệp Dịch vụ Thủy sản Đà Nẵng", labelEn: "Da Nang Fishery Services Industrial Park", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghiep-dich-vu-thuy-san-da-nang/" },
              { id: "kcn-da-nang", labelVi: "Khu công nghiệp Đà Nẵng", labelEn: "Da Nang Industrial Park", href: "https://dseza.danang.gov.vn/chi-tiet-tin-tuc/khu-cong-nghiep-da-nang/" },
            ]
          },
        ]
      }
    ]
  },
  // 2. Tin tức
  {
    id: "tin-tuc-parent",
    labelVi: "Tin tức",
    labelEn: "News",
    href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/",
    children: [
      {
        id: "tin-tuc-su-kien-col-1",
        labelVi: "Tin tức | Sự kiện",
        labelEn: "News | Events",
        isTitle: true,
        children: [
          { id: "dt-htqt", labelVi: "Đầu tư - Hợp tác Quốc tế", labelEn: "Investment - International Cooperation", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/dau-tu-hop-tac-quoc-te/" },
          { id: "doanh-nghiep-news", labelVi: "Doanh nghiệp", labelEn: "Business News", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/doanh-nghiep/" },
          { id: "chuyen-doi-so-news", labelVi: "Chuyển đổi số", labelEn: "Digital Transformation", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/chuyen-doi-so/" },
          { id: "dt-utkn", labelVi: "Đào tạo, Ươm tạo Khởi nghiệp", labelEn: "Startup Training & Incubation", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/dao-tao-uom-tao-khoi-nghiep/" },
          { id: "hd-bql", labelVi: "Hoạt động Ban Quản lý", labelEn: "DSEZA Activities", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/hoat-dong-ban-quan-ly/" },
          { id: "tin-khac", labelVi: "Tin khác", labelEn: "Other News", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/tin-khac/" },
        ]
      },
      {
        id: "xem-them-col-2",
        labelVi: "Xem thêm",
        labelEn: "More",
        isTitle: true,
        children: [
          { id: "lich-cong-tac", labelVi: "Lịch công tác", labelEn: "Work Schedule", href: "https://dseza.danang.gov.vn/lich-cong-tac/" },
          { id: "thong-bao", labelVi: "Thông báo", labelEn: "Announcements", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/thong-bao/" },
          { id: "thong-tin-bao-chi", labelVi: "Thông tin báo chí", labelEn: "Press Information", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/tin-tuc/thong-tin-bao-chi/" },
        ]
      }
    ]
  },
  // 3. Doanh nghiệp
  {
    id: "doanh-nghiep-parent",
    labelVi: "Doanh nghiệp",
    labelEn: "Business",
    href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/doanh-nghiep/",
    children: [
      {
        id: "bao-cao-col-1",
        labelVi: "Báo cáo",
        labelEn: "Reports",
        isTitle: true,
        children: [
          { id: "bc-tt-dseza", labelVi: "Báo cáo trực tuyến về DSEZA", labelEn: "Online Report on DSEZA", href: "https://maps.dhpiza.vn/login?ReturnUrl=%2Fadmin%2Fbaocaonhadautu%2Fyeucaubaocao" },
          { id: "bc-gsdgd", labelVi: "Báo cáo giám sát và đánh giá đầu tư", labelEn: "Investment Monitoring & Evaluation Report", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/doanh-nghiep/bao-cao-giam-sat-va-danh-gia-dau-tu/" },
          { id: "mau-bbbc", labelVi: "Mẫu | Bảng biểu báo cáo", labelEn: "Report Templates | Forms", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/doanh-nghiep/mau-bang-bieu-bao-cao/" },
        ]
      },
      {
        id: "xem-them-dn-col-2",
        labelVi: "Xem thêm",
        labelEn: "More",
        isTitle: true,
        children: [
          { id: "tt-hs-dlmt", labelVi: "Thủ tục | Hồ sơ | Dữ liệu môi trường", labelEn: "Procedures | Dossiers | Environmental Data", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/doanh-nghiep/thu-tuc-ho-so-du-lieu-moi-truong/" },
          { id: "thong-ke-dn", labelVi: "Thống kê doanh nghiệp", labelEn: "Business Statistics", href: "https://dseza.danang.gov.vn/thong-ke-doanh-nghiep/" },
          { id: "tuyen-dung", labelVi: "Tuyển dụng", labelEn: "Recruitment", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/doanh-nghiep/tuyen-dung/" },
        ]
      }
    ]
  },
  // 4. Cẩm nang đầu tư
  {
    id: "cam-nang-dau-tu",
    labelVi: "Cẩm nang đầu tư",
    labelEn: "Investment Guide",
    href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/cam-nang-dau-tu/",
  },
  // 5. Văn bản
  {
    id: "van-ban-parent",
    labelVi: "Văn bản",
    labelEn: "Documents",
    href: "https://dseza.danang.gov.vn/van-ban/",
    children: [
      {
        id: "vb-phap-luat-col-1",
        labelVi: "Văn bản pháp luật",
        labelEn: "Legal Documents",
        isTitle: true,
        children: [
          { id: "vb-pq-tw", labelVi: "Văn bản pháp quy trung ương", labelEn: "Central Legal Documents", href: "https://dseza.danang.gov.vn/van-ban/van-ban-phap-quy-tw/" },
          { id: "vb-pq-dp", labelVi: "Văn bản pháp quy địa phương", labelEn: "Local Legal Documents", href: "https://dseza.danang.gov.vn/van-ban/van-ban-phap-quy-dia-phuong/" },
          { id: "vb-cddh", labelVi: "Văn bản chỉ đạo điều hành", labelEn: "Directive Documents", href: "https://dseza.danang.gov.vn/van-ban/van-ban-chi-dao-dieu-hanh/" },
          { id: "vb-cchc-docs", labelVi: "Văn bản CCHC", labelEn: "PAR Documents", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/van-ban/van-ban-cai-cach-hanh-chinh/" },
        ]
      },
      {
        id: "vb-khac-col-2",
        labelVi: "Văn bản khác",
        labelEn: "Other Documents",
        isTitle: true,
        children: [
          { id: "vb-huong-dan", labelVi: "Văn bản hướng dẫn", labelEn: "Guidance Documents", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/van-ban/van-ban-huong-dan/" },
          { id: "gop-y-dtvb", labelVi: "Góp ý dự thảo văn bản", labelEn: "Feedback on Draft Documents", href: "https://dseza.danang.gov.vn/gop-y-du-thao-van-ban/" },
        ]
      }
    ]
  },
  // 6. Cải cách hành chính
  {
    id: "cchc-parent",
    labelVi: "Cải cách hành chính",
    labelEn: "Administrative Reform",
    href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/moi-truong-dau-tu/cai-cach-hanh-chinh/",
    children: [
      {
        id: "ud-dv-col-1",
        labelVi: "Ứng dụng và dịch vụ",
        labelEn: "Applications and Services",
        isTitle: true,
        children: [
          { id: "dvctt", labelVi: "Dịch vụ công trực tuyến", labelEn: "Online Public Services", href: "https://dichvucong.danang.gov.vn/web/guest/dich-vu-cong?p_p_id=dichvucong_WAR_dngdvcportlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_count=1&_dichvucong_WAR_dngdvcportlet_jspPage=%2Fhtml%2Fdichvucongtructuyen%2Fdanhsachdichvucong.jsp&_dichvucong_WAR_dngdvcportlet_idCoQuan=703&_dichvucong_WAR_dngdvcportlet_tenCoQuan=Ban%20Qu%E1%BA%A3n%20l%C3%BD%20Khu%20c%C3%B4ng%20ngh%E1%BB%87%20cao%20v%C3%A0%20c%C3%A1c%20Khu%20c%C3%B4ng%20nghi%E1%BB%87p" },
          { id: "bcci", labelVi: "Bưu chính công ích", labelEn: "Public Postal Services", href: "https://egov.danang.gov.vn/dailyDVc" },
          { id: "tra-cuu-hs", labelVi: "Tra cứu hồ sơ", labelEn: "Dossier Lookup", href: "https://dichvucong.danang.gov.vn/web/guest/tra-cuu-ho-so" },
          { id: "dat-lich-hen", labelVi: "Đặt lịch hẹn giao dịch trực tuyến", labelEn: "Online Appointment Booking", href: "http://49.156.54.87/index.php?option=com_hengio&view=hengioonline&task=formdangkyonline&tmpl=widget" },
          { id: "danh-gia-dv", labelVi: "Đánh giá chất lượng dịch vụ HCC", labelEn: "Service Quality Assessment", href: "https://dichvucong.danang.gov.vn/web/guest/-anh-gia" },
        ]
      },
      {
        id: "vb-cchc-col-2",
        labelVi: "Văn bản",
        labelEn: "Documents",
        isTitle: true,
        children: [
          { id: "tthc", labelVi: "Thủ tục hành chính", labelEn: "Administrative Procedures", href: "https://dichvucong.danang.gov.vn/web/guest/thu-tuc-hanh-chinh?p_p_id=thutuchanhchinh_WAR_dngdvcportlet&p_p_lifecycle=1&p_p_state=normal&p_p_mode=view&_thutuchanhchinh_WAR_dngdvcportlet_javax.portlet.action=searchThuTuc&_thutuchanhchinh_WAR_dngdvcportlet_idCoQuan=703&_thutuchanhchinh_WAR_dngdvcportlet_danhMucBanDau=1" },
          { id: "qt-tthc", labelVi: "Quy trình thực hiện thủ tục hành chính", labelEn: "Administrative Procedure Process", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/danh-cho-nha-dau-tu/quy-trinh-thuc-hien-thu-tuc-hanh-chinh/" },
          { id: "qt-lvdt", labelVi: "Quy trình lĩnh vực đầu tư", labelEn: "Investment Field Process", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/danh-cho-nha-dau-tu/quy-trinh-linh-vuc-dau-tu/" },
          { id: "vb-cchc-list", labelVi: "Văn bản cải cách hành chính", labelEn: "PAR Documents", href: "https://dseza.danang.gov.vn/danh-sach-tin-tuc/van-ban/van-ban-cai-cach-hanh-chinh/" },
        ]
      }
    ]
  },
];