export const enData = {
  lastUpdated: "11 Dec 2025",
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
    title: "CRTP | PolyU BSc InfoSec, Member of NuttyShell (PolyU CTF Team) | Red Team Operator, Full-Stack Web Developer",
    contact: {
      location: "Kowloon, Hong Kong",
      email: "liyanqwq#gmail.com",
      website: "liyan.moe",
    },
  },
  summary:
    "Information Security undergraduate at PolyU with proven expertise in cybersecurity and red team operations. Certified Red Team Professional (CRTP) with hands-on experience in Active Directory exploitation and internal network penetration testing.\n\n* Champion of multiple CTF competitions including BSides HK CTF 2025\n* Certified Red Team Professional specializing in Active Directory attacks\n* Strong background in penetration testing, red teaming, and digital forensics\n* Experienced full-stack developer with focus on secure application design",
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
          name: "Red Team Operations",
          level: 4,
          items: [
            "Active Directory Attacks",
            "Kerberos Exploitation",
            "Lateral Movement",
            "Domain Privilege Escalation",
            "Cross-Domain Trust Abuse",
          ],
        },
        {
          name: "Penetration Testing",
          level: 5,
          items: [
            "Web Application Security",
            "Reverse Engineering",
            "OSINT",
            "Social Engineering",
            "API Security",
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
    { name: "English", proficiency: "Proficient", level: 85 },
    { name: "Cantonese", proficiency: "Intermediate", level: 70 },
  ],
  education: [
    {
      institution: "The Hong Kong Polytechnic University",
      degree: "B.Sc. in Information Security",
      period: "Sep 2023 - Current",
    },
  ],
  experience: [
    {
      company: "School of Accounting and Finance, PolyU",
      position: "Student Research Assistant (STEM Internship)",
      period: "Nov 2025 - Jan 2026",
      location: "Hong Kong",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      responsibilities: [
        "Work closely with research team on data analysis and ML-based feature extraction for unstructured data.",
        "Build automated systems for complex data transformations.",
      ],
    },
    {
      company: "School of Accounting and Finance, PolyU",
      position: "Student Research Assistant (STEM Internship)",
      period: "Dec 2024 - Jan 2025",
      location: "Hong Kong",
      skills: ["Python", "Machine Learning", "Data Analysis"],
      responsibilities: [
        "Work closely with research team on data analysis and ML-based feature extraction for unstructured data.",
        "Build automated systems for complex data transformations.",
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
      date: "Mar 2025",
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
      issuer: "NuttyShell CTF Team",
      description: "The Hong Kong Polytechnic University",
      date: "Sep 2023 - Present",
    },
    {
      name: "Member",
      issuer: "Chinese Computer Federation",
      date: "Feb 2022",
    },
    {
      name: "Member",
      issuer: "The Chinese Mathematical Society",
      date: "Feb 2022",
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