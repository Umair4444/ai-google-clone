"use client";

import { useState, useEffect } from "react";

type LinkItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
};

type JumpLinksProps = {
  links: LinkItem[];
  defaultActive?: string;
  onChange?: (id: string) => void;
  className?: string;
  variant?: "default" | "pill" | "underline";
};

export default function JumpLinks({
  links,
  defaultActive,
  onChange,
  className = "",
  variant = "pill",
}: JumpLinksProps) {
  const [active, setActive] = useState(defaultActive || links[0]?.id);

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id);

    // Smooth scroll with offset for navbar and jumplink
    const el = document.getElementById(id);
    if (el) {
      const navbarHeight = 64; // Navbar height in px
      const jumplinkHeight = 60; // Approximate jumplink height in px
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight - jumplinkHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll spy to update active link based on visible section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar and jumpLinks

      for (const link of links) {
        const el = document.getElementById(link.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const getButtonStyles = (isActive: boolean) => {
    const baseStyles =
      "relative px-6 py-3 rounded-full text-base sm:text-lg font-medium transition-all duration-200 whitespace-nowrap";

    if (variant === "pill") {
      return `${baseStyles} ${
        isActive
          ? "bg-primary text-primary-foreground shadow-md"
          : "text-muted-foreground bg-muted/40 hover:bg-muted/50 hover:text-foreground "
      }`;
    }

    if (variant === "underline") {
      return `${baseStyles} rounded-none bg-transparent py-2 ${
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 ${
        isActive ? "after:scale-x-100" : "after:scale-x-0"
      }`;
    }

    return baseStyles;
  };

  return (
    <div className={`py-4 w-full ${className}`}>
      <div className="w-fit mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <ul className="flex flex-nowrap gap-2 bg-muted/50 px-2 py-2 rounded-full mx-auto w-max min-w-full backdrop-blur-sm">
          {links.map((link) => {
            const isActive = active === link.id;

            return (
              <li key={link.id} className="shrink-0">
                <button
                  onClick={() => handleClick(link.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={getButtonStyles(isActive)}
                >
                  <span className="flex items-center gap-2">
                    {link.icon}
                    {link.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
