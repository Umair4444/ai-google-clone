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
      <ul className="w-fit flex flex-wrap gap-2 justify-center bg-gray-100 px-2 py-2 rounded-full mx-auto">
        {links.map((link) => {
          const isActive = active === link.id;

          return (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                aria-current={isActive ? "true" : undefined}
                className={`px-4 py-4 w-40 rounded-full text-base sm:text-lg font-medium transition-all duration-200
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
  );
}
