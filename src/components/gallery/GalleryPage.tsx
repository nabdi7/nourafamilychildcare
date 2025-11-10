// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { Star, X } from "lucide-react";

// interface GalleryImage {
//   src: string;
//   alt: string;
// }

// const GalleryPage: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

//   const galleryImages: GalleryImage[] = [
//     {
//       src: "/img1.jpg",
//       alt: "Children playing",
//     },
//     {
//       src: "/img2.jpg",
//       alt: "Art activity",
//     },
//     {
//       src: "/img3.jpg",
//       alt: "Outdoor activities",
//     },
//     // {
//     //   src: "/img8.jpg",
//     //   alt: "Music & Dance",
//     // },
//     {
//       src: "/img5.jpg",
//       alt: "Group activities",
//     },
//     {
//       src: "/img6.jpg",
//       alt: "Story time",
//     },
//     // {
//     //   src: "/img7.jpg",
//     //   alt: "Science experiments",
//     // },
//     // {
//     //   src: "/img9.jpg",
//     //   alt: "Music & Dance",
//     // },
//     // {
//     //   src: "/img10.jpg",
//     //   alt: "Music & Dance",
//     // },
//   ];

//   return (
//     <div className="relative min-h-screen bg-purple-50 py-20">
//       {/* Animated background blobs */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-red-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
//         <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
//         <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
//       </div>

//       {/* Gallery content */}
//       <div className="container mx-auto px-6 pb-8">
//         <div className="text-center mb-16">
//           <div className="inline-block bg-purple-100 px-4 py-2 rounded-full mb-6">
//             <span className="text-purple-600 font-medium">Our Moments</span>
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Capturing Joy in Every{" "}
//             <span className="text-purple-600">Moment</span>
//           </h1>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Take a peek into our daily adventures and see the magic that happens
//             when children learn through play.
//           </p>
//         </div>

//         {/* Gallery grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {galleryImages.map((image, index) => (
//             <div
//               key={index}
//               className="group relative aspect-square rounded-2xl overflow-hidden bg-white p-2 shadow-lg hover:shadow-xl transition cursor-pointer"
//               onClick={() => setSelectedImage(image)}
//             >
//               <Image
//                 src={image.src}
//                 width={300}
//                 height={300}
//                 alt={image.alt}
//                 className="w-full h-full object-cover rounded-xl transition-transform group-hover:scale-105"
//               />
              
//               {/* Decorative stars */}
//               {index % 3 === 0 && (
//                 <div className="absolute -top-2 -right-2 bg-purple-400 p-2 rounded-full">
//                   <Star className="w-4 h-4 text-white animate-pulse" />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Modal for enlarged image view */}
//         {selectedImage && (
//           <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
//             <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="absolute top-4 right-4 bg-purple-300 p-2 rounded-full hover:bg-purple-500 transition"
//               >
//                 <X className="w-6 h-6 text-white" />
//               </button>
//               <Image
//                 src={selectedImage.src}
//                 width={800}
//                 height={600}
//                 alt={selectedImage.alt}
//                 className="w-full h-auto"
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;