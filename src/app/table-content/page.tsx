/* eslint-disable @next/next/no-img-element */
// "use client";
// import React, { useState } from "react";
// import {
//   Download,
//   Search,
//   Filter,
//   X,
//   FileText,
//   Image,
//   FileArchive,
// } from "lucide-react";

// type UploadItem = {
//   id: string;
//   name: string;
//   uploadedAt: Date;
//   href: string;
//   type?: string;
//   size?: string;
// };

// const uploads: UploadItem[] = [
//   {
//     id: "1",
//     name: "Product_Requirements_Document.pdf",
//     uploadedAt: new Date("2025-04-25"),
//     href: "/uploads/document.pdf",
//     type: "PDF",
//     size: "2.4 MB",
//   },
//   {
//     id: "2",
//     name: "Team_Meeting_Notes.docx",
//     uploadedAt: new Date("2025-04-24"),
//     href: "/uploads/notes.docx",
//     type: "DOCX",
//     size: "534 KB",
//   },
//   {
//     id: "3",
//     name: "Marketing_Campaign_Image.png",
//     uploadedAt: new Date("2025-04-24"),
//     href: "/uploads/photo.png",
//     type: "PNG",
//     size: "1.2 MB",
//   },
//   {
//     id: "4",
//     name: "Quarterly_Financial_Report.xlsx",
//     uploadedAt: new Date("2025-04-23"),
//     href: "/uploads/report.xlsx",
//     type: "XLSX",
//     size: "876 KB",
//   },
//   {
//     id: "5",
//     name: "Project_Resources.zip",
//     uploadedAt: new Date("2025-04-22"),
//     href: "/uploads/resources.zip",
//     type: "ZIP",
//     size: "4.7 MB",
//   },
// ];

// const getFileIcon = (fileName: string) => {
//   if (
//     fileName.endsWith(".pdf") ||
//     fileName.endsWith(".docx") ||
//     fileName.endsWith(".doc")
//   ) {
//     return <FileText className="text-indigo-600" size={20} />;
//   } else if (
//     fileName.endsWith(".png") ||
//     fileName.endsWith(".jpg") ||
//     fileName.endsWith(".jpeg")
//   ) {
//     return <Image className="text-emerald-600" size={20} />;
//   } else if (fileName.endsWith(".zip") || fileName.endsWith(".rar")) {
//     return <FileArchive className="text-amber-600" size={20} />;
//   }
//   return <FileText className="text-gray-600" size={20} />;
// };

// const getFileTypeColor = (type: string) => {
//   switch (type?.toUpperCase()) {
//     case "PDF":
//       return "bg-red-100 text-red-700";
//     case "DOCX":
//     case "DOC":
//       return "bg-blue-100 text-blue-700";
//     case "PNG":
//     case "JPG":
//       return "bg-emerald-100 text-emerald-700";
//     case "XLSX":
//     case "XLS":
//       return "bg-green-100 text-green-700";
//     case "ZIP":
//     case "RAR":
//       return "bg-amber-100 text-amber-700";
//     default:
//       return "bg-gray-100 text-gray-700";
//   }
// };

// const UploadList = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredUploads, setFilteredUploads] = useState(uploads);

//   const handleSearch = (e: { target: { value: string } }) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);

//     if (term === "") {
//       setFilteredUploads(uploads);
//     } else {
//       const filtered = uploads.filter(
//         (item) =>
//           item.name.toLowerCase().includes(term) ||
//           item.type?.toLowerCase().includes(term)
//       );
//       setFilteredUploads(filtered);
//     }
//   };

//   const clearSearch = () => {
//     setSearchTerm("");
//     setFilteredUploads(uploads);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
//       <img
//         src="/assets/R.png"
//         alt="Decoration"
//         className="absolute top-0 right-0 pointer-events-none w-60 h-60"
//       />
//       <img
//         src="/assets/R.png"
//         alt="Decoration"
//         className="absolute pointer-events-none -top-16 right-48 w-60 h-60"
//         style={{ transform: "rotate(-16deg)" }}
//       />

//       <div className="relative z-10 max-w-4xl px-4 pt-24 pb-20 mx-auto sm:px-6 lg:px-8">
//         <div className="mb-8 text-center">
//           <h1 className="text-3xl font-bold tracking-tight text-purple-800 font-utheemu sm:text-4xl">
//             ބަނޑޭރިގަށޑު
//           </h1>
//           <p className="mt-2 text-lg text-gray-600 font-utheemu">
//             ޙިއްސާ ކުރެވިފައި ހުރި ފައިލްތަށް
//           </p>
//         </div>

//         <div className="relative mb-6">
//           <div className="flex flex-row-reverse items-center px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm ">
//             <Search className="w-5 h-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder=" ... ފައިލް ހޯދާލުމަށް  "
//               value={searchTerm}
//               onChange={handleSearch}
//               className="block w-full p-2 text-right border-0 focus:border-0 focus:ring-0 focus:outline-none sm:text-sm"
//             />

//             {searchTerm && (
//               <button onClick={clearSearch} className="p-1">
//                 <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
//               </button>
//             )}
//           </div>
//         </div>

