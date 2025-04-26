// // "use client";

// // import React, { useState } from "react";
// // import { X, FileText } from "lucide-react";

// // // Define the lesson type
// // interface Lesson {
// //   id: number;
// //   title: string;
// //   summary: string;
// //   content: string;
// //   image: string;
// //   driveLink: string;
// // }

// // const lessons: Lesson[] = [
// //   {
// //     id: 1,
// //     title: "ދުވަސް އެއް",
// //     summary: "މަސްދަރު އެއްގެ ތަރުތީބު.",
// //     content:
// //       "މަޤާމާ ބޮޑު ތަރުތީބު އަދި ފުރަތަމަތުގެ ސުރަހައްދުތަކާ ދައްކާލައްވާނެ...",
// //     image:
// //       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
// //     driveLink:
// //       "https://drive.google.com/file/d/19J7oYaSCNkKUVeIdRhSYPHjOFB-nVRo4/view",
// //   },
// //   {
// //     id: 2,
// //     title: "ދުވަސް ދެ",
// //     summary: "މިހާރު ގޮތަށް އަދި ރަނގަޅު.",
// //     content:
// //       "ބޭނުން ތަރުތީބުގެ މަޤާމުގެ މައުލޫމާތު ތަޢާލީމުކޮށް މިތަނަށް ލައިފާނެ...",
// //     image:
// //       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?fit=crop&w=600&q=80",
// //     driveLink:
// //       "https://drive.google.com/file/d/1TyXGTB3HpgpC17YvXuNcVlO4wUh9U2WK/preview",
// //   },
// //   {
// //     id: 3,
// //     title: "ދުވަސް އެއް",
// //     summary: "މަސްދަރު އެއްގެ ތަރުތީބު.",
// //     content:
// //       "ވަޒީފާއަދާކުރުމަކީ ވެސް ހަމައެކަނި ފިރިހެނުންނަށް އޮތް އިޚުތިޔާރެއްކަމަށް ވަކާލާތުކުރާ މަދު ބަޔަކު ނަމަވެސް މުޖުތަމަޢުގައި އުޅެއެވެ...",
// //     image:
// //       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
// //     driveLink:
// //       "https://drive.google.com/file/d/1Rzy4eLj1rQYzYZBqcXGLvXbA0cvY2tQp/preview",
// //   },
// //   {
// //     id: 4,
// //     title: "ދުވަސް އެއް",
// //     summary: "މަސްދަރު އެއްގެ ތަރުތީބު.",
// //     content:
// //       "މަޤާމާ ބޮޑު ތަރުތީބު އަދި ފުރަތަމަތުގެ ސުރަހައްދުތަކާ ދައްކާލައްވާނެ...",
// //     image:
// //       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
// //     driveLink:
// //       "https://drive.google.com/file/d/1KM9pTHPkKEzEnG84U76TqkCrLrPS-0FX/preview",
// //   },
// // ];

// // export default function Lesson() {
// //   const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
// //   const [viewMode, setViewMode] = useState<"content" | "pdf">("content");

// //   return (
// //     <div className="relative w-full min-h-screen px-4 py-10 bg-gradient-to-br from-purple-100 to-indigo-100">
// //       <h1 className="mt-10 text-3xl font-extrabold text-center text-purple-800 mb-14">
// //         ލެސަންތައް
// //       </h1>

// //       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
// //         {lessons.map((lesson) => (
// //           <div
// //             key={lesson.id}
// //             onClick={() => setSelectedLesson(lesson)}
// //             className="p-4 transition duration-200 bg-white shadow cursor-pointer rounded-xl hover:shadow-lg hover:scale-105"
// //           >
// //             <div className="relative">
// //               {lesson.image && (
// //                 <img
// //                   src={lesson.image}
// //                   alt={lesson.title}
// //                   className="object-cover w-full h-40 mb-4 rounded-lg"
// //                 />
// //               )}
// //               {lesson.driveLink && (
// //                 <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md top-2 right-2">
// //                   <FileText className="w-5 h-5 text-purple-700" />
// //                 </div>
// //               )}
// //             </div>
// //             <h2 className="mb-2 text-xl font-bold text-purple-700">
// //               {lesson.title}
// //             </h2>
// //             <p className="text-sm text-gray-600">{lesson.summary}</p>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Fullscreen Sheet */}
// //       {selectedLesson && (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
// //           <div className="relative w-full px-10 max-w-3xl py-10 mx-4 bg-white rounded-2xl max-h-[90vh] overflow-y-auto">
// //             {/* Close Icon */}
// //             <button
// //               onClick={() => setSelectedLesson(null)}
// //               className="absolute text-gray-600 transition top-4 right-4 hover:text-gray-900"
// //               aria-label="Close"
// //             >
// //               <X size={28} />
// //             </button>

