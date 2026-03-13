// "use client";

// import React, { useState } from "react";

// interface BannerCard {
//   title: string;
//   description: string;
//   image: string;
//   modalId?: string;
//   link?: string;
// }

// const ExploreBanner: React.FC = () => {
//   const [modals, setModals] = useState<Record<string, boolean>>({
//     "modal-1": false,
//     "modal-2": false,
//     "modal-3": false,
//     "modal-4": false,
//     "modal-5": false,
//   });

//   const toggleModal = (modalId: string) => {
//     setModals((prev) => ({ ...prev, [modalId]: !prev[modalId] }));
//   };

//   const bannerCards: BannerCard[] = [
//     {
//       title: "For creativity",
//       description: "Create and inspire with tools like Nano Banana and Veo",
//       image:
//         "https://lh3.googleusercontent.com/FpxKIDua6UcqBRdzdyQGDOEqURToHg-ir2jAETX4_Q50TYayD2zeoJv-gZWq2H4QbKymI_v1maX0QHPLTt9CSknVSzRH76VIbaDjF7zy0bH0GcaV=w1440",
//       modalId: "modal-1",
//     },
//     {
//       title: "For knowledge",
//       description: "Discover helpful tools for learning",
//       image:
//         "https://lh3.googleusercontent.com/sa_StKSy0mPJrJYPVzPX7yoj0JDLdROjVkf__p_oxj-mkQXd1cQaatREC9T9DBkLWCPIfWvSL-IWZ-e8dVw7ScKYnZdQtVO_CjYBNS8I5Pxc3ajV=w1440",
//       modalId: "modal-2",
//     },
//     {
//       title: "For productivity",
//       description: "Boost efficiency with smart tools",
//       image: "/placeholder-productivity.jpg",
//       modalId: "modal-3",
//     },
//     {
//       title: "For students",
//       description: "Tools to learn and organize better",
//       image: "/placeholder-students.jpg",
//       modalId: "modal-4",
//     },
//     {
//       title: "For experimenting",
//       description: "Test and create in new ways",
//       image: "/placeholder-experimenting.jpg",
//       modalId: "modal-5",
//     },
//     {
//       title: "Explore all products",
//       description: "Discover more helpful tools and resources",
//       image: "/placeholder-all-products.jpg",
//       link: "/products/",
//     },
//   ];

//   return (
//     <div className="px-20">
//       {/* Header */}
//       <h2 className="text-5xl font-medium mb-12">Explore what's possible</h2>

//       {/* Banner Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
//         {bannerCards.map((card, index) => (
//           <div
//             key={index}
//             className="relative rounded-lg overflow-hidden shadow-md"
//           >
//             {card.modalId ? (
//               <button
//                 className="absolute inset-0"
//                 onClick={() => toggleModal(card.modalId!)}
//                 aria-label={`Open modal: ${card.title}`}
//               />
//             ) : (
//               <a
//                 href={card.link}
//                 className="absolute inset-0"
//                 aria-label={card.title}
//               />
//             )}

//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-48 object-cover"
//             />

//             <div className="p-4 bg-white">
//               <h3 className="text-lg font-semibold">{card.title}</h3>
//               <p className="text-sm mt-1">{card.description}</p>
//               {card.modalId ? (
//                 <button
//                   className="mt-2 text-blue-600 font-medium"
//                   onClick={() => toggleModal(card.modalId!)}
//                 >
//                   Learn more →
//                 </button>
//               ) : (
//                 <a
//                   href={card.link}
//                   className="mt-2 text-blue-600 font-medium inline-block"
//                 >
//                   Learn more →
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modals */}
//       {bannerCards
//         .filter((card) => card.modalId)
//         .map(
//           (card, index) =>
//             modals[card.modalId!] && (
//               <div
//                 key={index}
//                 className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//               >
//                 <div className="bg-white rounded-lg w-11/12 max-w-3xl p-6 relative">
//                   <button
//                     className="absolute top-2 right-2 text-gray-600 font-bold text-xl"
//                     onClick={() => toggleModal(card.modalId!)}
//                     aria-label="Close modal"
//                   >
//                     ×
//                   </button>
//                   <h2 className="text-xl font-bold mb-4">{card.title}</h2>
//                   <p>{card.description}</p>
//                   {/* Placeholder for modal cards */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//                     <div className="p-4 border rounded">Card content here</div>
//                     <div className="p-4 border rounded">Card content here</div>
//                   </div>
//                 </div>
//               </div>
//             ),
//         )}
//     </div>
//   );
// };

// export default ExploreBanner;

"use client";

import React, { useState } from "react";
import BannerCard from "@/components/Gemini/BannerCard";
import ModalCard from "@/components/Gemini/ModalCard";

interface BannerCardType {
  title: string;
  description: string;
  image: string;
  modalId?: string;
  link?: string;
}

