"use client";

import React from "react";

interface LoadingAnimationProps {
  message?: string;
}

const LoadingAnimation = ({ message = "Generating your solution..." }: LoadingAnimationProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-6">
      {/* Spinning loader */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-purple-600 border-r-purple-600 rounded-full animate-spin"></div>
      </div>

      {/* Loading text */}
      <p className="text-lg text-gray-600 font-medium">{message}</p>
    </div>
  );
};

export default LoadingAnimation;
