"use client";

import React, { useState } from "react";
import { X, FileText } from "lucide-react";

interface Lesson {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  driveLink: string;
  justify?: true;
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
  },
  {
    id: 2,
    title: "ކުރު ލިޔުން",
    summary: `ސިހުރާއި ފަންޑިތައިގެ "ބަލި" އަދިވެސް ދިވެހިންގެ ތެރޭގައި!  ވޯޑުފައިލްގައި ކުރެވިދާނެ ދޭހައިގެ މަސައްކަތެއްއޮންލައިންކޮށް ކުރެވިދާނެ ދޭހައިގެ މަސައްކަތެއް`,
    content: `
      މިއީ ވޯޑުފައިލްގައި ޖަވާބުދެވޭ ގޮތަށް ތައްޔާރުކޮށްފައިވާ ދޭހައިގެ މަސައްކަތެކެވެ. މައިކްރޯ ސޮފްޓް އޮފީސްގެ ބައެއް ވާރޝަންތަކުގައި ބައެއްފަހަރު ސުވާލުތަކުގެ އިޚުތިޔާރީ ޖަވާބުތައް ؟؟؟؟؟ މި ގޮތަށް ފެނިދާނެއެވެ. އެ ހާލަތުގައި "ޑިވެލޮޕަރޓެބް" އެޑްކޮށް "ޑިޒައިން މޯޑު"އަށް ކުލިކްކޮށްލުމުން
      . އަންނަ ވިންޑޯ ލެއްޕުމުން ފޮންޓުތައް ފެންނާނެއެވެ

      `,

    image: "/assets/kuruvaahaka.png",

    driveLink:
      "https://drive.google.com/file/d/1aSHiIxHkfc7BDaF800FC-1NTGnrHppEj/view",
  },
];

export default function Lesson() {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [viewMode, setViewMode] = useState<"content" | "pdf">("content");

  // Function to extract the file ID from Google Drive link
  const getFileId = (driveLink: string): string => {
    const match = driveLink.match(/\/d\/([^\/]+)/);
    return match ? match[1] : "";
  };

  // Function to generate preview URL for Google Drive
  const getPreviewUrl = (driveLink: string): string => {
    const fileId = getFileId(driveLink);
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  return (
    <div className="relative w-full min-h-screen px-4 py-10 bg-gradient-to-br from-purple-100 to-indigo-100">
      <h1 className="mt-10 text-3xl font-extrabold text-center text-purple-800 mb-14">
        ލެސަންތައް
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            onClick={() => {
              setSelectedLesson(lesson);
              setViewMode("content");
            }}
            className="p-4 px-2 text-right transition-shadow duration-300 ease-in-out bg-white shadow cursor-pointer rounded-xl hover:shadow-lg hover:scale-102"
          >
            <div className="relative">
              {lesson.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={lesson.image}
                  alt={lesson.title}
                  className="object-cover w-full h-40 mb-4 rounded-lg"
                />
              )}
              {lesson.driveLink && (
                <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md top-2 right-2">
                  <FileText className="w-5 h-5 text-purple-700" />
                </div>
              )}
            </div>
            <h2 className="mb-2 text-xl font-bold text-purple-700 font-utheemu">
              {lesson.title}
            </h2>
            <p className="text-sm text-gray-600 font-utheemu">
              {lesson.summary}
            </p>
          </div>
        ))}
      </div>

      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-right bg-black/60 backdrop-blur-sm">
          <div className="relative w-full px-4 max-w-3xl py-10 mx-4 bg-card rounded-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedLesson(null)}
              className="absolute text-gray-600 transition top-4 right-4 hover:text-gray-900"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {selectedLesson.driveLink && (
              <div className="flex mb-6 space-x-4">
                <button
                  onClick={() => setViewMode("content")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
                    viewMode === "content"
                      ? "bg-purple-700 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
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
              </div>
            )}

            {viewMode === "content" ? (
              <>
                {selectedLesson.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selectedLesson.image}
                    alt={selectedLesson.title}
                    className="object-cover w-full mb-6 rounded-xl h-60"
                  />
                )}
                <h2 className="p-4 pb-0 mb-4 text-2xl font-bold text-purple-800 font-utheemu">
                  {selectedLesson.title}
                </h2>
                <p
                  dir="ltr"
                  className={`flex justify-end  text-center p-4 pt-0 mt-6 text-xl leading-loose text-gray-800 whitespace-pre-line font-utheemu place-items-end ${
                    selectedLesson.justify === true
                      ? "text-center"
                      : "text-right"
                  }`}
                >
                  {selectedLesson.content}
                </p>
              </>
            ) : (
              <div className="w-full h-[85vh]">
                <iframe
                  src={getPreviewUrl(selectedLesson.driveLink)}
                  className="w-full h-full border border-gray-200 rounded-lg"
                  allow="autoplay"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