// //             {/* View Toggle */}
// //             {selectedLesson.driveLink && (
// //               <div className="flex mb-6 space-x-4">
// //                 <button
// //                   onClick={() => setViewMode("content")}
// //                   className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
// //                     viewMode === "content"
// //                       ? "bg-purple-700 text-white"
// //                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// //                   }`}
// //                 >
// //                   ލިޔުން
// //                 </button>
// //                 <button
// //                   onClick={() => setViewMode("pdf")}
// //                   className={`px-4 py-2 text-sm font-medium rounded-lg transition flex items-center ${
// //                     viewMode === "pdf"
// //                       ? "bg-purple-700 text-white"
// //                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
// //                   }`}
// //                 >
// //                   <FileText className="w-4 h-4 mr-2" />
// //                   PDF
// //                 </button>
// //               </div>
// //             )}

// //             {viewMode === "content" ? (
// //               <>
// //                 {selectedLesson.image && (
// //                   <img
// //                     src={selectedLesson.image}
// //                     alt={selectedLesson.title}
// //                     className="object-cover w-full mb-6 rounded-xl h-60"
// //                   />
// //                 )}
// //                 <h2 className="mb-4 text-2xl font-bold text-purple-800">
// //                   {selectedLesson.title}
// //                 </h2>
// //                 <p className="mt-6 text-sm leading-loose text-gray-800 whitespace-pre-line">
// //                   {selectedLesson.content}
// //                 </p>
// //               </>
// //             ) : (
// //               <div className="w-full h-[70vh]">
// //                 <iframe
// //                   src={selectedLesson.driveLink}
// //                   className="w-full h-full border border-gray-200 rounded-lg"
// //                   allow="autoplay"
// //                   allowFullScreen
// //                 ></iframe>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// "use client";

// import React, { useState } from "react";
// import { X, FileText, AlertTriangle } from "lucide-react";

// // Define the lesson type
// interface Lesson {
//   id: number;
//   title: string;
//   summary: string;
//   content: string;
//   image: string;
//   driveLink: string;
// }

// const lessons: Lesson[] = [
//   {
//     id: 1,
//     title: "ދުވަސް އެއް",
//     summary: "މަސްދަރު އެއްގެ ތަރުތީބު.",
//     content:
//       "މަޤާމާ ބޮޑު ތަރުތީބު އަދި ފުރަތަމަތުގެ ސުރަހައްދުތަކާ ދައްކާލައްވާނެ...",
//     image:
//       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
//     driveLink:
//       "https://drive.google.com/file/d/1XNsHYUJ8PJoYhSZmj7_6mHTVXts0rKNQ/preview",
//   },
//   {
//     id: 2,
//     title: "ދުވަސް ދެ",
//     summary: "މިހާރު ގޮތަށް އަދި ރަނގަޅު.",
//     content:
//       "ބޭނުން ތަރުތީބުގެ މަޤާމުގެ މައުލޫމާތު ތަޢާލީމުކޮށް މިތަނަށް ލައިފާނެ...",
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?fit=crop&w=600&q=80",
//     driveLink:
//       "https://drive.google.com/file/d/1TyXGTB3HpgpC17YvXuNcVlO4wUh9U2WK/preview",
//   },
//   {
//     id: 3,
//     title: "ދުވަސް އެއް",
//     summary: "މަސްދަރު އެއްގެ ތަރުތީބު.",
//     content:
//       "ވަޒީފާއަދާކުރުމަކީ ވެސް ހަމައެކަނި ފިރިހެނުންނަށް އޮތް އިޚުތިޔާރެއްކަމަށް ވަކާލާތުކުރާ މަދު ބަޔަކު ނަމަވެސް މުޖުތަމަޢުގައި އުޅެއެވެ...",
//     image:
//       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
//     driveLink:
//       "https://drive.google.com/file/d/1Rzy4eLj1rQYzYZBqcXGLvXbA0cvY2tQp/preview",
//   },
//   {
//     id: 4,
//     title: "ދުވަސް އެއް",
//     summary: "މަސްދަރު އެއްގެ ތަރުތީބު.",
//     content:
//       "މަޤާމާ ބޮޑު ތަރުތީބު އަދި ފުރަތަމަތުގެ ސުރަހައްދުތަކާ ދައްކާލައްވާނެ...",
//     image:
//       "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
//     driveLink:
//       "https://drive.google.com/file/d/1KM9pTHPkKEzEnG84U76TqkCrLrPS-0FX/preview",
//   },
// ];