const ExploreBanner: React.FC = () => {
  const [modals, setModals] = useState<Record<string, boolean>>({
    "modal-1": false,
    "modal-2": false,
    "modal-3": false,
    "modal-4": false,
    "modal-5": false,
  });

  const toggleModal = (modalId: string) => {
    setModals((prev) => ({ ...prev, [modalId]: !prev[modalId] }));
  };

  // const bannerCards: BannerCardType[] = [
  //   {
  //     title: "For creativity",
  //     description: "Create and inspire with tools like Nano Banana and Veo",
  //     image:
  //       "https://lh3.googleusercontent.com/FpxKIDua6UcqBRdzdyQGDOEqURToHg-ir2jAETX4_Q50TYayD2zeoJv-gZWq2H4QbKymI_v1maX0QHPLTt9CSknVSzRH76VIbaDjF7zy0bH0GcaV=w1440",
  //     modalId: "modal-1",
  //   },
  //   {
  //     title: "For knowledge",
  //     description: "Discover helpful tools for learning",
  //     image:
  //       "https://lh3.googleusercontent.com/sa_StKSy0mPJrJYPVzPX7yoj0JDLdROjVkf__p_oxj-mkQXd1cQaatREC9T9DBkLWCPIfWvSL-IWZ-e8dVw7ScKYnZdQtVO_CjYBNS8I5Pxc3ajV=w1440",
  //     modalId: "modal-2",
  //   },
  //   {
  //     title: "Explore all products",
  //     description: "Discover more helpful tools and resources",
  //     image: "/placeholder-all-products.jpg",
  //     link: "/products/",
  //   },
  // ];

  const bannerCards: BannerCardType[] = [
    {
      title: "For creativity",
      description: "Create and inspire with tools like Nano Banana and Veo",
      image:
        "https://lh3.googleusercontent.com/FpxKIDua6UcqBRdzdyQGDOEqURToHg-ir2jAETX4_Q50TYayD2zeoJv-gZWq2H4QbKymI_v1maX0QHPLTt9CSknVSzRH76VIbaDjF7zy0bH0GcaV=w1440",
      modalId: "modal-1",
    },
    {
      title: "For knowledge",
      description: "Discover helpful tools for learning",
      image:
        "https://lh3.googleusercontent.com/sa_StKSy0mPJrJYPVzPX7yoj0JDLdROjVkf__p_oxj-mkQXd1cQaatREC9T9DBkLWCPIfWvSL-IWZ-e8dVw7ScKYnZdQtVO_CjYBNS8I5Pxc3ajV=w1440",
      modalId: "modal-2",
    },
    {
      title: "For productivity",
      description: "Boost efficiency with smart tools",
      image:
        "https://lh3.googleusercontent.com/FpxKIDua6UcqBRdzdyQGDOEqURToHg-ir2jAETX4_Q50TYayD2zeoJv-gZWq2H4QbKymI_v1maX0QHPLTt9CSknVSzRH76VIbaDjF7zy0bH0GcaV=w1440",
      modalId: "modal-3",
    },
    {
      title: "For students",
      description: "Tools to learn and organize better",
      image:
        "https://lh3.googleusercontent.com/sa_StKSy0mPJrJYPVzPX7yoj0JDLdROjVkf__p_oxj-mkQXd1cQaatREC9T9DBkLWCPIfWvSL-IWZ-e8dVw7ScKYnZdQtVO_CjYBNS8I5Pxc3ajV=w1440",
      modalId: "modal-4",
    },
    {
      title: "For experimenting",
      description: "Test and create in new ways",
      image:
        "https://lh3.googleusercontent.com/FpxKIDua6UcqBRdzdyQGDOEqURToHg-ir2jAETX4_Q50TYayD2zeoJv-gZWq2H4QbKymI_v1maX0QHPLTt9CSknVSzRH76VIbaDjF7zy0bH0GcaV=w1440",
      modalId: "modal-5",
    },
    {
      title: "Explore all products",
      description: "Discover more helpful tools and resources",
      image:
        "https://lh3.googleusercontent.com/sa_StKSy0mPJrJYPVzPX7yoj0JDLdROjVkf__p_oxj-mkQXd1cQaatREC9T9DBkLWCPIfWvSL-IWZ-e8dVw7ScKYnZdQtVO_CjYBNS8I5Pxc3ajV=w1440",
      link: "/products/",
    },
  ];

  return (
    <div className="px-20 py-20">
      <h2 className="text-5xl font-medium mb-12">Explore what's possible</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 px-6">
        {bannerCards.map((card, index) => (
          <BannerCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            modalId={card.modalId}
            link={card.link}
            onClick={() => card.modalId && toggleModal(card.modalId)}
            disableHover={index === bannerCards.length - 1}
          />
        ))}
      </div>

      {bannerCards
        .filter((card) => card.modalId)
        .map(
          (card, index) =>
            modals[card.modalId!] && (
              <ModalCard
                key={index}
                title={card.title}
                description={card.description}
                onClose={() => toggleModal(card.modalId!)}
              />
            ),
        )}
    </div>
  );
};

export default ExploreBanner;
