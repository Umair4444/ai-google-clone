"use client";

import React from "react";

interface BannerCardProps {
  title: string;
  description: string;
  image: string;
  modalId?: string;
  link?: string;
  onClick?: () => void;
  disableHover?: boolean;
}

const BannerCard: React.FC<BannerCardProps> = ({
  title,
  description,
  image,
  modalId,
  link,
  onClick,
  disableHover,
}) => {
  return (
    <div className="relative h-[500px] rounded-[40px] overflow-hidden shadow-lg transition-transform duration-300 cursor-pointer group">
      {/* Card image */}
      <img src={image} alt={title} className="w-full h-full object-cover" />

      {/* Dark overlay on hover */}
      <div
        className={`absolute inset-0 bg-black/0 ${
          !disableHover ? "group-hover:bg-black/40" : ""
        } transition-colors duration-300 z-10 rounded-[40px]`}
      />

      {/* Clickable overlay */}
      {modalId ? (
        <button
          className="absolute inset-0 z-20 cursor-pointer"
          onClick={onClick}
          aria-label={`Open modal: ${title}`}
        />
      ) : (
        <a
          href={link}
          className="absolute inset-0 z-20 cursor-pointer"
          aria-label={title}
        />
      )}

      {/* Card content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-30 text-white">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-md mt-2">{description}</p>

        {modalId ? (
          <button
            className="mt-4 text-blue-400 font-medium cursor-pointer hover:underline"
            onClick={onClick}
          >
            Learn more →
          </button>
        ) : (
          <a
            href={link}
            className="mt-4 text-blue-400 font-medium inline-block cursor-pointer hover:underline"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
};

export default BannerCard;