//         <div className="overflow-hidden bg-white shadow sm:rounded-lg">
//           <ul className="divide-y divide-gray-200">
//             {filteredUploads.length > 0 ? (
//               filteredUploads.map((item) => (
//                 <li key={item.id} className="transition-all hover:bg-gray-50">
//                   <a
//                     href={item.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center justify-between p-4 sm:px-6"
//                   >
//                     <div className="flex items-center space-x-4">
//                       <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
//                         {getFileIcon(item.name)}
//                       </div>
//                       <div>
//                         <h3 className="text-sm font-medium text-gray-900 sm:text-base">
//                           {item.name}
//                         </h3>
//                         <div className="flex items-center mt-1 space-x-2 text-xs text-gray-500 sm:text-sm">
//                           <span>{item.uploadedAt.toLocaleDateString()}</span>
//                           <span>•</span>
//                           <span>{item.size}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center space-x-3">
//                       {item.type && (
//                         <span
//                           className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getFileTypeColor(
//                             item.type
//                           )}`}
//                         >
//                           {item.type}
//                         </span>
//                       )}
//                       <button className="p-2 text-gray-400 transition-colors rounded-full hover:text-indigo-600 hover:bg-indigo-50">
//                         <Download size={18} />
//                       </button>
//                     </div>
//                   </a>
//                 </li>
//               ))
//             ) : (
//               <li className="py-12">
//                 <div className="text-center">
//                   <p className="text-sm text-gray-500">
//                     No files match your search
//                   </p>
//                 </div>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploadList;

"use client";

import React, { useState } from "react";
import {
  Download,
  Search,
  X,
  FileText,
  Image,
  FileArchive,
} from "lucide-react";

type UploadItem = {
  id: string;
  name: string;
  uploadedAt: Date;
  href: string;
  type?: string;
  size?: string;
};

const uploads: UploadItem[] = [
  {
    id: "1",
    name: "Product_Requirements_Document.pdf",
    uploadedAt: new Date("2025-04-25"),
    href: "/uploads/document.pdf",
    type: "PDF",
    size: "2.4 MB",
  },
  {
    id: "2",
    name: "Team_Meeting_Notes.docx",
    uploadedAt: new Date("2025-04-24"),
    href: "/uploads/notes.docx",
    type: "DOCX",
    size: "534 KB",
  },
  {
    id: "3",
    name: "Marketing_Campaign_Image.png",
    uploadedAt: new Date("2025-04-24"),
    href: "/uploads/photo.png",
    type: "PNG",
    size: "1.2 MB",
  },
  {
    id: "4",
    name: "Quarterly_Financial_Report.xlsx",
    uploadedAt: new Date("2025-04-23"),
    href: "/uploads/report.xlsx",
    type: "XLSX",
    size: "876 KB",
  },
  {
    id: "5",
    name: "Project_Resources.zip",
    uploadedAt: new Date("2025-04-22"),
    href: "/uploads/resources.zip",
    type: "ZIP",
    size: "4.7 MB",
  },
];

const getFileIcon = (fileName: string) => {
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

const UploadList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUploads, setFilteredUploads] = useState(uploads);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    setFilteredUploads(
      term
        ? uploads.filter(
            (item) =>
              item.name.toLowerCase().includes(term) ||
              item.type?.toLowerCase().includes(term)
          )
        : uploads
    );
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredUploads(uploads);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br bg-background">
      <img
        src="/assets/R.png"
        alt=""
        className="absolute top-0 right-0 w-40 h-40 opacity-100 blur-md pointer-events-none md:w-[800px] md:h-[800px]"
      />

      <div className="relative z-10 max-w-4xl px-4 pt-24 pb-16 mx-auto sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-purple-800 font-utheemu sm:text-4xl">
            ބަނޑޭރިގަށޑު
          </h1>
          <p className="mt-2 text-lg text-gray-600 font-utheemu">
            ޙިއްސާ ކުރެވިފައި ހުރި ފައިލްތަށް
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-6">
          <div className="flex flex-row-reverse items-center gap-2 px-3 py-2 bg-white border rounded-lg shadow-sm">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="ފައިލް ހޯދާލުމަށް..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full p-2 text-right border-0 focus:ring-0 focus:outline-none sm:text-sm"
            />
            {searchTerm && (
              <button onClick={clearSearch} className="p-1">
                <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded-lg shadow">
          <ul className="divide-y divide-gray-200">
            {filteredUploads.length ? (
              filteredUploads.map((item) => (
                <li
                  key={item.id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:flex-row-reverse"
                  >
                    {/* File Info */}
                    <div className="flex items-center gap-4 sm:flex-row-reverse">
                      <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
                        {getFileIcon(item.name)}
                      </div>
                      <div className="text-right sm:text-right">
                        <h3 className="text-sm font-medium text-gray-900 truncate sm:text-base max-w-[200px]">
                          {item.name}
                        </h3>
                        <div className="flex flex-col gap-1 mt-1 text-xs text-gray-500 sm:flex-row-reverse sm:items-center sm:gap-2">
                          <span>{item.uploadedAt.toLocaleDateString()}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{item.size}</span>
                        </div>
                      </div>
                    </div>

                    {/* File Actions */}
                    <div className="flex items-center self-end gap-3 sm:self-auto sm:flex-row-reverse">
                      {item.type && (
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getFileTypeColor(
                            item.type
                          )}`}
                        >
                          {item.type}
                        </span>
                      )}
                      <button
                        type="button"
                        className="p-2 text-gray-400 transition-colors rounded-full hover:bg-indigo-50 hover:text-indigo-600"
                      >
                        <Download size={18} />
                      </button>
                    </div>
                  </a>
                </li>
              ))
            ) : (
              <li className="py-12 text-center">
                <p className="text-sm text-gray-500">
                  No files match your search.
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UploadList;