// export default function Lesson() {
//   const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
//   const [viewMode, setViewMode] = useState<"content" | "pdf">("content");
//   const [pdfError, setPdfError] = useState<boolean>(false);

//   // Function to extract the file ID from Google Drive link
//   const getFileId = (driveLink: string): string => {
//     const match = driveLink.match(/\/d\/([^\/]+)/);
//     return match ? match[1] : "";
//   };

//   // Function to generate a direct link for opening in a new tab
//   const getDirectLink = (driveLink: string): string => {
//     const fileId = getFileId(driveLink);
//     return `https://drive.google.com/file/d/${fileId}/view`;
//   };

//   // Function to handle iframe error
//   const handleIframeError = () => {
//     setPdfError(true);
//   };

//   return (
//     <div className="relative w-full min-h-screen px-4 py-10 bg-gradient-to-br from-purple-100 to-indigo-100">
//       <h1 className="mt-10 text-3xl font-extrabold text-center text-purple-800 mb-14">
//         ލެސަންތައް
//       </h1>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {lessons.map((lesson) => (
//           <div
//             key={lesson.id}
//             onClick={() => {
//               setSelectedLesson(lesson);
//               setPdfError(false); // Reset error state when selecting a new lesson
//               setViewMode("content"); // Default to content view
//             }}
//             className="p-4 transition duration-200 bg-white shadow cursor-pointer rounded-xl hover:shadow-lg hover:scale-105"
//           >
//             <div className="relative">
//               {lesson.image && (
//                 <img
//                   src={lesson.image}
//                   alt={lesson.title}
//                   className="object-cover w-full h-40 mb-4 rounded-lg"
//                 />
//               )}
//               {lesson.driveLink && (
//                 <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md top-2 right-2">
//                   <FileText className="w-5 h-5 text-purple-700" />
//                 </div>
//               )}
//             </div>
//             <h2 className="mb-2 text-xl font-bold text-purple-700">
//               {lesson.title}
//             </h2>
//             <p className="text-sm text-gray-600">{lesson.summary}</p>
//           </div>
//         ))}
//       </div>

//       {/* Fullscreen Sheet */}
//       {selectedLesson && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
//           <div className="relative w-full px-10 max-w-3xl py-10 mx-4 bg-white rounded-2xl max-h-[90vh] overflow-y-auto">
//             {/* Close Icon */}
//             <button
//               onClick={() => setSelectedLesson(null)}
//               className="absolute text-gray-600 transition top-4 right-4 hover:text-gray-900"
//               aria-label="Close"
//             >
//               <X size={28} />
//             </button>

//             {/* View Toggle */}
//             {selectedLesson.driveLink && (
//               <div className="flex mb-6 space-x-4">
//                 <button
//                   onClick={() => {
//                     setViewMode("content");
//                     setPdfError(false);
//                   }}
//                   className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
//                     viewMode === "content"
//                       ? "bg-purple-700 text-white"
//                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//                 >
//                   ލިޔުން
//                 </button>
//                 <button
//                   onClick={() => {
//                     setViewMode("pdf");
//                     setPdfError(false);
//                   }}
//                   className={`px-4 py-2 text-sm font-medium rounded-lg transition flex items-center ${
//                     viewMode === "pdf"
//                       ? "bg-purple-700 text-white"
//                       : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                   }`}
//                 >
//                   <FileText className="w-4 h-4 mr-2" />
//                   PDF
//                 </button>
//               </div>
//             )}

//             {viewMode === "content" ? (
//               <>
//                 {selectedLesson.image && (
//                   <img
//                     src={selectedLesson.image}
//                     alt={selectedLesson.title}
//                     className="object-cover w-full mb-6 rounded-xl h-60"
//                   />
//                 )}
//                 <h2 className="mb-4 text-2xl font-bold text-purple-800">
//                   {selectedLesson.title}
//                 </h2>
//                 <p className="mt-6 text-sm leading-loose text-gray-800 whitespace-pre-line">
//                   {selectedLesson.content}
//                 </p>
//               </>
//             ) : pdfError ? (
//               <div className="flex flex-col items-center justify-center p-8 text-center bg-gray-100 rounded-lg">
//                 <AlertTriangle className="w-12 h-12 mb-4 text-yellow-500" />
//                 <h3 className="mb-3 text-xl font-bold text-gray-800">
//                   Access Error
//                 </h3>
//                 <p className="mb-6 text-gray-600">
//                   Unable to load the PDF. You may need permission to access this
//                   file.
//                 </p>
//                 <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
//                   <a
//                     href={getDirectLink(selectedLesson.driveLink)}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="px-4 py-2 font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800"
//                   >
//                     Open in Google Drive
//                   </a>
//                   <button
//                     onClick={() => setViewMode("content")}
//                     className="px-4 py-2 font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
//                   >
//                     Back to Content
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <div className="w-full h-[70vh]">
//                 <iframe
//                   src={selectedLesson.driveLink}
//                   className="w-full h-full border border-gray-200 rounded-lg"
//                   allow="autoplay"
//                   allowFullScreen
//                   onError={handleIframeError}
//                 ></iframe>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import { X, FileText } from "lucide-react";

