// /* eslint-disable @next/next/no-img-element */
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
  category?: "ވާހަކަ" | "ދިގު" | "ކުރު";
  justify?: boolean;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "ބަހުސްކުރުމަށް ލިޔެވިދާނެ ގޮތުގެ ނަމޫނާއެއް",
    summary:
      " (ދަރިވަރުންނަށާއި މުދައްރިސުންނަށް) .!ބަހުސްކުރާ މަޒުމޫނު ލިޔާނެ ގޮތުގެ ނަމޫނާއެއް. އެންމެ ކުރުކޮއް ",
    content: ` ވަޒީފާއަދާކުރުމަކީ ވެސް ހަމައެކަނި ފިރިހެނުންނަށް އޮތް އިޚުތިޔާރެއްކަމަށް ވަކާލާތުކުރާ މަދު ބަޔަކު ނަމަވެސް މުޖުތަމަޢުގައި އުޅެއެވެ. އެ ފަދަ މީހުންގެ ވިސްނުމުގައި އަންހެނުން ގެއިން ބޭރަށް ގޮސް ވަޒީފާއަދާކުރުމަކީ ވަރަށް ގިނަ މައްސަލަތައް އުފަންކުރުވާ ކަމެކެވެ. އެހެނަސް ރާއްޖޭގެ އަނެއް ބަޔަކުގެ ނަޒަރުގައި އަންހެނުން ގެއިން ބޭރަށް ގޮސް ވަޒީފާއަދާ ނުކުރުމަކީ އޮތް އިޚުތިޔާރެއް ވެސް ނޫނެވެ. އެހެނީ ވަޒީފާ އަދާކުރުމުން ގިނަ ފައިދާތަކަކާއި މަންފާތަކެއް
   . ލިއްބައިދެއެވެ
      . ތިޔަ ދަރިވަރަކީ އަންހެނުން ގޭގައި ނުތިބެ ވަޒީފާއަށް ދިޔުމަށް ހަރުއަޑުން  ވަކާލާތުކުރާ މީހެއްކަމަށް ބަލާށެވެ
     އެހެންކަމުން، ތިޔަ ދަރިވަރު ގަބޫލުކުރާ ކޮޅަށް ބަހުސްކޮށް، ފުރާވަރުގެ އަންހެން ކުދީންނަށް އަމާޒުކޮށް
     .ނެރޭ "ފަތްމިނި" މަޖައްލާއަށް ބަހުސްކުރާ ލިޔުމެއް ނުވަތަ މަޒުމޫނެއް ލިޔެދޭށެވެ`,
    image: "/assets/bahus.png",
    driveLink:
      "https://drive.google.com/file/d/19J7oYaSCNkKUVeIdRhSYPHjOFB-nVRo4/view",
    category: "ވާހަކަ",
  },
  {
    id: 2,
    title: "ކުރު ލިޔުން",
    summary: `ސިހުރާއި ފަންޑިތައިގެ "ބަލި" އަދިވެސް ދިވެހިންގެ ތެރޭގައި!  ވޯޑުފައިލްގައި ކުރެވިދާނެ ދޭހައިގެ މަސައްކަތެއްއޮންލައިންކޮށް ކުރެވިދާނެ ދޭހައިގެ މަސައްކަތެއް`,
    content: `
      މިއީ ވޯޑުފައިލްގައި ޖަވާބުދެވޭ ގޮތަށް ތައްޔާރުކޮށްފައިވާ ދޭހައިގެ މަސައްކަތެކެވެ. މައިކްރޯ ސޮފްޓް އޮފީސްގެ ބައެއް ވާރޝަންތަކުގައި ބައެއްފަހަރު ސުވާލުތަކުގެ އިޚުތިޔާރީ ޖަވާބުތައް ؟؟؟؟؟ މި ގޮތަށް ފެނިދާނެއެވެ. އެ ހާލަތުގައި "ޑިވެލޮޕަރޓެބް" އެޑްކޮށް "ޑިޒައިން މޯޑު"އަށް ކުލިކްކޮށްލުމުން
      . އަންނަ ވިންޑޯ ލެއްޕުމުން ފޮންޓުތައް ފެންނާނެއެވެ`,
    image: "/assets/kuruvaahaka.png",
    driveLink:
      "https://drive.google.com/file/d/1aSHiIxHkfc7BDaF800FC-1NTGnrHppEj/view",
    category: "ކުރު",
  },
  {
    id: 3,
    title: "ދިގު ވާހަކަ ނަމޫނާ",
    summary: "ދިގު ވާހަކަ ތައްޔާރުކުރާނެ ގޮތުގެ މިސާލު",
    content: `ދިގު ވާހަކަ ލިޔުމުގައި ގިނަ ކަންކަމަށް ސަމާލުކަން ދޭންޖެހެއެވެ. ވާހަކައިގެ ފެށުމާއި، ކުރިއަށްދާ ގޮތާއި، ނިމުން އެކުލަވާލުމުގައި ވިސްނަންޖެހޭ ކަންތައްތައް ހުރެއެވެ. މި ޑޮކިޔުމަންޓްގައި އެ ހުރިހާ ކަމެއްގެ ނަމޫނާ ހިމަނާފައިވާނެއެވެ.`,
    image: "/assets/dhiguvaahaka.png",
    driveLink:
      "https://drive.google.com/file/d/1sample_id_for_third_lesson/view",
    category: "ދިގު",
  },
  {
    id: 4,
    title: "އެހެނިހެން ވާހަކަތައް",
    summary: "ތަފާތު ބާވަތްތަކުގެ ވާހަކަތަކުގެ ނަމޫނާ",
    content: `ވާހަކަ ލިޔުމުގެ ތަފާތު އުކުޅުތަކާއި ގޮތްތައް ހުރެއެވެ. މި ލިޔުމުގައި އެފަދަ ތަފާތު ބާވަތްތަކުގެ ވާހަކަތައް ލިޔުމުގެ މިސާލުތައް ދެވިފައިވާނެއެވެ. ކޮންމެ ބާވަތަކަށްވެސް ޚާއްޞަ ސިފަތަކެއް ހުރެއެވެ.`,
    image: "/assets/ehenihenvahaka.png",
    driveLink:
      "https://drive.google.com/file/d/1sample_id_for_fourth_lesson/view",
    category: "ވާހަކަ",
  },
];

const getCategoryColor = (category?: string) => {
  switch (category) {
    case "ވާހަކަ":
      return "bg-pink-600";
    case "ދިގު":
      return "bg-blue-600";
    case "ކުރު":
      return "bg-purple-600";
    default:
      return "bg-gray-600";
  }
};

