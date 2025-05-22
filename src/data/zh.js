export const zhData = {
  lastUpdated: "7 Apr 2025",
  titles: {
    meta: "個人資料",
    summary: "簡介",
    skills: "技能",
    languages: "語言能力",
    education: "教育背景",
    experience: "工作經驗",
    projects: "項目經歷",
    certifications: "證書",
    services: "會員資格及服務",
    awards: "獎項及榮譽",
  },
  meta: {
    name: "趙炳程 Leo",
    title: "全棧網頁開發者，香港理工大學網絡安全本科生",
    contact: {
      location: "香港九龍",
      email: "liyanqwq#gmail.com",
      website: "liyan.moe",
    },
  },
  summary:
    "香港理工大學資訊安全專業在讀，在網絡安全競賽和全棧網頁開發方面擁有豐富經驗。\n\n* 多項CTF競賽冠軍\n* 具備使用現代技術棧開發和維護大型網絡應用的經驗\n* 在滲透測試、數碼鑑證和算法競賽方面擁有扎實背景\n* 精通中文、英語和粵語的多語言專業人士",
  skills: {
    webDev: {
      title: "全棧網頁開發",
      items: [
        { name: "PHP", value: 90, group: "Backend", groupTitle: "後端", icon: "php" },
        { name: "Laravel", value: 85, group: "Framework", groupTitle: "框架", icon: "laravel" },
        { name: "TALL Stack", value: 80, group: "Framework", groupTitle: "框架", icon: "tailwind" },
        { name: "Python", value: 85, group: "Backend", groupTitle: "後端", icon: "py" },
        { name: "Flask", value: 75, group: "Framework", groupTitle: "框架", icon: "flask" },
        { name: "NodeJS", value: 80, group: "Backend", groupTitle: "後端", icon: "nodejs" },
        { name: "TypeScript", value: 85, group: "Language", groupTitle: "語言", icon: "ts" },
        { name: "Astro", value: 70, group: "Framework", groupTitle: "框架", icon: "astro" },
        { name: "HTML5", value: 95, group: "Frontend", groupTitle: "前端", icon: "html" },
        { name: "CSS", value: 92, group: "Frontend", groupTitle: "前端", icon: "css" },
        { name: "JavaScript", value: 90, group: "Frontend", groupTitle: "前端", icon: "js" },
        { name: "jQuery", value: 80, group: "Library", groupTitle: "庫", icon: "jquery" },
        { name: "Tailwind CSS", value: 90, group: "CSS", groupTitle: "CSS", icon: "tailwind" },
        { name: "RESTful API", value: 85, group: "API", groupTitle: "API", icon: "postman" },
        { name: "Git", value: 90, group: "DevOps", groupTitle: "DevOps", icon: "git" },
        { name: "Docker", value: 75, group: "DevOps", groupTitle: "DevOps", icon: "docker" },
        { name: "MySQL", value: 80, group: "Database", groupTitle: "數據庫", icon: "mysql" },
        { name: "MongoDB", value: 75, group: "Database", groupTitle: "數據庫", icon: "mongodb" },
      ],
    },
    programming: {
      title: "編程與數據分析",
      items: ["C++", "Python", "R", "Rust"],
    },
    cyberSecurity: {
      title: "網絡安全",
      categories: [
        {
          name: "滲透測試",
          level: 5,
          items: ["網頁", "逆向工程", "開源情報", "社會工程學", "API安全"],
        },
        {
          name: "數碼鑑證",
          level: 3,
          items: ["隱寫術", "網絡流量分析", "電腦/手機鑑證"],
        },
        {
          name: "紅隊",
          level: 1,
          items: ["Active Directory"],
        },
      ],
    },
  },
  languages: [
    { name: "中文", proficiency: "母語（普通話）", level: 100 },
    { name: "英語", proficiency: "熟練", level: 85 },
    { name: "粵語", proficiency: "中級", level: 70 },
  ],
  education: [
    {
      institution: "香港理工大學",
      degree: "B.Sc. in Information Security",
      period: "2023年9月 - 現在",
    },
  ],
  experience: [
    {
      company: "香港理工大學會計與金融學院",
      position: "實習生",
      period: "2024年12月 - 2025年1月",
      location: "香港",
      skills: ["Python", "機器學習", "數據分析", "自動化"],
      responsibilities: [
        "與研究團隊緊密合作解決各種挑戰。",
        "運用機器學習進行非結構化數據的特徵提取和分類。",
        "構建自動化系統執行複雜數據轉換。",
      ],
    },
    {
      company: "香港理工大學計算機系",
      position: "學生研究助理",
      period: "2024年1月 - 2024年5月",
      location: "香港",
      skills: ["HugoBlox", "TailwindCSS", "Vercel", "Git", "JavaScript"],
      responsibilities: [
        "使用HugoBlox、TailwindCSS和Vercel開發及維護團隊網站。",
      ],
    },
    {
      company: "深圳思迭科技有限公司（模時）",
      position: "維護工程師",
      period: "2021年10月 - 2022年12月",
      location: "遠程，中國深圳",
      skills: [
        "前端優化",
        "ICP合規",
        "內容過濾",
        "客戶管理",
        "JavaScript",
        "CSS",
      ],
      responsibilities: [
        "重構前端服務以優化網站在中國不同地區特定網絡環境下的速度。",
        "主導ICP合規流程並協助內容過濾。",
        "協助客戶管理。",
      ],
    },
    {
      company: "對岸科技（北京）有限公司",
      position: "首席技術官",
      period: "2021年3月 - 2022年12月",
      location: "遠程，中國北京",
      skills: ["Laravel", "PHP", "網絡基礎設施", "團隊領導", "合規", "MySQL"],
      responsibilities: [
        "獨立設計並開發VirtNation計劃並領導其運營。",
        "維護公司的網絡基礎設施。",
        "領導公司的合規實務。",
      ],
    },
  ],
  projects: [
    {
      name: "SGOJ",
      description: "算法競賽在線評測平台",
      period: "2020年5月 - 2022年12月",
      technologies: "Web, NodeJS, MongoDB, Git",
      details: [
        "基於Hydro重寫項目並優化評測流程，使其更符合最新的CCF（中國計算機學會）競賽標準。",
        "開發了多個Hydro的開源插件，其中一些被廣泛應用。",
      ],
    },
    {
      name: "VirtNation",
      description: "中國微型國家社區平台",
      period: "2021年7月 - 2022年11月",
      technologies: "Laravel, PHP, MySQL, Tailwind CSS",
      details: [
        "設計和開發了一個流暢、極簡的用戶界面平台。",
        "優化了中國不同地區用戶的頁面載入速度，並致力於中國內地互聯網合規。",
      ],
    },
  ],
  certifications: [
    {
      name: "業餘電台執照",
      issuer: "香港通訊事務管理局辦公室",
      date: "2024年11月",
    },
    {
      name: "網絡與信息安全管理工程師（中級）",
      issuer: "中華人民共和國工業和信息化部",
      date: "2025年3月",
    },
    {
      name: "遙控駕駛員證書（小型無人機）",
      issuer: "香港特別行政區政府民航處",
      date: "2025年3月",
    },
    {
      name: "Legacy JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Mar 2023",
    },
    {
      name: "Arctic Code Vault Contributor",
      issuer: "GitHub",
      date: "Feb 2020",
    },
  ],
  services: [
    {
      name: "活躍成員",
      issuer: "NuttyShell CTF Team",
      description: "香港理工大學",
      date: "2023年9月 - 現在",
    },
    {
      name: "會員",
      issuer: "中國計算機學會",
      date: "2022年2月",
    },
    {
      name: "會員",
      issuer: "中國數學會",
      date: "2022年2月",
    },
  ],
  awards: [
    {
      name: "冠軍",
      competition: "BSides HK CTF 2025",
      //   details: "BSides HK 網安攻防賽",
      date: "2025年4月",
      category: "CyberSecurity",
    },
    {
      name: "一等獎（港澳組冠軍）",
      competition: "2024 年「羊城杯」粵港澳大灣區網絡安全大賽決賽",
      //   details: "「羊城杯」粵港澳大灣區網絡安全大賽決賽冠軍（港澳組）",
      date: "2024年9月",
      category: "CyberSecurity",
    },
    {
      name: "銀獎（亞軍）",
      competition: "網絡攻防精英培訓暨攻防大賽",
      //   details: "香港網絡攻防精英培訓暨攻防大賽銀獎",
      date: "2024年8月",
      category: "CyberSecurity",
    },
    {
      name: "香港特區政府人才發展獎學金 (2023-24)",
      competition: "香港特別行政區政府教育局",
      details: "HKSARG Talent Development Scholarship",
      date: "2024年4月",
      category: "Scholarship",
    },
    {
      name: "冠軍",
      competition: "香港科技大學 Firebird CTF 2024",
      date: "2024年1月",
      category: "CyberSecurity",
    },
    {
      name: "銅獎（季軍，大專組）",
      competition: "香港網絡保安新生代奪旗挑戰賽",
      details: "HKCERT CTF 2023",
      date: "2023年12月",
      category: "CyberSecurity",
    },
    {
      name: "最佳提案",
      competition: "2022 年全國青少年模擬政協提案徵集活動",
      //   details: "2022 年全國青少年模擬政協提案徵集活動最佳提案",
      date: "2023年3月",
      category: "Academic",
    },
    {
      name: "銀牌",
      competition: "2021 ACM/ICPC Shanghai HMSPC",
      date: "2021年12月",
      category: "Programming",
    },
    {
      name: "二等獎（山東）",
      competition: "全國青少年信息學奧林匹克聯賽 (NOIP 2021)",
      //   details: "2021年全國青少年信息學奧林匹克聯賽二等獎",
      date: "2021年11月",
      category: "Programming",
    },
  ],
};

export default zhData;
