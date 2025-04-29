/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import {
  X,
  FileText,
  BookOpen,
  Download,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Lesson {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  driveLink: string;
  category?: "އެހެނިހެން" | "(22-21) 8" | "(22-21) 9";
  justify?: boolean;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "ބަހުސް9މަށް ލިޔެވިދާނެ ގޮތުގެ ނަމޫނާއެއް",
    summary:
      " (ދަރިވަރުންނަށާއި މުދައްރިސުންނަށް) .!ބަހުސްކުރާ މަޒުމޫނު ލިޔާނެ ގޮތުގެ ނަމޫނާއެއް. އެންމެ 9ކޮއް ",
    content: ` ވަޒީފާއަދާ9މަކީ ވެސް ހަމައެކަނި ފިރިހެނުންނަށް އޮތް އިޚުތިޔާރެއްކަމަށް ވަކާލާތުކުރާ މަދު ބަޔަކު ނަމަވެސް މުޖުތަމަޢުގައި އުޅެއެވެ. އެ ފަދަ މީހުންގެ ވިސްނުމުގައި އަންހެނުން ގެއިން ބޭރަށް ގޮސް ވަޒީފާއަދާ9މަކީ ވަރަށް ގިނަ މައްސަލަތައް އުފަން9ވާ ކަމެކެވެ. އެހެނަސް ރާއްޖޭގެ އަނެއް ބަޔަކުގެ ނަޒަރުގައި އަންހެނުން ގެއިން ބޭރަށް ގޮސް ވަޒީފާއަދާ ނު9މަކީ އޮތް އިޚުތިޔާރެއް ވެސް ނޫނެވެ. އެހެނީ ވަޒީފާ އަދާ9މުން ގިނަ ފައިދާތަކަކާއި މަންފާތަކެއް
   . ލިއްބައިދެއެވެ
      . ތިޔަ ދަރިވަރަކީ އަންހެނުން ގޭގައި ނުތިބެ ވަޒީފާއަށް ދިޔުމަށް ހަރުއަޑުން  ވަކާލާތުކުރާ މީހެއްކަމަށް ބަލާށެވެ
     އެހެންކަމުން، ތިޔަ ދަރިވަރު ގަބޫލުކުރާ ކޮޅަށް ބަހުސްކޮށް، ފުރާވަރުގެ އަންހެން ކުދީންނަށް އަމާޒުކޮށް 
     .ނެރޭ "ފަތްމިނި" މަޖައްލާއަށް ބަހުސްކުރާ ލިޔުމެއް ނުވަތަ މަޒުމޫނެއް ލިޔެދޭށެވެ`,
    image: "/assets/bahus.png",
    driveLink:
      "https://drive.google.com/file/d/19J7oYaSCNkKUVeIdRhSYPHjOFB-nVRo4/view",
    category: "އެހެނިހެން",
  },
  {
    id: 2,
    title: "9 ލިޔުން",
    summary: `ސިހުރާއި ފަންޑިތައިގެ "ބަލި" އަދިވެސް ދިވެހިންގެ ތެރޭގައި!  ވޯޑުފައިލްގައި ކުރެވިދާނެ ދޭހައިގެ މަސައްކަތެއްއޮންލައިންކޮށް ކުރެވިދާނެ ދޭހައިގެ މަސައްކަތެއް`,
    content: `
      މިއީ ވޯޑުފައިލްގައި ޖަވާބުދެވޭ ގޮތަށް ތައްޔާރުކޮށްފައިވާ ދޭހައިގެ މަސައްކަތެކެވެ. މައިކްރޯ ސޮފްޓް އޮފީސްގެ ބައެއް ވާރޝަންތަކުގައި ބައެއްފަހަރު ސުވާލުތަކުގެ އިޚުތިޔާރީ ޖަވާބުތައް ؟؟؟؟؟ މި ގޮތަށް ފެނިދާނެއެވެ. އެ ހާލަތުގައި "ޑިވެލޮޕަރޓެބް" އެޑްކޮށް "ޑިޒައިން މޯޑު"އަށް ކުލިކްކޮށްލުމުން
      . އަންނަ ވިންޑޯ ލެއްޕުމުން ފޮންޓުތައް ފެންނާނެއެވެ`,
    image: "/assets/kuruvaahaka.png",
    driveLink:
      "https://drive.google.com/file/d/1aSHiIxHkfc7BDaF800FC-1NTGnrHppEj/view",
    category: "(22-21) 9",
  },
  {
    id: 3,
    title: "8 ވާހަކަ ނަމޫނާ",
    summary: "8 ވާހަކަ ތައްޔާރުކުރާނެ ގޮތުގެ މިސާލު",
    content: `8 ވާހަކަ ލިޔުމުގައި ގިނަ ކަންކަމަށް ސަމާލުކަން ދޭންޖެހެއެވެ. ވާހަކައިގެ ފެށުމާއި، ކުރިއަށްދާ ގޮތާއި، ނިމުން އެކުލަވާލުމުގައި ވިސްނަންޖެހޭ ކަންތައްތައް ހުރެއެވެ. މި ޑޮކިޔުމަންޓްގައި އެ ހުރިހާ ކަމެއްގެ ނަމޫނާ ހިމަނާފައިވާނެއެވެ.`,
    image: "/assets/dhiguvaahaka.png",
    driveLink:
      "https://drive.google.com/file/d/1sample_id_for_third_lesson/view",
    category: "(22-21) 8",
  },
  {
    id: 4,
    title: "އެހެނިހެން ވާހަކަތައް",
    summary: "ތަފާތު ބާވަތްތަކުގެ ވާހަކަތަކުގެ ނަމޫނާ",
    content: `ވާހަކަ ލިޔުމުގެ ތަފާތު އުކުޅުތަކާއި ގޮތްތައް ހުރެއެވެ. މި ލިޔުމުގައި އެފަދަ ތަފާތު ބާވަތްތަކުގެ ވާހަކަތައް ލިޔުމުގެ މިސާލުތައް ދެވިފައިވާނެއެވެ. ކޮންމެ ބާވަތަކަށްވެސް ޚާއްޞަ ސިފަތަކެއް ހުރެއެވެ.`,
    image: "/assets/ehenihenvahaka.png",
    driveLink:
      "https://drive.google.com/file/d/1sample_id_for_fourth_lesson/view",
    category: "އެހެނިހެން",
  },
];

