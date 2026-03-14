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
    <div className="px-4 py-12 sm:py-16 mx-auto container">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-10 sm:mb-12">
        Explore what's possible
      </h2>

      {/* Responsive grid: 1 column mobile, 2 tablet, 3 desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
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

      {/* Modals */}
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
