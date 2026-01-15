import React, { useState } from "react";
import { marked } from 'marked';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import {
  Award,
  Briefcase,
  Book,
  Star,
  MapPin,
  Phone,
  Mail,
  Globe,
  FileText,
  User,
  Code,
  Shield,
  Database,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
// import WordCloud from "./WordCloud";
import WordCloud from "./WordCloudNew";
import CyberSecuritySkills from "./CyberSecuritySkills";
import LanguageProficiency from "./LanguageProficiency";
import { resumeData } from "../data";

// Main Resume component
const Resume = () => {
  const [language, setLanguage] = useState("en");
  const [showAllAwards, setShowAllAwards] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const data = resumeData[language];

  // Group skills by category for pie chart
  const skillsByGroup = data.skills.webDev.items.reduce((acc, skill) => {
    if (!acc[skill.group]) {
      acc[skill.group] = { name: skill.groupTitle, count: 0, totalValue: 0 };
    }
    acc[skill.group].count += 1;
    acc[skill.group].totalValue += skill.value;
    return acc;
  }, {});

  const skillPieData = Object.values(skillsByGroup).map((group) => ({
    name: group.name,
    value: group.count,
    avgSkill: Math.round(group.totalValue / group.count),
  }));

  // Colors for pie chart
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#8dd1e1",
    "#a4de6c",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        {/* Language selector */}
        <div className="absolute top-4 right-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                language === "en"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                language === "zh"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}>
              中文
            </button>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {data.meta.name}
              </h1>
              <p className="text-xl mt-2">{data.meta.title}</p>
            </div>
            <div className="mt-4 md:mt-0 text-sm md:text-base">
              <div className="flex items-center mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{data.meta.contact.location}</span>
              </div>
              {/* <div className="flex items-center mb-2">
                <Phone className="w-4 h-4 mr-2" />
                <span>{data.meta.contact.phone}</span>
              </div> */}
              <div className="flex items-center mb-2">
                <Mail className="w-4 h-4 mr-2" />
                <span>{data.meta.contact.email}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                <a href={`//${data.meta.contact.website}`}>{data.meta.contact.website}</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 md:px-8 py-8">
        <div className="lg:flex">
          {/* Left sidebar */}
          <div className="lg:w-1/2 lg:min-w-90 lg:mr-8 mb-8 lg:mb-0">
            {/* Summary section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center mb-4">
                <User className="w-5 h-5 mr-2" />
                {data.titles.summary}
              </h2>
              <div className="text-gray-700 text-justify">
                {data.summary.split('\n\n').map((paragraph, index) => (
                  <React.Fragment key={index}>
                    {paragraph.startsWith('* ') ? (
                      <ul className="list-disc pl-5 my-2">
                        {paragraph.split('\n').map((item, i) => (
                          <li className="mt-2" key={i}>{item.replace('* ', '')}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mb-2">{paragraph}</p>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </section>

            {/* Skills section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center mb-4">
                <Star className="w-5 h-5 mr-2" />
                {data.titles.skills}
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Code className="w-4 h-4 mr-2" />
                  {data.skills.webDev.title}
                </h3>

                <div className="select-none mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">
                    Skills Distribution
                  </h4>
                  <ResponsiveContainer width="100%" height={250} key={language}>
                    <PieChart>
                      <Pie
                        data={skillPieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name }) =>
                          `${name}`
                        }
                      >
                        {skillPieData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value, name, props) => [
                          `${value} skills, avg ${'★'.repeat(Math.round(props.payload.avgSkill/20))}${'☆'.repeat(5-Math.round(props.payload.avgSkill/20))}`,
                          name,
                        ]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <WordCloud skills={data.skills.webDev.items} key={language} />
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  {data.skills.cyberSecurity.title}
                </h3>
                <CyberSecuritySkills
                  categories={data.skills.cyberSecurity.categories}
                />
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Database className="w-4 h-4 mr-2" />
                  {data.skills.programming.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.programming.items.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Languages section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center mb-4">
                <Globe className="w-5 h-5 mr-2" />
                {data.titles.languages}
              </h2>
              {data.languages.map((language, index) => (
                <LanguageProficiency key={index} language={language} />
              ))}
            </section>

            {/* Education section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center mb-4">
                <Book className="w-5 h-5 mr-2" />
                {data.titles.education}
              </h2>
              {data.education.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h3 className="font-semibold">{edu.institution}</h3>
                  <p className="text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-gray-500 whitespace-normal break-words">
                    {edu.period}
                  </p>
                </div>
              ))}
            </section>
          </div>

          {/* Right content area */}
          <div className="lg:w-full">
            {/* Experience section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center mb-4">
                <Briefcase className="w-5 h-5 mr-2" />
                {data.titles.experience}
              </h2>

              {data.experience.map((exp, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="font-semibold text-lg">{exp.position}</h3>
                  <p className="text-gray-600 text-justify">
                    {exp.company}, {exp.location}
                  </p>
                  <p className="text-sm text-gray-500 whitespace-normal break-words">
                    {exp.period}
                  </p>

                  <div className="mt-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {exp.responsibilities.length === 1 ? (
                      <div className="text-gray-700 text-justify">
                        {exp.responsibilities[0]}
                      </div>
                    ) : (
                      <ul className="list-disc list-inside text-gray-700 pl-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="mb-1 text-justify">
                            {resp}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </section>

            {/* Projects section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center mb-4">
                <FileText className="w-5 h-5 mr-2" />
                {data.titles.projects}
              </h2>

              {data.projects.map((project, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h3 className="font-semibold text-lg">{project.name}</h3>
                  <p className="text-gray-600 text-justify">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 whitespace-normal break-words">
                    {project.period}
                  </p>

                  <div className="mt-2">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.split(", ").map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.details.length === 1 ? (
                      <div className="text-gray-700 text-justify">
                        {project.details[0]}
                      </div>
                    ) : (
                      <ul className="list-disc list-inside text-gray-700 pl-2">
                        {project.details.map((detail, idx) => (
                          <li key={idx} className="mb-1 text-justify">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </section>

            {/* Awards section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center mb-4">
                <Award className="w-5 h-5 mr-2" />
                {data.titles.awards}
              </h2>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === "CyberSecurity"
                          ? null
                          : "CyberSecurity"
                      )
                    }
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${
                      selectedCategory === "CyberSecurity"
                        ? "bg-red-500 text-white"
                        : "bg-red-100 text-red-800 hover:bg-red-200"
                    }`}
                  >
                    CyberSecurity
                  </button>
                  <button
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === "Programming"
                          ? null
                          : "Programming"
                      )
                    }
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${
                      selectedCategory === "Programming"
                        ? "bg-blue-500 text-white"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                    }`}
                  >
                    Programming
                  </button>
                  <button
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === "Scholarship"
                          ? null
                          : "Scholarship"
                      )
                    }
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${
                      selectedCategory === "Scholarship"
                        ? "bg-green-500 text-white"
                        : "bg-green-100 text-green-800 hover:bg-green-200"
                    }`}
                  >
                    Scholarship
                  </button>
                  <button
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === "Academic" ? null : "Academic"
                      )
                    }
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${
                      selectedCategory === "Academic"
                        ? "bg-purple-500 text-white"
                        : "bg-purple-100 text-purple-800 hover:bg-purple-200"
                    }`}
                  >
                    Academic
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {data.awards
                  .filter((award) =>
                    selectedCategory
                      ? award.category === selectedCategory
                      : true
                  )
                  .slice(0, showAllAwards ? data.awards.length : 3)
                  .map((award, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-500 pl-4 py-1"
                    >
                      <h3 className="font-semibold">{award.name}</h3>
                      <p className="text-gray-600 text-justify">
                        {award.competition}
                      </p>
                      {award.details && (
                        <p className="text-sm text-gray-500 italic text-justify">
                          {award.details}
                        </p>
                      )}
                      <div className="flex items-center mt-1 text-xs">
                        <div className="flex">
                          <span
                            className={`px-2 py-0.5 rounded-full ${
                              award.category === "CyberSecurity"
                                ? "bg-red-100 text-red-800"
                                : award.category === "Programming"
                                ? "bg-blue-100 text-blue-800"
                                : award.category === "Scholarship"
                                ? "bg-green-100 text-green-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {award.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 whitespace-normal break-words">
                          {award.date}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {data.awards.filter((award) =>
                selectedCategory ? award.category === selectedCategory : true
              ).length > 3 && (
                <button
                  onClick={() => setShowAllAwards(!showAllAwards)}
                  className="mt-4 text-blue-600 flex items-center text-sm font-medium"
                >
                  {showAllAwards ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      Show All{" "}
                      {
                        data.awards.filter((award) =>
                          selectedCategory
                            ? award.category === selectedCategory
                            : true
                        ).length
                      }{" "}
                      Awards <ChevronDown className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              )}
            </section>

            {/* Certifications section */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center mb-4">
                <Shield className="w-5 h-5 mr-2" />
                {data.titles.certifications}
              </h2>

              <div className="space-y-3">
                {data.certifications
                  .slice(
                    0,
                    showAllCertifications ? data.certifications.length : 3
                  )
                  .map((cert, index) => (
                    <div
                      key={index}
                      className="py-2 border-b border-gray-100 last:border-0"
                    >
                      <h3 className="font-medium">{cert.name}</h3>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-sm text-gray-500 whitespace-normal break-words mt-1">
                        {cert.date}
                      </p>
                    </div>
                  ))}
              </div>

              {data.certifications.length > 3 && (
                <button
                  onClick={() =>
                    setShowAllCertifications(!showAllCertifications)
                  }
                  className="mt-4 text-blue-600 flex items-center text-sm font-medium"
                >
                  {showAllCertifications ? (
                    <>
                      Show Less <ChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      Show All {data.certifications.length} Certifications{" "}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              )}
            </section>

            {/* Services/Memberships section */}
            <section className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-blue-800 flex items-center mb-4">
                <User className="w-5 h-5 mr-2" />
                {data.titles.services}
              </h2>

              <div className="space-y-3">
                {data.services &&
                  data.services.map((service, index) => (
                    <div
                      key={index}
                      className="py-2 border-b border-gray-100 last:border-0"
                    >
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-gray-600">{service.issuer}</p>
                      {service.description && (
                        <p className="text-xs text-gray-500">
                          {service.description}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 whitespace-normal break-words mt-1">
                        {service.date}
                      </p>
                    </div>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="select-none bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto px-4 md:px-8 text-center">
          {/* <p>Interactive Resume of {data.meta.name}</p> */}
          <p className="text-gray-400 text-sm mt-2">
            &copy; 2024 - {new Date().getFullYear()} <a className="text-gray-300 hover:text-white" href="//github.com/liyanqwq">立言 Li Yan</a><span className="md:ml-4 mt-2 md:mt-0 block md:inline"></span>Last Updated: {data.lastUpdated}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