const getCategoryColor = (category?: string) => {
  switch (category) {
    case "އެހެނިހެން":
      return "bg-pink-600";
    case "(22-21) 8":
      return "bg-blue-600";
    case "(22-21) 9":
      return "bg-purple-600";
    default:
      return "bg-gray-600";
  }
};

const getCategoryTextColor = (category?: string) => {
  switch (category) {
    case "އެހެނިހެން":
      return "text-pink-600";
    case "(22-21) 8":
      return "text-blue-600";
    case "(22-21) 9":
      return "text-purple-600";
    default:
      return "text-gray-600";
  }
};

export default function EnhancedLessonPage() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [viewMode, setViewMode] = useState<"content" | "pdf">("content");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getFileId = (driveLink: string): string => {
    const match = driveLink.match(/\/d\/([^\/]+)/);
    return match ? match[1] : "";
  };

  const getPreviewUrl = (driveLink: string): string => {
    const fileId = getFileId(driveLink);
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      searchTerm === "" ||
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.summary.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === null || lesson.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const goToPrevious = () => {
    if (selectedLesson) {
      const currentId = selectedLesson.id;
      const currentIndex = filteredLessons.findIndex(
        (lesson) => lesson.id === currentId
      );
      if (currentIndex > 0) {
        setSelectedLesson(filteredLessons[currentIndex - 1]);
      } else {
        setSelectedLesson(filteredLessons[filteredLessons.length - 1]);
      }
    }
  };

  const goToNext = () => {
    if (selectedLesson) {
      const currentId = selectedLesson.id;
      const currentIndex = filteredLessons.findIndex(
        (lesson) => lesson.id === currentId
      );
      if (currentIndex < filteredLessons.length - 1) {
        setSelectedLesson(filteredLessons[currentIndex + 1]);
      } else {
        setSelectedLesson(filteredLessons[0]);
      }
    }
  };

  return (
    <div className="relative min-h-screen pt-24 bg-gradient-to-b from-purple-300 to-purple-50">
      <img
        src="/assets/R.png"
        alt=""
        className="absolute top-0 right-0 w-40 h-40 opacity-100 blur-md pointer-events-none md:w-[800px] md:h-[800px]"
      />
      <div className="container relative z-10 px-4 py-12 mx-auto max-w-7xl">
        <div className="mb-6 text-center ">
          <h1 className="mb-3 text-4xl font-bold text-purple-800 font-utheemu">
            ދޭހަޔާއި ގުޅުންހުރި ފިލާވަޅުތައް
          </h1>
          <p className="text-lg text-gray-600 font-utheemu">
            ބޭނުންފުޅުވާ ފިލާވަޅެއް ހޯދާލުމަށްފަހު ބައްލަވާ ނުވަތަ ޑައުންލޯޑު
            ކުރައްވާ
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() =>
                setActiveCategory(
                  activeCategory === "އެހެނިހެން" ? null : "އެހެނިހެން"
                )
              }
              className={`flex items-center gap-2 px-5 py-2 text-white transition rounded-full ${
                activeCategory === "އެހެނިހެން"
                  ? "bg-pink-600"
                  : "bg-pink-600 hover:bg-pink-700"
              }`}
            >
              <BookOpen size={16} />
              <span>އެހެނިހެން</span>
            </button>
            <button
              onClick={() =>
                setActiveCategory(
                  activeCategory === "(22-21) 9" ? null : "(22-21) 9"
                )
              }
              className={`flex items-center gap-2 px-5 py-2 text-white transition rounded-full ${
                activeCategory === "(22-21) 9"
                  ? "bg-purple-600"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              <BookOpen size={16} />
              <span> (22-21) 9 ގުރޭޑް</span>
            </button>
            <button
              onClick={() =>
                setActiveCategory(
                  activeCategory === "(22-21) 8" ? null : "(22-21) 8"
                )
              }
              className={`flex items-center gap-2 px-5 py-2 text-white transition rounded-full ${
                activeCategory === "(22-21) 8"
                  ? "bg-blue-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              <BookOpen size={16} />
              <span> (22-21) 8 ގުރޭޑް</span>
            </button>

            {(searchTerm || activeCategory) && (
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory(null);
                }}
                className="flex items-center gap-2 px-5 py-2 text-gray-700 transition bg-gray-200 rounded-full hover:bg-gray-300"
              >
                <X size={16} />
                <span>ފިލްޓަރ ފޮހެލާ</span>
              </button>
            )}
          </div>
          <div className="relative mb-6">
            <div className="flex flex-row-reverse items-center px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder=" ... ފައިލް ހޯދާލުމަށް"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full p-2 text-right border-0 rounded-full focus:border-0 focus:ring-0 focus:outline-none sm:text-sm"
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="p-1">
                  <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredLessons.length > 0 ? (
          <div
            dir="rtl"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredLessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson)}
                className="overflow-hidden transition-all bg-white border border-purple-100 shadow-sm cursor-pointer rounded-xl hover:shadow-md hover:scale-100"
              >
                <div
                  className={`h-2 ${getCategoryColor(lesson.category)}`}
                ></div>
                <div className="relative">
                  {lesson.image && (
                    <img
                      src={lesson.image}
                      alt={lesson.title}
                      className="object-cover w-full h-48"
                    />
                  )}
                  {lesson.category && (
                    <div
                      className={`absolute top-3 right-3 px-3 py-1 text-sm font-medium text-white rounded-full ${getCategoryColor(
                        lesson.category
                      )}`}
                    >
                      {lesson.category}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h2 className="mb-3 text-xl font-bold text-purple-800 font-utheemu">
                    {lesson.title}
                  </h2>
                  <p className="text-sm text-gray-600 font-utheemu">
                    {lesson.summary}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <BookOpen
                        className={`w-5 h-5 ${getCategoryTextColor(
                          lesson.category
                        )}`}
                      />
                      <span className="text-sm text-gray-500">ފިލާވަޅު</span>
                    </div>
                    {lesson.driveLink && (
                      <div className="flex items-center gap-1 text-purple-600">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">PDF</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="flex flex-col items-center justify-center">
              <FileText className="w-16 h-16 text-gray-400" />
              <h3 className="mt-4 text-xl font-medium text-gray-900">
                ފިލާވަޅެއް ނުފެނުނު
              </h3>
              <p className="mt-2 text-gray-500">
                {activeCategory
                  ? `"${activeCategory}" ކެޓަގަރީގެ ފިލާވަޅެއް ނުފެނުނު`
                  : "ހޯދި ފިލާވަޅެއް ނުފެނުނު"}
              </p>
            </div>
          </div>
        )}
      </div>

      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-right bg-black/70 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl p-0 mx-4 bg-white rounded-2xl overflow-hidden max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <button
                onClick={goToPrevious}
                className="p-2 text-purple-600 transition rounded-full hover:bg-purple-100"
                aria-label="Previous lesson"
              >
                <ChevronLeft size={20} />
              </button>

              <div className="flex items-center text-center ">
                {selectedLesson.category && (
                  <span
                    className={`px-3 py-1 mr-2 text-sm font-medium text-white   rounded-full ${getCategoryColor(
                      selectedLesson.category
                    )}`}
                  >
                    {selectedLesson.category}
                  </span>
                )}
                <h3 className="text-lg font-semibold text-purple-800 font-utheemu">
                  {selectedLesson.title}
                </h3>
              </div>

              <div className="flex items-center">
                <button
                  onClick={goToNext}
                  className="p-2 mr-2 text-purple-600 transition rounded-full hover:bg-purple-100"
                  aria-label="Next lesson"
                >
                  <ChevronRight size={20} />
                </button>
                <button
                  onClick={() => setSelectedLesson(null)}
                  className="p-2 text-gray-600 transition rounded-full hover:bg-gray-100"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {selectedLesson.driveLink && (
              <div className="flex px-4 pt-4 mb-4 space-x-2">
                <button
                  onClick={() => setViewMode("content")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition flex items-center ${
                    viewMode === "content"
                      ? "bg-purple-700 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  ލިޔުން
                </button>
                <button
                  onClick={() => setViewMode("pdf")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition flex items-center ${
                    viewMode === "pdf"
                      ? "bg-purple-700 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  PDF
                </button>

                {selectedLesson.driveLink && (
                  <a
                    href={selectedLesson.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 ml-auto text-sm font-medium text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    ޑައުންލޯޑު
                  </a>
                )}
              </div>
            )}

            <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
              {viewMode === "content" ? (
                <div className="p-6">
                  {selectedLesson.image && (
                    <img
                      src={selectedLesson.image}
                      alt={selectedLesson.title}
                      className="object-cover w-full mb-6 rounded-xl h-60"
                    />
                  )}
                  <p
                    dir="rtl"
                    className={`text-xl leading-loose text-gray-800 whitespace-pre-line font-utheemu ${
                      selectedLesson.justify ? "text-justify" : "text-right"
                    }`}
                  >
                    {selectedLesson.content}
                  </p>
                </div>
              ) : (
                <div className="w-full h-[70vh]">
                  <iframe
                    src={getPreviewUrl(selectedLesson.driveLink)}
                    className="w-full h-full border border-gray-200"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
