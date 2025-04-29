/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import {
  Download,
  Search,
  X,
  FileText,
  Image,
  FileArchive,
  BookOpen,
  Lightbulb,
  BookOpenCheck,
  Sparkle,
  Users,
  FileAudio,
  Projector,
} from "lucide-react";

type UploadItem = {
  id: string;
  name: string;
  uploadedAt: Date;
  href: string;
  type?: string;
  size?: string;
  category?: "ފަތްފުއްތަށް" | "އަޑު" | "މަންޒަރު" | "ޕުރެޒެންޓޭޝަން" | "ވާހަކަ";
};

const uploads: UploadItem[] = [
  {
    id: "1",
    name: "Product_Requirements_Document.pdf",
    uploadedAt: new Date("2025-04-25"),
    href: "/uploads/document.pdf",
    type: "PDF",
    size: "2.4 MB",
    category: "ފަތްފުއްތަށް",
  },
  {
    id: "2",
    name: "Team_Meeting_Notes.docx",
    uploadedAt: new Date("2025-04-24"),
    href: "/uploads/notes.docx",
    type: "DOCX",
    size: "534 KB",
    category: "އަޑު",
  },
  {
    id: "3",
    name: "Marketing_Campaign_Image.png",
    uploadedAt: new Date("2025-04-24"),
    href: "/uploads/photo.png",
    type: "PNG",
    size: "1.2 MB",
    category: "މަންޒަރު",
  },
  {
    id: "4",
    name: "Quarterly_Financial_Report.xlsx",
    uploadedAt: new Date("2025-04-23"),
    href: "/uploads/report.xlsx",
    type: "XLSX",
    size: "876 KB",
    category: "ޕުރެޒެންޓޭޝަން",
  },
  {
    id: "5",
    name: "Project_Resources.zip",
    uploadedAt: new Date("2025-04-22"),
    href: "/uploads/resources.zip",
    type: "ZIP",
    size: "4.7 MB",
    category: "ޕުރެޒެންޓޭޝަން",
  },
  {
    id: "6",
    name: "Story_About_Colors.pdf",
    uploadedAt: new Date("2025-04-21"),
    href: "/uploads/story.pdf",
    type: "PDF",
    size: "1.5 MB",
    category: "ޕުރެޒެންޓޭޝަން",
  },
];

const getFileIcon = (fileName: string, category?: string) => {
  if (category === "އަޑު") {
    return <FileAudio className="text-purple-600" size={20} />;
  }
  if (category === "މަންޒަރު") {
    return <BookOpen className="text-blue-600" size={20} />;
  }
  if (category === "ޕުރެޒެންޓޭޝަން") {
    return <Projector className="text-green-600" size={20} />;
  }
  if (category === "ވާހަކަ") {
    return <BookOpen className="text-pink-600" size={20} />;
  }
  if (category === "ފަތްފުއްތަށް") {
    return <Image className="text-pink-900" size={20} />;
  }

  if (fileName.match(/\.(pdf|docx?|txt)$/i)) {
    return <FileText className="text-indigo-600" size={20} />;
  }
  if (fileName.match(/\.(png|jpe?g)$/i)) {
    return <Image className="text-emerald-600" size={20} />;
  }
  if (fileName.match(/\.(zip|rar)$/i)) {
    return <FileArchive className="text-amber-600" size={20} />;
  }
  return <FileText className="text-gray-600" size={20} />;
};

