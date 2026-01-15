export const enData = {
  lastUpdated: "16 Jan 2026",
  titles: {
    meta: "Personal Information",
    summary: "Summary",
    skills: "Skills",
    languages: "Languages",
    education: "Education",
    experience: "Work Experience",
    projects: "Projects",
    certifications: "Certifications",
    services: "Memberships & Services",
    awards: "Awards & Honors",
  },
  meta: {
    name: "ZHAO Bingcheng (Leo)",
    title: "CyberSec Practitioner @ HK PolyU NuttyShell | Web Dev",
    contact: {
      location: "Kowloon, Hong Kong",
      email: "liyanqwq#gmail.com",
      website: "liyan.moe",
    },
  },
  summary:
    "Information Security undergraduate at The Hong Kong Polytechnic University and Certified Red Team Professional (CRTP). Proven offensive security expertise demonstrated through multiple championships in regional Cybersecurity CTF Competitions (e.g., BSides HK, Yangcheng Cup). Experienced in full-stack development with a strong focus on secure coding and automation. Multilingual professional proficient in English, Chinese, and Cantonese.",
  skills: {
    webDev: {
      title: "Full-Stack Web Development",
      items: [
        { name: "PHP", value: 90, group: "Backend", groupTitle: "Backend", icon: "php" },
        { name: "Laravel", value: 85, group: "Framework", groupTitle: "Framework", icon: "laravel" },
        { name: "TALL Stack", value: 80, group: "Framework", groupTitle: "Framework", icon: "tailwind" },
        { name: "Python", value: 85, group: "Backend", groupTitle: "Backend", icon: "py" },
        { name: "Flask", value: 75, group: "Framework", groupTitle: "Framework", icon: "flask" },
        { name: "NodeJS", value: 80, group: "Backend", groupTitle: "Backend", icon: "nodejs" },
        { name: "TypeScript", value: 85, group: "Language", groupTitle: "Language", icon: "ts" },
        { name: "HTML5", value: 95, group: "Frontend", groupTitle: "Frontend", icon: "html" },
        { name: "CSS", value: 92, group: "Frontend", groupTitle: "Frontend", icon: "css" },
        { name: "JavaScript", value: 90, group: "Frontend", groupTitle: "Frontend", icon: "js" },
        { name: "Tailwind CSS", value: 90, group: "CSS", groupTitle: "CSS", icon: "tailwind" },
        { name: "RESTful API", value: 85, group: "API", groupTitle: "API", icon: "postman" },
        { name: "Git", value: 90, group: "DevOps", groupTitle: "DevOps", icon: "git" },
        { name: "Docker", value: 75, group: "DevOps", groupTitle: "DevOps", icon: "docker" },
        { name: "MySQL", value: 80, group: "Database", groupTitle: "Database", icon: "mysql" },
        { name: "MongoDB", value: 75, group: "Database", groupTitle: "Database", icon: "mongodb" },
      ],
    },
    programming: {
      title: "Programming, Data Analysis",
      items: ["C++", "Python", "R", "Rust"],
    },
    cyberSecurity: {
      title: "Cyber Security",
      categories: [
        {
          name: "Red Teaming",
          level: 5,
          items: [
            "Active Directory Attacks",
            "Kerberos Exploitation",
            "Lateral Movement",
            "Domain Privilege Escalation",
            "Cross-Domain Trust Abuse",
          ],
        },
        {
          name: "Web Exploitation",
          level: 5,
          items: [
            "Web Application Security",
            "API Security",
            "Social Engineering",
          ],
        },
        {
          name: "Reverse Engineering",
          level: 4,
          items: [
            "Binary Analysis",
            "Malware Analysis",
            "Vulnerability Research",
          ],
        },
        {
          name: "Digital Forensics",
          level: 3,
          items: [
            "Steganography",
            "Network Traffic Analysis",
            "Computer / Mobile Forensics",
          ],
        },
      ],
    },
  },
  languages: [
    {
      name: "Chinese",
      proficiency: "Native with Standard Mandarin",
      level: 100,
    },
    { name: "Cantonese", proficiency: "Proficient", level: 80 },
    { name: "English", proficiency: "Proficient", level: 80 },
  ],
  education: [
    {
      institution: "The Hong Kong Polytechnic University",
      degree: "BSc (Hons) in Information Security",
      period: "Sep 2023 - Jun 2027 (expected)",
    },
  ],
  experience: [
    {
      company: "School of Accounting and Finance, PolyU",
      position: "Student Research Assistant (STEM Internship)",
      period: "Nov 2024 - Jan 2025",
      location: "Hong Kong",
      skills: ["Python", "Machine Learning", "Data Analysis", "GIS"],
      responsibilities: [
        "Processed government spatial datasets to correlate building information with land lots for land grant analysis.",
        "Applied AI and machine learning techniques to examine US SEC filings and detect sentiment in audio-visual materials.",
      ],
    },
    {
      company: "School of Accounting and Finance, PolyU",
      position: "Student Research Assistant (STEM Internship)",
      period: "Dec 2024 - Jan 2025",
      location: "Hong Kong",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      responsibilities: [
        "Collected public real estate data and developed Python scripts to parse unstructured PRN data from legacy databases.",
        "Analyzed regulatory inquiry letters from Chinese authorities using AI models.",
      ],
    },
    {
      company: "Department of Computing, PolyU",
      position: "Student Research Assistant",
      period: "Jan 2024 - May 2024",
      location: "Hong Kong",
      skills: ["HugoBlox", "TailwindCSS", "Vercel", "Git", "JavaScript"],
      responsibilities: [
        "Develop and maintain team website using HugoBlox, TailwindCSS, and Vercel.",
      ],
    },
    {
      company: "Munshare (Thindek)",
      position: "Maintenance Engineer",
      period: "Oct 2021 - Dec 2022",
      location: "Remote, Shenzhen China",
      skills: [
        "Frontend Optimization",
        "ICP Compliance",
        "JavaScript",
        "CSS",
      ],
      responsibilities: [
        "Optimized frontend performance for China's network environment and led ICP compliance.",
      ],
    },
    // {
    //   company: "DuianTech",
    //   position: "Chief Technical Officer",
    //   period: "Mar 2021 - Dec 2022",
    //   location: "Remote, Beijing China",
    //   skills: [
    //     "Laravel",
    //     "PHP",
    //     "Network Infrastructure",
    //     "Team Leadership",
    //     "Compliance",
    //     "MySQL",
    //   ],
    //   responsibilities: [
    //     "Independently designed and developed the VirtNation program and led its operation.",
    //     "Maintained the company's network infrastructure",
    //     "Led the company's compliance practice",
    //   ],
    // },
  ],
  projects: [
    {
      name: "Website, NuttyShell (The PolyU CTF Team)",
      description: "Official website for the PolyU CTF Team.",
      period: "Aug 2025 - Present",
      technologies: "Astro, TypeScript, Tailwind CSS",
      details: [
        "Independently designed and developed the migration of the official website from WordPress to a static architecture using Astro and Tailwind CSS, significantly enhancing platform security, performance, and accessibility.",
      ],
    },
    {
      name: "NuttyBadge, PolyU x NuttyShell CTF 2025",
      description: "Hardware souvenir badge for the CTF competition.",
      period: "May 2025",
      technologies: "ESP-IDF, IoT, C",
      details: [
        "Refined core software modules for the NuttyBadge hardware (souvenir of the CTF), specifically optimizing the logic for the WiFi Scanner, Bluetooth Scanner, and RGB Control units.",
      ],
    },
    {
      name: "SGOJ",
      description: "Online judge platform for algorithm contests.",
      period: "May 2020 - Dec 2022",
      technologies: "Web, NodeJS, MongoDB, Git",
      details: [
        "Rewrote the project based on Hydro and optimised the evaluation process to be more in line with the latest CCF (Chinese Computer Federation) competition standards.",
        "Developed several open-source addons for Hydro, and some of them are widely used.",
      ],
    },
    // {
    //   name: "VirtNation",
    //   description: "Community platform for Chinese micronations.",
    //   period: "Jul 2021 - Nov 2022",
    //   technologies: "Laravel, PHP, MySQL, Tailwind CSS",
    //   details: [
    //     "Designed and developed the platform in a fluent, minimalist user interface with responsibility.",
    //     "Optimized page speeds for users in different regions of China and worked on internet compliance in mainland China.",
    //   ],
    // },
  ],
  certifications: [
    {
      name: "Certified Red Team Professional (CRTP)",
      issuer: "Altered Security",
      date: "Dec 2025",
    },
    {
      name: "Network and Information Security Management Engineer (Intermediate)",
      issuer: "Ministry of Industry and Information Technology, PRC",
      date: "Mar 2025",
    },
    {
      name: "Remote Pilot Certificate (SUA)",
      issuer: "Civil Aviation Department, HKSAR",
      date: "May 2025",
    },
    {
      name: "Amateur Radio Station License",
      issuer: "Office of the Communications Authority, HKSAR",
      date: "Nov 2024",
      callsign: "VR2ZUN",
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
      name: "Active Member",
      issuer: "NuttyShell (The PolyU CTF Team)",
      description: "The Hong Kong Polytechnic University",
      date: "Sep 2023 - Present",
    },
  ],
  awards: [
    {
      name: "Bronze Medal (HK & Macau Category)",
      competition: 'The 2025 "GBA Cup" Cybersecurity Competition',
      details: "「灣區杯」網絡安全大賽決賽季軍 (港澳組)",
      date: "Sep 2025",
      category: "CyberSecurity",
    },
    {
      name: "HKSARG Talent Development Scholarship (2024-25)",
      competition: "HKSAR Government Scholarship Fund",
      details: "香港特區政府獎學基金 - 才藝發展獎學金",
      date: "Jun 2025",
      category: "Scholarship",
    },
    {
      name: "Champion",
      competition: "BSides HK CTF 2025",
      details: "BSides Hong Kong Capture the Flag Competition",
      date: "Apr 2025",
      category: "CyberSecurity",
    },
    {
      name: "First Prize (Champion, HK & Macau Cat.)",
      competition: 'The 2024 "Yangcheng Cup" Cybersecurity Competition',
      details: "「羊城杯」粵港澳大灣區網絡安全大賽決賽冠軍 (港澳組)",
      date: "Sep 2024",
      category: "CyberSecurity",
    },
    {
      name: "Silver Award (First Runner-Up)",
      competition: "The Cyber Attack and Defense Elite Training cum Tournament",
      details: "香港網絡攻防精英培訓暨攻防大賽銀獎",
      date: "Aug 2024",
      category: "CyberSecurity",
    },
    {
      name: "HKSARG Talent Development Scholarship (2023-24)",
      competition: "HKSAR Government Scholarship Fund",
      details: "香港特區政府獎學基金 - 才藝發展獎學金",
      date: "Apr 2024",
      category: "Scholarship",
    },
    {
      name: "Champion",
      competition: "HKUST Firebird CTF Competition 2024",
      date: "Jan 2024",
      category: "CyberSecurity",
    },
    {
      name: "Bronze Prize (Second Runner-Up, Tertiary)",
      competition: "HKCERT CTF 2023",
      details: "香港網絡保安新生代奪旗挑戰賽季軍 (大專組)",
      date: "Dec 2023",
      category: "CyberSecurity",
    },
    {
      name: "Best Proposal",
      competition: "The 2022 Model CPPCC Proposal Collection",
      details: "2022 年全國青少年模擬政協提案徵集活動最佳提案",
      date: "Mar 2023",
      category: "Academic",
    },
    {
      name: "Silver Medal",
      competition: "The 2021 ACM/ICPC China Shanghai HMSPC",
      date: "Dec 2021",
      category: "Programming",
    },
    {
      name: "Second Prize (Shandong)",
      competition: "National Olympiad in Informatics in Provinces (NOIP 2021)",
      details: "2021 年全國青少年信息學奧林匹克聯賽二等獎",
      date: "Nov 2021",
      category: "Programming",
    },
  ],
};

export default enData;