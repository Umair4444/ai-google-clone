"use client";

import { useState } from "react";

type LinkItem = {
  id: string;
  label: string;
};

type JumpLinksProps = {
  links: LinkItem[];
  defaultActive?: string;
  onChange?: (id: string) => void;
  className?: string;
};

export default function JumpLinks({
  links,
  defaultActive,
  onChange,
  className = "",
}: JumpLinksProps) {
  const [active, setActive] = useState(defaultActive || links[0]?.id);

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id);

    // Smooth scroll
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={`py-8 w-full ${className}`}>
      <div className="w-fit mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <ul className="flex flex-nowrap gap-1 bg-gray-100 px-1 py-1 rounded-full mx-auto w-max min-w-full">
          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <li key={link.id} className="shrink-0">
                <button
                  onClick={() => handleClick(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`px-6 py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-200 whitespace-nowrap
                    ${
                      isActive
                        ? "bg-black text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-200"
                    }
                  `}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