const getFileTypeColor = (type?: string) => {
  switch (type?.toUpperCase()) {
    case "PDF":
      return "bg-red-100 text-red-700";
    case "DOCX":
    case "DOC":
      return "bg-blue-100 text-blue-700";
    case "PNG":
    case "JPG":
      return "bg-emerald-100 text-emerald-700";
    case "XLSX":
    case "XLS":
      return "bg-green-100 text-green-700";
    case "ZIP":
    case "RAR":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

const getCategoryColor = (category?: string) => {
  switch (category) {
    case "އަޑު":
      return "bg-purple-600";
    case "މަންޒަރު":
      return "bg-blue-600";
    case "ޕުރެޒެންޓޭޝަން":
      return "bg-green-600";
    case "ވާހަކަ":
      return "bg-pink-600";
    case "ފަތްފުއްތަށް":
      return "bg-pink-900";
    default:
      return "bg-gray-600";
  }
};

const getCategoryIcon = (category?: string) => {
  switch (category) {
    case "އަޑު":
      return <FileAudio size={16} />;
    case "މަންޒަރު":
      return <Image size={16} />;
    case "ޕުރެޒެންޓޭޝަން":
      return <Projector size={16} />;
    case "ވާހަކަ":
      return <BookOpen size={16} />;
    case "ފަތްފުއްތަށް":
      return <BookOpen size={16} />;
    default:
      return <FileText size={16} />;
  }
};

const UploadList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUploads, setFilteredUploads] = useState(uploads);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    filterUploads(term, activeCategory);
  };

  const filterUploads = (term = searchTerm, category = activeCategory) => {
    let filtered = uploads;

    if (term) {
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.type?.toLowerCase().includes(term)
      );
    }

    if (category) {
      filtered = filtered.filter((item) => item.category === category);
    }

    setFilteredUploads(filtered);
  };

  const clearSearch = () => {
    setSearchTerm("");
    filterUploads("", activeCategory);
  };

  const handleCategoryFilter = (category: string) => {
    const newCategory = activeCategory === category ? null : category;
    setActiveCategory(newCategory);
    filterUploads(searchTerm, newCategory);
  };

  return (
    <div className="relative min-h-screen pt-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <img
        src="/assets/R.png"
        alt=""
        className="absolute top-0 right-0 w-40 h-40 opacity-100 blur-md pointer-events-none md:w-[800px] md:h-[800px]"
      />

      <div className="relative z-10 max-w-4xl px-4 pt-8 pb-16 mx-auto sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-purple-800 font-utheemu sm:text-4xl">
            މަޒުމޫނާ ގުޅުންހުރި ފޮށި
          </h1>
          <p className="mt-2 text-lg text-gray-600 font-utheemu">
            ! ބޭނުންފުޅުވާ ފިލާވަޅެއް ހޯދާލެއްވުމަށްފަހު ޑައުންލޯޑު ކުރަށްވާ
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <button
            onClick={() => handleCategoryFilter("ފަތްފުއްތަށް")}
            className={`flex items-center gap-2 px-4 py-2 text-white transition rounded-full ${
              activeCategory === "ފަތްފުއްތަށް"
                ? "bg-pink-900"
                : "bg-pink-700 hover:bg-pink-900"
            }`}
          >
            <BookOpen size={16} />
            <span>ފަތްފުއްތަށް</span>
          </button>
          <button
            onClick={() => handleCategoryFilter("އަޑު")}
            className={`flex items-center gap-2 px-4 py-2 text-white transition rounded-full ${
              activeCategory === "އަޑު"
                ? "bg-purple-700"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            <FileAudio size={16} />
            <span>އަޑު</span>
          </button>
          <button
            onClick={() => handleCategoryFilter("މަންޒަރު")}
            className={`flex items-center gap-2 px-4 py-2 text-white transition rounded-full ${
              activeCategory === "މަންޒަރު"
                ? "bg-blue-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            <Image size={16} />
            <span>މަންޒަރު</span>
          </button>
          <button
            onClick={() => handleCategoryFilter("ޕުރެޒެންޓޭޝަން")}
            className={`flex items-center gap-2 px-4 py-2 text-white transition rounded-full ${
              activeCategory === "ޕުރެޒެންޓޭޝަން"
                ? "bg-green-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            <Projector size={16} />
            <span>ޕުރެޒެންޓޭޝަން</span>
          </button>
          <button
            onClick={() => handleCategoryFilter("ވާހަކަ")}
            className={`flex items-center gap-2 px-4 py-2 text-white transition rounded-full ${
              activeCategory === "ވާހަކަ"
                ? "bg-pink-700"
                : "bg-pink-600 hover:bg-pink-700"
            }`}
          >
            <BookOpen size={16} />
            <span>ވާހަކަ</span>
          </button>

          {activeCategory && (
            <button
              onClick={() => handleCategoryFilter(activeCategory)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 transition bg-gray-200 rounded-full hover:bg-gray-300"
            >
              <X size={16} />
              <span>Clear filter</span>
            </button>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="flex flex-row-reverse items-center px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder=" ... ފައިލް ހޯދާލުމަށް"
              value={searchTerm}
              onChange={handleSearch}
              className="block w-full p-2 text-right border-0 focus:ring-0 sm:text-sm"
            />
            {searchTerm && (
              <button onClick={clearSearch} className="p-1">
                <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        {/* File Grid */}
        <div
          dir="rtl"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2"
        >
          {filteredUploads.length > 0 ? (
            filteredUploads.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition-all bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md"
              >
                <div className={`h-2 ${getCategoryColor(item.category)}`}></div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div
                        className={`flex items-center justify-center w-10 h-10 rounded-full bg-${
                          item.category ? item.category : "gray"
                        }-100`}
                      >
                        {getFileIcon(item.name, item.category)}
                      </div>
                      <div className="ml-3">
                        <h3
                          className="text-sm font-medium text-gray-900 truncate sm:text-base"
                          title={item.name}
                        >
                          {item.name}
                        </h3>
                        <div className="flex items-center mt-1 text-xs text-gray-500 sm:text-sm">
                          <span>{item.uploadedAt.toLocaleDateString()}</span>
                          <span className="mx-1">•</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center space-x-2">
                      {item.category && (
                        <div
                          className={`flex items-center gap-1 px-2 py-1 text-xs font-medium text-white rounded-full ${getCategoryColor(
                            item.category
                          )}`}
                        >
                          {getCategoryIcon(item.category)}
                          <span className="capitalize">{item.category}</span>
                        </div>
                      )}
                      {item.type && (
                        <span
                          className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getFileTypeColor(
                            item.type
                          )}`}
                        >
                          {item.type}
                        </span>
                      )}
                    </div>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 transition-colors rounded-full hover:text-purple-600 hover:bg-purple-50"
                    >
                      <Download size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 py-16 text-center sm:col-span-2 lg:col-span-3">
              <div className="flex flex-col items-center justify-center">
                <FileText className="w-12 h-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No files found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {activeCategory
                    ? `No ${activeCategory} files match your search`
                    : "No files match your search"}
                </p>
                {(searchTerm || activeCategory) && (
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory(null);
                      setFilteredUploads(uploads);
                    }}
                    className="px-4 py-2 mt-4 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadList;
