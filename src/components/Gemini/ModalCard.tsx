"use client";

import React from "react";

interface ModalCardProps {
  title: string;
  description: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const ModalCard: React.FC<ModalCardProps> = ({
  title,
  description,
  onClose,
  children,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-4xl p-8 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 font-bold text-2xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p>{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {children || (
            <>
              <div className="p-6 border rounded">Card content here</div>
              <div className="p-6 border rounded">Card content here</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
