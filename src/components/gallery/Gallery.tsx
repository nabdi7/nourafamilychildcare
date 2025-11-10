// import React from "react";
// import Image from "next/image";

// const Gallery = () => {
//   const images = [
//     {
//       src: "/img1.jpg",
//       alt: "Children playing with colorful toys",
//       label: "Creative Play",
//     },
//     {
//       src: "/img2.jpg",
//       alt: "Story time with kids",
//       label: "Story Time",
//     },
//     {
//       src: "/img3.jpg",
//       alt: "Arts and crafts activity",
//       label: "Arts & Crafts",
//     },
//     {
//       src: "/img4.jpg",
//       alt: "Outdoor playground fun",
//       label: "Outdoor Fun",
//     },
//     {
//       src: "/img5.jpg",
//       alt: "Learning environment",
//       label: "Learning Space",
//     },
//     {
//       src: "/img6.jpg",
//       alt: "Snack time",
//       label: "Meal Time",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white relative overflow-hidden">
//       {/* Background decorations */}
//       <div className="absolute top-20 right-10 w-32 h-32 bg-orange-200 rounded-full opacity-30" />
//       <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-200 rounded-full opacity-20" />

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="mb-20">
//           <p className="text-orange-500 font-medium mb-2 text-sm uppercase tracking-wider">
//             OUR SPACE
//           </p>
//           <h2 className="text-4xl font-bold text-gray-800">See Us in Action</h2>
//           {/* <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Take a peek into our vibrant learning environment where children
//             explore, create, and grow every day.
//           </p> */}
//         </div>

//         {/* Masonry Grid Layout */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {/* Large featured image */}
//           <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl shadow-xl">
//             <div className="relative h-[500px]">
//               <Image
//                 src={images[0].src}
//                 fill
//                 alt={images[0].alt}
//                 className="object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent" />
//               <div className="absolute bottom-6 left-6 text-white">
//                 <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
//                   {images[0].label}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Smaller images */}
//           {images.slice(1, 3).map((image, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-3xl shadow-lg"
//             >
//               <div className="relative h-[240px]">
//                 <Image
//                   src={image.src}
//                   fill
//                   alt={image.alt}
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 via-orange-900/10 to-transparent" />
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold">
//                     {image.label}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Bottom row */}
//           {images.slice(3).map((image, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-3xl shadow-lg"
//             >
//               <div className="relative h-[240px]">
//                 <Image
//                   src={image.src}
//                   fill
//                   alt={image.alt}
//                   className="object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/10 to-transparent" />
//                 <div className="absolute bottom-4 left-4 text-white">
//                   <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold">
//                     {image.label}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         {/* <div className="text-center mt-12">
//           <p className="text-gray-600 mb-6">
//             Want to see more? Schedule a tour and experience it yourself!
//           </p>
//           <a
//             href="/contact"
//             className="bg-orange-500 text-white px-10 py-4 rounded-full hover:bg-orange-600 transition-all shadow-lg hover:shadow-xl inline-block font-semibold"
//           >
//             Book Your Visit
//           </a>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Gallery;