// Define the lesson type
interface Lesson {
  id: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  driveLink: string;
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: "ދުވަސް އެއް",
    summary: "މަސްދަރު އެއްގެ ތަރުތީބު.",
    content:
      "މަޤާމާ ބޮޑު ތަރުތީބު އަދި ފުރަތަމަތުގެ ސުރަހައްދުތަކާ ދައްކާލައްވާނެ...",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
    driveLink:
      "https://drive.google.com/file/d/19J7oYaSCNkKUVeIdRhSYPHjOFB-nVRo4/view",
  },
  {
    id: 2,
    title: "ދުވަސް ދެ",
    summary: "މިހާރު ގޮތަށް އަދި ރަނގަޅު.",
    content:
      "ބޭނުން ތަރުތީބުގެ މަޤާމުގެ މައުލޫމާތު ތަޢާލީމުކޮށް މިތަނަށް ލައިފާނެ...",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?fit=crop&w=600&q=80",
    driveLink:
      "https://drive.google.com/file/d/1TyXGTB3HpgpC17YvXuNcVlO4wUh9U2WK/preview",
  },
  {
    id: 3,
    title: "ދުވަސް އެއް",
    summary: "މަސްދަރު އެއްގެ ތަރުތީބު.",
    content:
      "ވަޒީފާއަދާކުރުމަކީ ވެސް ހަމައެކަނި ފިރިހެނުންނަށް އޮތް އިޚުތިޔާރެއްކަމަށް ވަކާލާތުކުރާ މަދު ބަޔަކު ނަމަވެސް މުޖުތަމަޢުގައި އުޅެއެވެ...",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
    driveLink:
      "https://drive.google.com/file/d/1Rzy4eLj1rQYzYZBqcXGLvXbA0cvY2tQp/preview",
  },
  {
    id: 4,
    title: "ދުވަސް އެއް",
    summary: "މަސްދަރު އެއްގެ ތަރުތީބު.",
    content:
      "މަޤާމާ ބޮޑު ތަރުތީބު އަދި ފުރަތަމަތުގެ ސުރަހައްދުތަކާ ދައްކާލައްވާނެ...",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?fit=crop&w=600&q=80",
    driveLink:
      "https://drive.google.com/file/d/1KM9pTHPkKEzEnG84U76TqkCrLrPS-0FX/preview",
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
    // This URL format will show Google's viewer interface which handles access requests
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
              setViewMode("content"); // Default to content view
            }}
            className="p-4 px-2 transition duration-200 bg-white shadow cursor-pointer rounded-xl hover:shadow-lg hover:scale-105"
          >
            <div className="relative">
              {lesson.image && (
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
            <h2 className="mb-2 text-xl font-bold text-purple-700">
              {lesson.title}
            </h2>
            <p className="text-sm text-gray-600">{lesson.summary}</p>
          </div>
        ))}
      </div>

      {/* Fullscreen Sheet */}
      {selectedLesson && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full px-4 max-w-3xl py-10 mx-4 bg-white rounded-2xl max-h-[90vh] overflow-y-auto">
            {/* Close Icon */}
            <button
              onClick={() => setSelectedLesson(null)}
              className="absolute text-gray-600 transition top-4 right-4 hover:text-gray-900"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* View Toggle */}
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
                  <img
                    src={selectedLesson.image}
                    alt={selectedLesson.title}
                    className="object-cover w-full mb-6 rounded-xl h-60"
                  />
                )}
                <h2 className="mb-4 text-2xl font-bold text-purple-800">
                  {selectedLesson.title}
                </h2>
                <p className="mt-6 text-sm leading-loose text-gray-800 whitespace-pre-line">
                  {selectedLesson.content}
                </p>
              </>
            ) : (
              //   <div className="w-full h-[70vh]">
              //     <iframe
              //       src={getPreviewUrl(selectedLesson.driveLink)}
              //       className="w-full h-full border border-gray-200 rounded-lg"
              //       allow="autoplay"
              //       allowFullScreen
              //     ></iframe>
              //   </div>
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
