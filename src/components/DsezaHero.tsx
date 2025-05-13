import React, { useState } from 'react';

interface DsezaHeroProps {
  currentLang: string;
}

const DsezaHero: React.FC<DsezaHeroProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState('bql'); // Default active tab is 'bql'

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Text content based on language
  const title = currentLang === 'vi' 
    ? 'BAN QUẢN LÝ KHU CÔNG NGHỆ CAO VÀ CÁC KHU CÔNG NGHIỆP ĐÀ NẴNG' 
    : 'DANANG HI-TECH PARK AND INDUSTRIAL ZONES AUTHORITY';
  
  const learnMoreText = currentLang === 'vi' ? 'TÌM HIỂU THÊM' : 'LEARN MORE';
  const aboutDanangTab = currentLang === 'vi' ? 'VỀ ĐÀ NẴNG' : 'ABOUT DANANG';
  const aboutAuthorityTab = currentLang === 'vi' ? 'VỀ BAN QUẢN LÝ' : 'ABOUT THE AUTHORITY';
  
  // Stats content
  const stats = [
    { number: '32', desc: currentLang === 'vi' ? 'DOANH NGHIỆP' : 'BUSINESSES' },
    { number: '42,85%', desc: currentLang === 'vi' ? 'Tỉ lệ lấp đầy' : 'Occupancy rate' },
    { number: '1.128,4 ha', desc: currentLang === 'vi' ? 'Diện tích' : 'Area' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom main-content flex flex-col lg:flex-row">
        <div className="content-left lg:w-3/5 lg:pr-16 mb-10 lg:mb-0">
          <h1 className="text-5xl font-bold leading-tight mb-12 uppercase text-dseza-gray-dark">
            {title.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word} {i % 3 === 2 && i !== title.split(' ').length - 1 ? <br /> : ' '}
              </React.Fragment>
            ))}
          </h1>

          <div className="statistics">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number" data-target-value={stat.number}>{stat.number}</div>
                <div className="stat-desc">{stat.desc}</div>
              </div>
            ))}
          </div>

          <div className="bottom-left-controls">
            <div className="learn-more">
              <a href="#about-section" className="btn-learn-more">
                {learnMoreText}
              </a>
              <span className="arrow-circle">→</span>
            </div>
            <div className="pagination">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>

        <div className="content-right lg:w-2/5 lg:border-l lg:border-gray-200 lg:pl-16">
          <div className="navigation-tabs">
            <a 
              href="#" 
              className={`tab ${activeTab === 'da-nang' ? 'active' : ''}`} 
              data-tab="da-nang"
              onClick={(e) => {
                e.preventDefault();
                handleTabClick('da-nang');
              }}
            >
              {aboutDanangTab}
            </a>
            <a 
              href="#" 
              className={`tab ${activeTab === 'bql' ? 'active' : ''}`} 
              data-tab="bql"
              onClick={(e) => {
                e.preventDefault();
                handleTabClick('bql');
              }}
            >
              {aboutAuthorityTab}
            </a>
          </div>

          <div className="info-sections">
            <div 
              className="tab-content" 
              id="da-nang-content" 
              style={{ display: activeTab === 'da-nang' ? 'block' : 'none' }}
            >
              <div className="section">
                <h2>
                  {currentLang === 'vi' ? 'GIỚI THIỆU ĐÀ NẴNG' : 'ABOUT DANANG'}
                </h2>
                <p>
                  {currentLang === 'vi' 
                    ? 'Đây là nội dung giới thiệu về Đà Nẵng...' 
                    : 'This is content introducing Danang...'}
                </p>
              </div>
              <div className="section">
                <h2>
                  {currentLang === 'vi' ? 'TIỀM NĂNG ĐẦU TƯ' : 'INVESTMENT POTENTIAL'}
                </h2>
                <p>
                  {currentLang === 'vi' 
                    ? 'Đây là nội dung về tiềm năng đầu tư tại Đà Nẵng...' 
                    : 'This is content about investment potential in Danang...'}
                </p>
              </div>
            </div>

            <div 
              className="tab-content" 
              id="bql-content" 
              style={{ display: activeTab === 'bql' ? 'block' : 'none' }}
            >
              <div className="section">
                <h2>
                  {currentLang === 'vi' ? 'CHỨC NĂNG' : 'FUNCTIONS'}
                </h2>
                <p>
                  {currentLang === 'vi' 
                    ? 'Nội dung chi tiết về chức năng...' 
                    : 'Detailed content about functions...'}
                </p>
              </div>
              <div className="section">
                <h2>
                  {currentLang === 'vi' ? 'NHIỆM VỤ' : 'TASKS'}
                </h2>
                <p>
                  {currentLang === 'vi' 
                    ? 'Nội dung chi tiết về nhiệm vụ...' 
                    : 'Detailed content about tasks...'}
                </p>
              </div>
              <div className="section">
                <h2>
                  {currentLang === 'vi' ? 'QUYỀN HẠN' : 'AUTHORITY'}
                </h2>
                <p>
                  {currentLang === 'vi' 
                    ? 'Nội dung chi tiết về quyền hạn...' 
                    : 'Detailed content about authority...'}
                </p>
              </div>
              <div className="section">
                <h2>
                  {currentLang === 'vi' ? 'SƠ ĐỒ TỔ CHỨC' : 'ORGANIZATIONAL CHART'}
                </h2>
                <p>
                  {currentLang === 'vi' 
                    ? 'Nội dung chi tiết về sơ đồ tổ chức...' 
                    : 'Detailed content about organizational chart...'}
                </p>
              </div>
              <div className="section">
                <h2>
                  {currentLang === 'vi' ? 'ĐƠN VỊ TRỰC THUỘC' : 'AFFILIATED UNITS'}
                </h2>
                <p>
                  {currentLang === 'vi' 
                    ? 'Nội dung chi tiết về đơn vị trực thuộc...' 
                    : 'Detailed content about affiliated units...'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DsezaHero; 