const getCategoryTextColor = (category?: string) => {
  switch (category) {
    case "ވާހަކަ":
      return "text-pink-600";
    case "ދިގު":
      return "text-blue-600";
    case "ކުރު":
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
            ވާހަކައާއި ގުޅުންހުރި ފިލާވަޅުތައް
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
                setActiveCategory(activeCategory === "ވާހަކަ" ? null : "ވާހަކަ")
              }
              className={`flex items-center gap-2 px-5 py-2 text-white transition rounded-full ${
                activeCategory === "ވާހަކަ"
                  ? "bg-pink-600"
                  : "bg-pink-600 hover:bg-pink-700"
              }`}
            >
              <BookOpen size={16} />
              <span>ވާހަކަ</span>
            </button>
            <button
              onClick={() =>
                setActiveCategory(activeCategory === "ކުރު" ? null : "ކުރު")
              }
              className={`flex items-center gap-2 px-5 py-2 text-white transition rounded-full ${
                activeCategory === "ކުރު"
                  ? "bg-purple-600"
                  : "bg-purple-600 hover:bg-purple-700"
              }`}
            >
              <BookOpen size={16} />
              <span>ކުރު ވާހަކަ</span>
            </button>
            <button
              onClick={() =>
                setActiveCategory(activeCategory === "ދިގު" ? null : "ދިގު")
              }
              className={`flex items-center gap-2 px-5 py-2 text-white transition rounded-full ${
                activeCategory === "ދިގު"
                  ? "bg-blue-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              <BookOpen size={16} />
              <span>ދިގު ވާހަކަ</span>
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
                    className={`px-3 py-1 mr-2 text-sm font-medium text-white rounded-full ${getCategoryColor(
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

/* eslint-disable @next/next/no-img-element */
// "use client";

// import React, { useState } from "react";
// import {
//   X,
//   FileText,
//   BookOpen,
//   Download,
//   Search,
//   ChevronLeft,
//   ChevronRight,
//   Lock,
//   CreditCard,
//   ExternalLink,
//   Check,
// } from "lucide-react";

// interface Lesson {
//   id: number;
//   title: string;
//   summary: string;
//   content: string;
//   image: string;
//   driveLink: string;
//   category?: "ވާހަކަ" | "ދިގު" | "ކުރު";
//   justify?: boolean;
//   isPremium?: boolean;
//   previewContent?: string;
//   price?: number;
// }

// const lessons: Lesson[] = [
//   {
//     id: 1,
//     title: "ބަހުސްކުރުމަށް ލިޔެވިދާނެ ގޮތުގެ ނަމޫނާއެއް",
//     summary:
//       " (ދަރިވަރުންނަށާއި މުދައްރިސުންނަށް) .!ބަހުސްކުރާ މަޒުމޫނު ލިޔާނެ ގޮތުގެ ނަމޫނާއެއް. އެންމެ ކުރުކޮއް ",
//     content: ` ވަޒީފާއަދާކުރުމަކީ ވެސް ހަމައެކަނި ފިރިހެނުންނަށް އޮތް އިޚުތިޔާރެއްކަމަށް ވަކާލާތުކުރާ މަދު ބަޔަކު ނަމަވެސް މުޖުތަމަޢުގައި އުޅެއެވެ. އެ ފަދަ މީހުންގެ ވިސްނުމުގައި އަންހެނުން ގެއިން ބޭރަށް ގޮސް ވަޒީފާއަދާކުރުމަކީ ވަރަށް ގިނަ މައްސަލަތައް އުފަންކުރުވާ ކަމެކެވެ. އެހެނަސް ރާއްޖޭގެ އަނެއް ބަޔަކުގެ ނަޒަރުގައި އަންހެނުން ގެއިން ބޭރަށް ގޮސް ވަޒީފާއަދާ ނުކުރުމަކީ އޮތް އިޚުތިޔާރެއް ވެސް ނޫނެވެ. އެހެނީ ވަޒީފާ އަދާކުރުމުން ގިނަ ފައިދާތަކަކާއި މަންފާތަކެއް
//    . ލިއްބައިދެއެވެ
//       . ތިޔަ ދަރިވަރަކީ އަންހެނުން ގޭގައި ނުތިބެ ވަޒީފާއަށް ދިޔުމަށް ހަރުއަޑުން  ވަކާލާތުކުރާ މީހެއްކަމަށް ބަލާށެވެ
//      އެހެންކަމުން، ތިޔަ ދަރިވަރު ގަބޫލުކުރާ ކޮޅަށް ބަހުސްކޮށް، ފުރާވަރުގެ އަންހެން ކުދީންނަށް އަމާޒުކޮށް
//      .ނެރޭ "ފަތްމިނި" މަޖައްލާއަށް ބަހުސްކުރާ ލިޔުމެއް ނުވަތަ މަޒުމޫނެއް ލިޔެދޭށެވެ`,
//     image: "/assets/bahus.png",
//     driveLink:
//       "https://drive.google.com/file/d/19J7oYaSCNkKUVeIdRhSYPHjOFB-nVRo4/view",
//     category: "ވާހަކަ",
//   },
//   {
//     id: 2,
//     title: "ކުރު ލިޔުން",
//     summary: `ސިހުރާއި ފަންޑިތައިގެ "ބަލި" އަދިވެސް ދިވެހިންގެ ތެރޭގައި!  ވޯޑުފައިލްގައި ކުރެވިދާނެ ދޭހައިގެ މަސައްކަތެއްއޮންލައިންކޮށް ކުރެވިދާނެ ދޭހައިގެ މަސައްކަތެއް`,
//     content: `
//       މިއީ ވޯޑުފައިލްގައި ޖަވާބުދެވޭ ގޮތަށް ތައްޔާރުކޮށްފައިވާ ދޭހައިގެ މަސައްކަތެކެވެ. މައިކްރޯ ސޮފްޓް އޮފީސްގެ ބައެއް ވާރޝަންތަކުގައި ބައެއްފަހަރު ސުވާލުތަކުގެ އިޚުތިޔާރީ ޖަވާބުތައް ؟؟؟؟؟ މި ގޮތަށް ފެނިދާނެއެވެ. އެ ހާލަތުގައި "ޑިވެލޮޕަރޓެބް" އެޑްކޮށް "ޑިޒައިން މޯޑު"އަށް ކުލިކްކޮށްލުމުން
//       . އަންނަ ވިންޑޯ ލެއްޕުމުން ފޮންޓުތައް ފެންނާނެއެވެ`,
//     image: "/assets/kuruvaahaka.png",
//     driveLink:
//       "https://drive.google.com/file/d/1aSHiIxHkfc7BDaF800FC-1NTGnrHppEj/view",
//     category: "ކުރު",
//     isPremium: true,
//     previewContent: `މިއީ ވޯޑުފައިލްގައި ޖަވާބުދެވޭ ގޮތަށް ތައްޔާރުކޮށްފައިވާ ދޭހައިގެ މަސައްކަތެކެވެ. މައިކްރޯ ސޮފްޓް އޮފީސްގެ ބައެއް ވާރޝަންތަކުގައި ބައެއްފަހަރު ސުވާލުތަކުގެ އިޚުތިޔާރީ ޖަވާބުތައް...

// [ފުރިހަމަ ލިޔުން ބެލުމަށް ޕްރީމިއަމް މެމްބަރޝިޕް ހޯއްދަވާ]`,
//     price: 15,
//   },
//   {
//     id: 3,
//     title: "ދިގު ވާހަކަ ނަމޫނާ",
//     summary: "ދިގު ވާހަކަ ތައްޔާރުކުރާނެ ގޮތުގެ މިސާލު",
//     content: `ދިގު ވާހަކަ ލިޔުމުގައި ގިނަ ކަންކަމަށް ސަމާލުކަން ދޭންޖެހެއެވެ. ވާހަކައިގެ ފެށުމާއި، ކުރިއަށްދާ ގޮތާއި، ނިމުން އެކުލަވާލުމުގައި ވިސްނަންޖެހޭ ކަންތައްތައް ހުރެއެވެ. މި ޑޮކިޔުމަންޓްގައި އެ ހުރިހާ ކަމެއްގެ ނަމޫނާ ހިމަނާފައިވާނެއެވެ.`,
//     image: "/assets/dhiguvaahaka.png",
//     driveLink:
//       "https://drive.google.com/file/d/1sample_id_for_third_lesson/view",
//     category: "ދިގު",
//     isPremium: true,
//     previewContent: `ދިގު ވާހަކަ ލިޔުމުގައި ގިނަ ކަންކަމަށް ސަމާލުކަން ދޭންޖެހެއެވެ. ވާހަކައިގެ ފެށުމާއި، ކުރިއަށްދާ ގޮތާއި، ނިމުން އެކުލަވާލުމުގައި...

// [ފުރިހަމަ ލިޔުން ބެލުމަށް ޕްރީމިއަމް މެމްބަރޝިޕް ހޯއްދަވާ]`,
//     price: 25,
//   },
//   {
//     id: 4,
//     title: "އެހެނިހެން ވާހަކަތައް",
//     summary: "ތަފާތު ބާވަތްތަކުގެ ވާހަކަތަކުގެ ނަމޫނާ",
//     content: `ވާހަކަ ލިޔުމުގެ ތަފާތު އުކުޅުތަކާއި ގޮތްތައް ހުރެއެވެ. މި ލިޔުމުގައި އެފަދަ ތަފާތު ބާވަތްތަކުގެ ވާހަކަތައް ލިޔުމުގެ މިސާލުތައް ދެވިފައިވާނެއެވެ. ކޮންމެ ބާވަތަކަށްވެސް ޚާއްޞަ ސިފަތަކެއް ހުރެއެވެ.`,
//     image: "/assets/ehenihenvahaka.png",
//     driveLink:
//       "https://drive.google.com/file/d/1sample_id_for_fourth_lesson/view",
//     category: "ވާހަކަ",
//     isPremium: true,
//     previewContent: `ވާހަކަ ލިޔުމުގެ ތަފާތު އުކުޅުތަކާއި ގޮތްތައް ހުރެއެވެ. މި ލިޔުމުގައި އެފަދަ ތަފާތު ބާވަތްތަކުގެ...

// [ފުރިހަމަ ލިޔުން ބެލުމަށް ޕްރީމިއަމް މެމްބަރޝިޕް ހޯއްދަވާ]`,
//     price: 20,
//   },
// ];

// const getCategoryColor = (category?: string) => {
//   switch (category) {
//     case "ވާހަކަ":
//       return "bg-pink-600";
//     case "ދިގު":
//       return "bg-blue-600";
//     case "ކުރު":
//       return "bg-purple-600";
//     default:
//       return "bg-gray-600";
//   }
// };

// const getCategoryTextColor = (category?: string) => {
//   switch (category) {
//     case "ވާހަކަ":
//       return "text-pink-600";
//     case "ދިގު":
//       return "text-blue-600";
//     case "ކުރު":
//       return "text-purple-600";
//     default:
//       return "text-gray-600";
//   }
// };

// export default function EnhancedLessonPage() {
//   const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
//   const [viewMode, setViewMode] = useState<"content" | "pdf">("content");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [showPremiumFilter, setShowPremiumFilter] = useState<boolean | null>(
//     null
//   );
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [paymentSuccess, setPaymentSuccess] = useState(false);
//   const [purchasedItems, setPurchasedItems] = useState<number[]>([]);

//   const getFileId = (driveLink: string): string => {
//     const match = driveLink.match(/\/d\/([^\/]+)/);
//     return match ? match[1] : "";
//   };

//   const getPreviewUrl = (driveLink: string): string => {
//     const fileId = getFileId(driveLink);
//     return `https://drive.google.com/file/d/${fileId}/preview`;
//   };

//   const filteredLessons = lessons.filter((lesson) => {
//     const matchesSearch =
//       searchTerm === "" ||
//       lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       lesson.summary.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesCategory =
//       activeCategory === null || lesson.category === activeCategory;

//     const matchesPremium =
//       showPremiumFilter === null ||
//       (showPremiumFilter === true && lesson.isPremium) ||
//       (showPremiumFilter === false && !lesson.isPremium);

//     return matchesSearch && matchesCategory && matchesPremium;
//   });

//   const goToPrevious = () => {
//     if (selectedLesson) {
//       const currentId = selectedLesson.id;
//       const currentIndex = filteredLessons.findIndex(
//         (lesson) => lesson.id === currentId
//       );
//       if (currentIndex > 0) {
//         setSelectedLesson(filteredLessons[currentIndex - 1]);
//       } else {
//         setSelectedLesson(filteredLessons[filteredLessons.length - 1]);
//       }
//     }
//   };

//   const goToNext = () => {
//     if (selectedLesson) {
//       const currentId = selectedLesson.id;
//       const currentIndex = filteredLessons.findIndex(
//         (lesson) => lesson.id === currentId
//       );
//       if (currentIndex < filteredLessons.length - 1) {
//         setSelectedLesson(filteredLessons[currentIndex + 1]);
//       } else {
//         setSelectedLesson(filteredLessons[0]);
//       }
//     }
//   };

//   const handlePurchase = (lessonId: number) => {
//     // Simulating successful payment
//     setPaymentSuccess(true);
//     setPurchasedItems([...purchasedItems, lessonId]);
//     // In a real app, you would redirect to BML payment gateway
//     setTimeout(() => {
//       setPaymentSuccess(false);
//       setShowPaymentModal(false);
//     }, 3000);
//   };

//   const isItemPurchased = (lessonId: number) => {
//     return purchasedItems.includes(lessonId);
//   };

//   return (
//     <div className="relative min-h-screen pt-24 bg-gradient-to-b from-purple-300 to-purple-50">
//       <img
//         src="/assets/R.png"
//         alt=""
//         className="absolute top-0 right-0 w-40 h-40 opacity-100 blur-md pointer-events-none md:w-[800px] md:h-[800px]"
//       />
//       <div className="container relative z-10 px-4 py-12 mx-auto max-w-7xl">
//         <div className="mb-6 text-center ">
//           <h1 className="mb-3 text-4xl font-bold text-purple-800 font-utheemu">
//             ވާހަކައާއި ގުޅުންހުރި ފިލާވަޅުތައް
//           </h1>
//           <p className="text-lg text-gray-600 font-utheemu">
//             ބޭނުންފުޅުވާ ފިލާވަޅެއް ހޯދާލުމަށްފަހު ބައްލަވާ ނުވަތަ ޑައުންލޯޑު
//             ކުރައްވާ
//           </p>
//         </div>

//         <div className="mb-8">
//           <div className="flex flex-wrap justify-center gap-3 mb-6">
//             {/* Category Filters */}
//             <button
//               onClick={() =>
//                 setActiveCategory(activeCategory === "ވާހަކަ" ? null : "ވާހަކަ")
//               }
//               className={`flex items-center gap-2 px-5 py-2 text-white transition rounded-full ${
//                 activeCategory === "ވާހަކަ"
//                   ? "bg-pink-600"
//                   : "bg-pink-600 hover:bg-pink-700"
//               }`}
//             >
//               <BookOpen size={16} />
//               <span>ވާހަކަ</span>
//             </button>
//             <button
//               onClick={() =>
//                 setActiveCategory(activeCategory === "ކުރު" ? null : "ކުރު")
//               }
//               className={`flex items-center gap-2 px-5 py-2 text-white transition rounded-full ${
//                 activeCategory === "ކުރު"
//                   ? "bg-purple-600"
//                   : "bg-purple-600 hover:bg-purple-700"
//               }`}
//             >
//               <BookOpen size={16} />
//               <span>ކުރު ވާހަކަ</span>
//             </button>
//             <button
//               onClick={() =>
//                 setActiveCategory(activeCategory === "ދިގު" ? null : "ދިގު")
//               }
//               className={`flex items-center gap-2 px-5 py-2 text-white transition rounded-full ${
//                 activeCategory === "ދިގު"
//                   ? "bg-blue-600"
//                   : "bg-blue-600 hover:bg-blue-700"
//               }`}
//             >
//               <BookOpen size={16} />
//               <span>ދިގު ވާހަކަ</span>
//             </button>

//             {/* Premium Filter */}
//             <button
//               onClick={() =>
//                 setShowPremiumFilter(showPremiumFilter === true ? null : true)
//               }
//               className={`flex items-center gap-2 px-5 py-2 transition rounded-full ${
//                 showPremiumFilter === true
//                   ? "bg-yellow-500 text-white"
//                   : "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
//               }`}
//             >
//               <Lock size={16} />
//               <span>ޕްރީމިއަމް</span>
//             </button>
//             <button
//               onClick={() =>
//                 setShowPremiumFilter(showPremiumFilter === false ? null : false)
//               }
//               className={`flex items-center gap-2 px-5 py-2 transition rounded-full ${
//                 showPremiumFilter === false
//                   ? "bg-green-600 text-white"
//                   : "bg-green-100 text-green-800 hover:bg-green-200"
//               }`}
//             >
//               <BookOpen size={16} />
//               <span>ހިލޭ</span>
//             </button>

//             {/* Clear Filters */}
//             {(searchTerm ||
//               activeCategory !== null ||
//               showPremiumFilter !== null) && (
//               <button
//                 onClick={() => {
//                   setSearchTerm("");
//                   setActiveCategory(null);
//                   setShowPremiumFilter(null);
//                 }}
//                 className="flex items-center gap-2 px-5 py-2 text-gray-700 transition bg-gray-200 rounded-full hover:bg-gray-300"
//               >
//                 <X size={16} />
//                 <span>ފިލްޓަރ ފޮހެލާ</span>
//               </button>
//             )}
//           </div>
//           <div className="relative mb-6">
//             <div className="flex flex-row-reverse items-center px-3 py-2 bg-white border border-gray-300 rounded-full shadow-sm focus-within:border-purple-500 focus-within:ring-1 focus-within:ring-purple-500">
//               <Search className="w-5 h-5 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder=" ... ފައިލް ހޯދާލުމަށް"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="block w-full p-2 text-right border-0 rounded-full focus:border-0 focus:ring-0 focus:outline-none sm:text-sm"
//               />
//               {searchTerm && (
//                 <button onClick={() => setSearchTerm("")} className="p-1">
//                   <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {filteredLessons.length > 0 ? (
//           <div
//             dir="rtl"
//             className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
//           >
//             {filteredLessons.map((lesson) => (
//               <div
//                 key={lesson.id}
//                 onClick={() => setSelectedLesson(lesson)}
//                 className="overflow-hidden transition-all bg-white border border-purple-100 shadow-sm cursor-pointer rounded-xl hover:shadow-md hover:scale-100"
//               >
//                 <div
//                   className={`h-2 ${getCategoryColor(lesson.category)}`}
//                 ></div>
//                 <div className="relative">
//                   {lesson.image && (
//                     <img
//                       src={lesson.image}
//                       alt={lesson.title}
//                       className="object-cover w-full h-48"
//                     />
//                   )}
//                   {/* Category badge */}
//                   {lesson.category && (
//                     <div
//                       className={`absolute top-3 right-3 px-3 py-1 text-sm font-medium text-white rounded-full ${getCategoryColor(
//                         lesson.category
//                       )}`}
//                     >
//                       {lesson.category}
//                     </div>
//                   )}
//                   {/* Premium badge */}
//                   {lesson.isPremium && (
//                     <div className="absolute flex items-center px-3 py-1 text-sm font-medium text-yellow-800 bg-yellow-300 rounded-full top-3 left-3">
//                       <Lock className="w-3 h-3 mr-1" />
//                       ޕްރީމިއަމް
//                     </div>
//                   )}
//                   {/* Purchased badge */}
//                   {lesson.isPremium && isItemPurchased(lesson.id) && (
//                     <div className="absolute flex items-center px-3 py-1 text-sm font-medium text-green-800 bg-green-300 rounded-full bottom-3 left-3">
//                       <Check className="w-3 h-3 mr-1" />
//                       ގަނެފައި
//                     </div>
//                   )}
//                 </div>
//                 <div className="p-5">
//                   <h2 className="mb-3 text-xl font-bold text-purple-800 font-utheemu">
//                     {lesson.title}
//                   </h2>
//                   <p className="text-sm text-gray-600 font-utheemu">
//                     {lesson.summary}
//                   </p>

//                   <div className="flex items-center justify-between mt-4">
//                     <div className="flex items-center gap-2">
//                       <BookOpen
//                         className={`w-5 h-5 ${getCategoryTextColor(
//                           lesson.category
//                         )}`}
//                       />
//                       <span className="text-sm text-gray-500">ފިލާވަޅު</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       {lesson.driveLink && (
//                         <div className="flex items-center gap-1 text-purple-600">
//                           <FileText className="w-4 h-4" />
//                           <span className="text-sm">PDF</span>
//                         </div>
//                       )}
//                       {lesson.isPremium && lesson.price && (
//                         <div className="flex items-center gap-1 ml-2 text-yellow-600">
//                           <span className="text-sm font-medium">
//                             {lesson.price} ރުފިޔާ
//                           </span>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="p-12 text-center">
//             <div className="flex flex-col items-center justify-center">
//               <FileText className="w-16 h-16 text-gray-400" />
//               <h3 className="mt-4 text-xl font-medium text-gray-900">
//                 ފިލާވަޅެއް ނުފެނުނު
//               </h3>
//               <p className="mt-2 text-gray-500">
//                 {activeCategory
//                   ? `"${activeCategory}" ކެޓަގަރީގެ ފިލާވަޅެއް ނުފެނުނު`
//                   : "ހޯދި ފިލާވަޅެއް ނުފެނުނު"}
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Lesson Detail Modal */}
//       {selectedLesson && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center text-right bg-black/70 backdrop-blur-sm">
//           <div className="relative w-full max-w-4xl p-0 mx-4 bg-white rounded-2xl overflow-hidden max-h-[90vh]">
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <button
//                 onClick={goToPrevious}
//                 className="p-2 text-purple-600 transition rounded-full hover:bg-purple-100"
//                 aria-label="Previous lesson"
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <div className="flex items-center text-center ">
//                 {selectedLesson.category && (
//                   <span
//                     className={`px-3 py-1 mr-2 text-sm font-medium text-white rounded-full ${getCategoryColor(
//                       selectedLesson.category
//                     )}`}
//                   >
//                     {selectedLesson.category}
//                   </span>
//                 )}
//                 {selectedLesson.isPremium && (
//                   <span className="flex items-center px-3 py-1 mr-2 text-sm font-medium text-yellow-800 bg-yellow-300 rounded-full">
//                     <Lock className="w-3 h-3 mr-1" />
//                     ޕްރީމިއަމް
//                   </span>
//                 )}
//                 <h3 className="text-lg font-semibold text-purple-800 font-utheemu">
//                   {selectedLesson.title}
//                 </h3>
//               </div>

//               <div className="flex items-center">
//                 <button
//                   onClick={goToNext}
//                   className="p-2 mr-2 text-purple-600 transition rounded-full hover:bg-purple-100"
//                   aria-label="Next lesson"
//                 >
//                   <ChevronRight size={20} />
//                 </button>
//                 <button
//                   onClick={() => setSelectedLesson(null)}
//                   className="p-2 text-gray-600 transition rounded-full hover:bg-gray-100"
//                   aria-label="Close"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
//             </div>

//             {selectedLesson.driveLink && (
//               <div className="flex px-4 pt-4 mb-4 space-x-2">
//                 <button
//                   onClick={() => setViewMode("content")}
//                   className={`px-4 py-2 text-sm font-medium rounded-lg transition flex items-center ${
//                     viewMode === "pdf"
//                       ? "bg-purple-700 text-white"
//                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//                 >
//                   <FileText className="w-4 h-4 mr-2" />
//                   PDF
//                 </button>

//                 {selectedLesson.driveLink &&
//                   (selectedLesson.isPremium &&
//                   !isItemPurchased(selectedLesson.id) ? (
//                     <button
//                       onClick={() => setShowPaymentModal(true)}
//                       className="flex items-center px-4 py-2 ml-auto text-sm font-medium text-white transition bg-yellow-500 rounded-lg hover:bg-yellow-600"
//                     >
//                       <CreditCard className="w-4 h-4 mr-2" />
//                       {selectedLesson.price} ރުފިޔާއަށް ގަންނާ
//                     </button>
//                   ) : (
//                     <a
//                       href={selectedLesson.driveLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-4 py-2 ml-auto text-sm font-medium text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
//                     >
//                       <Download className="w-4 h-4 mr-2" />
//                       ޑައުންލޯޑު
//                     </a>
//                   ))}
//               </div>
//             )}

//             <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
//               {viewMode === "content" ? (
//                 <div className="p-6">
//                   {selectedLesson.image && (
//                     <img
//                       src={selectedLesson.image}
//                       alt={selectedLesson.title}
//                       className="object-cover w-full mb-6 rounded-xl h-60"
//                     />
//                   )}

//                   {/* Premium content handling */}
//                   {selectedLesson.isPremium &&
//                   !isItemPurchased(selectedLesson.id) ? (
//                     <div>
//                       <p
//                         dir="rtl"
//                         className={`text-xl leading-loose text-gray-800 whitespace-pre-line font-utheemu ${
//                           selectedLesson.justify ? "text-justify" : "text-right"
//                         }`}
//                       >
//                         {selectedLesson.previewContent}
//                       </p>

//                       <div className="p-6 mt-8 border border-yellow-200 bg-yellow-50 rounded-xl">
//                         <div className="flex flex-col items-center text-center">
//                           <Lock className="w-12 h-12 mb-4 text-yellow-500" />
//                           <h3 className="mb-2 text-xl font-bold text-yellow-700 font-utheemu">
//                             ޕްރީމިއަމް ކޮންޓެންޓް
//                           </h3>
//                           <p className="mb-6 text-gray-600 font-utheemu">
//                             މި ލިޔުން ފުރިހަމައަށް ބެލުމަށް އަދި ޑައުންލޯޑް
//                             ކުރުމަށް، ޕްރީމިއަމް މެމްބަރޝިޕް ގަންނަންޖެހޭނެއެވެ
//                           </p>
//                           <button
//                             onClick={() => setShowPaymentModal(true)}
//                             className="flex items-center px-6 py-3 text-white transition bg-yellow-500 rounded-lg hover:bg-yellow-600 font-utheemu"
//                           >
//                             <CreditCard className="w-5 h-5 mr-2" />
//                             {selectedLesson.price} ރުފިޔާއަށް ގަންނާ
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <p
//                       dir="rtl"
//                       className={`text-xl leading-loose text-gray-800 whitespace-pre-line font-utheemu ${
//                         selectedLesson.justify ? "text-justify" : "text-right"
//                       }`}
//                     >
//                       {selectedLesson.content}
//                     </p>
//                   )}
//                 </div>
//               ) : (
//                 <div className="w-full h-[70vh]">
//                   {selectedLesson.isPremium &&
//                   !isItemPurchased(selectedLesson.id) ? (
//                     <div className="flex items-center justify-center w-full h-full bg-gray-100">
//                       <div className="max-w-lg p-6 bg-white border shadow-sm rounded-xl">
//                         <div className="flex flex-col items-center text-center">
//                           <FileText className="w-16 h-16 mb-4 text-gray-300" />
//                           <h3 className="mb-2 text-xl font-bold text-gray-700 font-utheemu">
//                             ޕްރީމިއަމް ފައިލް
//                           </h3>
//                           <p className="mb-6 text-gray-600 font-utheemu">
//                             މި PDF ފައިލް ބެލުމަށް އަދި ޑައުންލޯޑް ކުރުމަށް،
//                             ޕްރީމިއަމް މެމްބަރޝިޕް ގަންނަންޖެހޭނެއެވެ
//                           </p>
//                           <button
//                             onClick={() => setShowPaymentModal(true)}
//                             className="flex items-center px-6 py-3 text-white transition bg-yellow-500 rounded-lg hover:bg-yellow-600 font-utheemu"
//                           >
//                             <CreditCard className="w-5 h-5 mr-2" />
//                             {selectedLesson.price} ރުފިޔާއަށް ގަންނާ
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <iframe
//                       src={getPreviewUrl(selectedLesson.driveLink)}
//                       className="w-full h-full border border-gray-200"
//                       allow="autoplay"
//                       allowFullScreen
//                     ></iframe>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Payment Modal */}
//       {showPaymentModal && selectedLesson && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
//           <div className="relative w-full max-w-md overflow-hidden bg-white rounded-xl">
//             <div className="flex items-center justify-between p-4 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-800">
//                 ފައިސާ ދެއްކުން
//               </h3>
//               <button
//                 onClick={() => {
//                   setShowPaymentModal(false);
//                   setPaymentSuccess(false);
//                 }}
//                 className="p-2 text-gray-600 transition rounded-full hover:bg-gray-100"
//               >
//                 <X size={20} />
//               </button>
//             </div>

//             {paymentSuccess ? (
//               <div className="p-6">
//                 <div className="flex flex-col items-center text-center">
//                   <div className="flex items-center justify-center w-16 h-16 mb-4 bg-green-100 rounded-full">
//                     <Check className="w-8 h-8 text-green-600" />
//                   </div>
//                   <h3 className="mb-2 text-xl font-bold text-gray-800">
//                     ދެއްކުން ކާމިޔާބު!
//                   </h3>
//                   <p className="mb-4 text-gray-600">
//                     ކޮންޓެންޓަށް މިހާރު ވަދެވޭނެއެވެ
//                   </p>
//                   <button
//                     onClick={() => {
//                       setShowPaymentModal(false);
//                       setPaymentSuccess(false);
//                     }}
//                     className="px-6 py-2 text-white transition bg-purple-600 rounded-lg hover:bg-purple-700"
//                   >
//                     ފުރިހަމައަށް ބަލާ
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="p-6">
//                 <div className="mb-6">
//                   <div className="p-4 mb-6 rounded-lg bg-gray-50">
//                     <div className="flex items-center justify-between">
//                       <span className="text-gray-600">ފައިލް:</span>
//                       <span className="font-medium">
//                         {selectedLesson.title}
//                       </span>
//                     </div>
//                     <div className="flex items-center justify-between mt-2">
//                       <span className="text-gray-600">އަގު:</span>
//                       <span className="font-medium">
//                         {selectedLesson.price} MVR
//                       </span>
//                     </div>
//                   </div>

//                   <h4 className="mb-3 text-lg font-medium">
//                     ފައިސާ ދެއްކުމުގެ ގޮތް
//                   </h4>

//                   <div className="p-4 mb-6 border border-blue-200 rounded-lg bg-blue-50">
//                     <div className="flex items-center mb-2">
//                       <img
//                         src="/assets/bml-logo.png"
//                         alt="BML"
//                         className="h-8 mr-2"
//                       />
//                       <span className="font-medium">BML Online Payment</span>
//                     </div>
//                     <p className="text-sm text-gray-600">
//                       BML އެކައުންޓް ބޭނުންކޮށްގެން ސިކިއުރިޓީއާއިއެކު ޕޭމަންޓް
//                       ހަދާ
//                     </p>
//                   </div>

//                   {/* Payment form */}
//                   <div className="space-y-4">
//                     <div>
//                       <label className="block mb-1 text-sm font-medium text-gray-700">
//                         ކާޑު ނަންބަރު
//                       </label>
//                       <input
//                         type="text"
//                         placeholder="XXXX XXXX XXXX XXXX"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                       />
//                     </div>
//                     <div className="flex gap-4">
//                       <div className="flex-1">
//                         <label className="block mb-1 text-sm font-medium text-gray-700">
//                           މުއްދަތު ހަމަވާ ތާރީޚް
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="MM/YY"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <label className="block mb-1 text-sm font-medium text-gray-700">
//                           CVV
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="XXX"
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                   <button
//                     onClick={() => handlePurchase(selectedLesson.id)}
//                     className="flex items-center justify-center w-full py-3 font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
//                   >
//                     <CreditCard className="w-5 h-5 mr-2" />
//                     {selectedLesson.price} ރުފިޔާ ދައްކާ
//                   </button>
//                   <div className="text-center">
//                     <a
//                       href="#"
//                       className="text-sm text-blue-600 hover:underline"
//                     >
//                       ފައިސާ ދެއްކުމާ ބެހޭ މައުލޫމާތު
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// "use client";
// import { useState } from "react";
// import {
//   Lock,
//   Download,
//   AlertCircle,
//   CreditCard,
//   CheckCircle,
//   BookOpen,
//   Filter,
//   Search,
//   Eye,
// } from "lucide-react";
// import { FaLockOpen } from "react-icons/fa";

// export default function PdfLessonMarketplace() {
//   const [activeTab, setActiveTab] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [selectedLesson, setSelectedLesson] = useState(null);
//   const [processing, setProcessing] = useState(false);

//   // Mock lesson data
//   const lessons = [
//     {
//       id: 1,
//       title: "Introduction to React",
//       description: "Learn the basics of React with practical examples",
//       price: 15.99,
//       isPremium: true,
//       category: "programming",
//       pages: 45,
//       level: "Beginner",
//     },
//     {
//       id: 2,
//       title: "Advanced JavaScript Patterns",
//       description: "Master design patterns in modern JavaScript",
//       price: 24.99,
//       isPremium: true,
//       category: "programming",
//       pages: 78,
//       level: "Advanced",
//     },
//     {
//       id: 3,
//       title: "CSS Grid Fundamentals",
//       description: "Learn to create responsive layouts with CSS Grid",
//       price: 0,
//       isPremium: false,
//       category: "design",
//       pages: 32,
//       level: "Intermediate",
//     },

//   ];

//   // Filter lessons based on active tab and search query
//   const filteredLessons = lessons.filter((lesson) => {
//     const matchesTab =
//       activeTab === "all" ||
//       (activeTab === "premium" && lesson.isPremium) ||
//       (activeTab === "free" && !lesson.isPremium);

//     const matchesSearch =
//       lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       lesson.description.toLowerCase().includes(searchQuery.toLowerCase());

//     return matchesTab && matchesSearch;
//   });

//   const handleLessonClick = (lesson) => {
//     if (lesson.isPremium) {
//       setSelectedLesson(lesson);
//       setShowPaymentModal(true);
//     } else {
//       // For free lessons, download directly
//       downloadLesson(lesson);
//     }
//   };

//   const downloadLesson = (lesson) => {
//     // In real app, this would trigger the actual download
//     console.log(`Downloading lesson: ${lesson.title}`);
//     alert(`Downloading ${lesson.title}...`);
//   };

//   const [formData, setFormData] = useState({
//     cardholderName: "",
//     cardNumber: "",
//     expiryDate: "",
//     cvv: "",
//   });

//   const [formErrors, setFormErrors] = useState({});

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!formData.cardholderName.trim()) {
//       errors.cardholderName = "Cardholder name is required";
//     }

//     if (!formData.cardNumber.trim()) {
//       errors.cardNumber = "Card number is required";
//     } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
//       errors.cardNumber = "Please enter a valid 16-digit card number";
//     }

//     if (!formData.expiryDate.trim()) {
//       errors.expiryDate = "Expiry date is required";
//     } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
//       errors.expiryDate = "Please use MM/YY format";
//     }

//     if (!formData.cvv.trim()) {
//       errors.cvv = "CVV is required";
//     } else if (!/^\d{3,4}$/.test(formData.cvv)) {
//       errors.cvv = "CVV must be 3 or 4 digits";
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handlePayment = () => {
//     if (validateForm()) {
//       setProcessing(true);

//       // Simulate payment processing with BML gateway
//       setTimeout(() => {
//         setProcessing(false);
//         setShowPaymentModal(false);
//         setShowSuccessModal(true);
//       }, 2000);
//     }
//   };

//   return (
//     <div className="min-h-screen pt-24 bg-gray-50">
//       {/* Main Content */}
//       <main className="container px-4 py-8 mx-auto">
//         {/* Hero Banner */}
//         <div className="p-8 mb-8 text-white bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl">
//           <h2 className="mb-2 text-3xl font-bold">Expand Your Knowledge</h2>
//           <p className="mb-4 text-lg">
//             Access premium PDF lessons to master new skills at your own pace
//           </p>
//           <div className="flex items-center">
//             <div className="flex p-1 bg-white rounded-lg">
//               <button
//                 onClick={() => setActiveTab("all")}
//                 className={`px-4 py-2 rounded-md ${
//                   activeTab === "all"
//                     ? "bg-blue-500 text-white"
//                     : "text-blue-800"
//                 }`}
//               >
//                 All Lessons
//               </button>
//               <button
//                 onClick={() => setActiveTab("free")}
//                 className={`px-4 py-2 rounded-md ${
//                   activeTab === "free"
//                     ? "bg-blue-500 text-white"
//                     : "text-blue-800"
//                 }`}
//               >
//                 Free Lessons
//               </button>
//               <button
//                 onClick={() => setActiveTab("premium")}
//                 className={`px-4 py-2 rounded-md ${
//                   activeTab === "premium"
//                     ? "bg-blue-500 text-white"
//                     : "text-blue-800"
//                 }`}
//               >
//                 Premium Lessons
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Search and Filter */}
//         <div className="flex flex-col items-center justify-between gap-4 mb-6 md:flex-row">
//           <div className="relative w-full md:w-96">
//             <Search className="absolute w-5 h-5 text-gray-400 left-3 top-3" />
//             <input
//               type="text"
//               placeholder="Search lessons..."
//               className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-gray-600">Sort by:</span>
//             <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//               <option>Newest First</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Most Popular</option>
//             </select>
//           </div>
//         </div>

//         {/* Lesson Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredLessons.map((lesson) => (
//             <div
//               key={lesson.id}
//               className="overflow-hidden transition-shadow bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg"
//             >
//               <div
//                 className={`h-40 ${
//                   lesson.isPremium
//                     ? "bg-gradient-to-r from-indigo-500 to-purple-600"
//                     : "bg-gradient-to-r from-green-400 to-blue-500"
//                 } flex items-center justify-center`}
//               >
//                 <div className="text-center text-white">
//                   <BookOpen className="w-16 h-16 mx-auto" />
//                   <div className="mt-2 font-medium">{lesson.pages} pages</div>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-start justify-between mb-2">
//                   <h3 className="text-xl font-bold">{lesson.title}</h3>
//                   {lesson.isPremium ? (
//                     <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
//                       <Lock className="w-3 h-3 mr-1" />
//                       Premium
//                     </span>
//                   ) : (
//                     <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded flex items-center">
//                       <FaLockOpen className="w-3 h-3 mr-1" />
//                       Free
//                     </span>
//                   )}
//                 </div>
//                 <p className="mb-4 text-sm text-gray-600">
//                   {lesson.description}
//                 </p>
//                 <div className="flex items-center justify-between mb-4">
//                   <span className="text-sm text-gray-500">
//                     Level: {lesson.level}
//                   </span>
//                   <span className="text-sm text-gray-500">
//                     {lesson.category}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <div className="text-lg font-bold">
//                     {lesson.isPremium ? `$${lesson.price.toFixed(2)}` : "Free"}
//                   </div>
//                   <button
//                     onClick={() => handleLessonClick(lesson)}
//                     className={`px-4 py-2 rounded-lg flex items-center ${
//                       lesson.isPremium
//                         ? "bg-indigo-600 hover:bg-indigo-700 text-white"
//                         : "bg-green-500 hover:bg-green-600 text-white"
//                     }`}
//                   >
//                     {lesson.isPremium ? (
//                       <>
//                         <CreditCard className="w-4 h-4 mr-2" />
//                         Buy Now
//                       </>
//                     ) : (
//                       <>
//                         <Download className="w-4 h-4 mr-2" />
//                         Download
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredLessons.length === 0 && (
//           <div className="py-12 text-center">
//             <AlertCircle className="w-12 h-12 mx-auto mb-4 text-gray-400" />
//             <h3 className="text-xl font-medium text-gray-700">
//               No lessons found
//             </h3>
//             <p className="mt-2 text-gray-500">
//               Try adjusting your search or filter criteria
//             </p>
//           </div>
//         )}
//       </main>

//       {/* Payment Modal */}
//       {showPaymentModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="w-full max-w-md p-6 mx-4 bg-white rounded-xl">
//             <h3 className="mb-4 text-xl font-bold">Purchase Premium Lesson</h3>
//             <div className="mb-6">
//               <div className="p-4 mb-4 bg-gray-100 rounded-lg">
//                 <h4 className="font-medium">{selectedLesson.title}</h4>
//                 <div className="mt-2 text-xl font-bold text-blue-600">
//                   ${selectedLesson.price.toFixed(2)}
//                 </div>
//               </div>

//               <h4 className="mb-2 font-medium">BML Payment Details</h4>
//               <div className="space-y-4">
//                 <div>
//                   <label className="block mb-1 text-sm font-medium text-gray-700">
//                     Cardholder Name
//                   </label>
//                   <input
//                     type="text"
//                     name="cardholderName"
//                     value={formData.cardholderName}
//                     onChange={handleInputChange}
//                     className={`w-full border ${
//                       formErrors.cardholderName
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     } rounded-lg px-3 py-2`}
//                     placeholder="John Smith"
//                   />
//                   {formErrors.cardholderName && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {formErrors.cardholderName}
//                     </p>
//                   )}
//                 </div>
//                 <div>
//                   <label className="block mb-1 text-sm font-medium text-gray-700">
//                     Card Number
//                   </label>
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     value={formData.cardNumber}
//                     onChange={handleInputChange}
//                     className={`w-full border ${
//                       formErrors.cardNumber
//                         ? "border-red-500"
//                         : "border-gray-300"
//                     } rounded-lg px-3 py-2`}
//                     placeholder="1234 5678 9012 3456"
//                   />
//                   {formErrors.cardNumber && (
//                     <p className="mt-1 text-xs text-red-500">
//                       {formErrors.cardNumber}
//                     </p>
//                   )}
//                 </div>
//                 <div className="flex gap-4">
//                   <div className="flex-1">
//                     <label className="block mb-1 text-sm font-medium text-gray-700">
//                       Expiry Date
//                     </label>
//                     <input
//                       type="text"
//                       name="expiryDate"
//                       value={formData.expiryDate}
//                       onChange={handleInputChange}
//                       className={`w-full border ${
//                         formErrors.expiryDate
//                           ? "border-red-500"
//                           : "border-gray-300"
//                       } rounded-lg px-3 py-2`}
//                       placeholder="MM/YY"
//                     />
//                     {formErrors.expiryDate && (
//                       <p className="mt-1 text-xs text-red-500">
//                         {formErrors.expiryDate}
//                       </p>
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <label className="block mb-1 text-sm font-medium text-gray-700">
//                       CVV
//                     </label>
//                     <input
//                       type="text"
//                       name="cvv"
//                       value={formData.cvv}
//                       onChange={handleInputChange}
//                       className={`w-full border ${
//                         formErrors.cvv ? "border-red-500" : "border-gray-300"
//                       } rounded-lg px-3 py-2`}
//                       placeholder="123"
//                     />
//                     {formErrors.cvv && (
//                       <p className="mt-1 text-xs text-red-500">
//                         {formErrors.cvv}
//                       </p>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowPaymentModal(false)}
//                 className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handlePayment}
//                 className="flex items-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//                 disabled={processing}
//               >
//                 {processing ? (
//                   <>Processing...</>
//                 ) : (
//                   <>
//                     <CreditCard className="w-4 h-4 mr-2" />
//                     Pay ${selectedLesson.price.toFixed(2)}
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="w-full max-w-md p-6 mx-4 text-center bg-white rounded-xl">
//             <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
//             <h3 className="mb-2 text-2xl font-bold">Payment Successful!</h3>
//             <p className="mb-6 text-gray-600">
//               Thank you for your purchase. You now have full access to "
//               {selectedLesson.title}".
//             </p>
//             <div className="flex flex-col gap-3">
//               <button
//                 onClick={() => {
//                   setShowSuccessModal(false);
//                   downloadLesson(selectedLesson);
//                 }}
//                 className="flex items-center justify-center w-full px-4 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
//               >
//                 <Download className="w-5 h-5 mr-2" />
//                 Download PDF Now
//               </button>
//               <button
//                 onClick={() => setShowSuccessModal(false)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
//               >
//                 Return to Library
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer */}
//       {/* <footer className="py-8 text-white bg-gray-800">
//         <div className="container px-4 mx-auto">
//           <div className="flex flex-col justify-between md:flex-row">
//             <div className="mb-6 md:mb-0">
//               <div className="flex items-center">
//                 <BookOpen className="w-6 h-6 mr-2" />
//                 <h2 className="text-xl font-bold">EduPDF Library</h2>
//               </div>
//               <p className="mt-2 text-gray-400">
//                 Premium learning resources at your fingertips
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-8">
//               <div>
//                 <h3 className="mb-2 font-medium">Resources</h3>
//                 <ul className="space-y-2 text-gray-400">
//                   <li>Categories</li>
//                   <li>Bestsellers</li>
//                   <li>New Releases</li>
//                   <li>Pricing</li>
//                 </ul>
//               </div>
//               <div>
//                 <h3 className="mb-2 font-medium">Company</h3>
//                 <ul className="space-y-2 text-gray-400">
//                   <li>About Us</li>
//                   <li>Contact</li>
//                   <li>Terms of Service</li>
//                   <li>Privacy Policy</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="pt-6 mt-8 text-center text-gray-400 border-t border-gray-700">
//             <p>&copy; 2025 EduPDF Library. All rights reserved.</p>
//           </div>
//         </div>
//       </footer> */}
//     </div>
//   );
// }
