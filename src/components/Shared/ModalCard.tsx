"use client";

import React, { useEffect, useRef } from "react";

interface ModalCardProps {
  title: string;
  description?: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalCard: React.FC<ModalCardProps> = ({
  title,
  description,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC key closes modal & lock background scroll
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose} // click outside closes modal
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevent closing when clicking button
          onClose();
        }}
        className="absolute top-5 right-5 z-10 bg-white dark:bg-gray-800 rounded-full p-2 shadow hover:scale-105 transition"
      >
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* CARD */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()} // prevent backdrop click
        className="relative w-full max-w-7xl h-[90vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl flex flex-col animate-in fade-in zoom-in duration-200"
      >
        {/* HEADER */}
        <div className="border-b border-gray-200 dark:border-gray-800 px-6 py-5 flex items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            {description && (
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                {description}
              </p>
            )}
          </div>

          <button className="hidden md:block px-5 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
            Explore All
          </button>
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
