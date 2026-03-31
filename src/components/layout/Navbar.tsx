"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Workplace",
    href: "#",
    dropdown: [
      { title: "Workspace AI", description: "AI for productivity", href: "#" },
      { title: "Docs AI", description: "AI writing assistant", href: "#" },
    ],
  },
  {
    label: "Studio",
    href: "#",
    dropdown: [
      { title: "AI Studio", description: "Build AI apps", href: "#" },
      {
        title: "Model Training",
        description: "Train custom models",
        href: "#",
      },
    ],
  },
  {
    label: "Lab",
    href: "#",
    dropdown: [
      { title: "Experiments", description: "AI research projects", href: "#" },
      { title: "Open Models", description: "Access open models", href: "#" },
    ],
  },
  {
    label: "Industry News",
    href: "#",
    dropdown: [
      { title: "AI Updates", description: "Latest AI news", href: "#" },
      { title: "Research", description: "AI publications", href: "#" },
    ],
  },
  {
    label: "About",
    href: "#",
    dropdown: [
      { title: "Our Mission", description: "AI for everyone", href: "#" },
      { title: "Team", description: "Meet our researchers", href: "#" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 border-b transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-6 lg:px-20 mx-auto">
        {/* ================= Logo (LEFT) ================= */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-lg font-semibold flex-shrink-0"
        >
          <Image
            src="/logo/Bhobbi-logo.png"
            alt="Bhobbi"
            width={80}
            height={80}
            className="w-20 sm:w-24 lg:w-28 object-contain transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-1"
          />
        </Link>

        {/* ================= CENTER NAVBAR ================= */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navItems.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="px-4 py-2 text-base lg:text-lg font-medium rounded-lg hover:bg-gray-100 transition"
              >
                {item.label}
              </Link>

              {/* Dropdown */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-[300px] opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                <div className="bg-white border rounded-xl shadow-xl p-3 space-y-1">
                  {item.dropdown.map((drop) => (
                    <Link
                      key={drop.title}
                      href={drop.href}
                      className="block p-3 rounded-lg hover:bg-gray-100 transition"
                    >
                      <div className="font-medium text-sm">{drop.title}</div>
                      <p className="text-xs text-gray-500">
                        {drop.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= Color Dots (RIGHT) ================= */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <button
            className="w-4 h-4 rounded-full bg-[#872b97] shadow-lg shadow-[#872b97]/30 hover:scale-125 hover:shadow-xl hover:shadow-[#872b97]/50 transition-all duration-300 ease-out"
            title="AI Models"
            type="button"
            aria-label="AI Models"
          />
          <button
            className="w-4 h-4 rounded-full bg-[#ff7231] shadow-lg shadow-[#ff7231]/30 hover:scale-125 hover:shadow-xl hover:shadow-[#ff7231]/50 transition-all duration-300 ease-out"
            title="Features"
            type="button"
            aria-label="Features"
          />
          <button
            className="w-4 h-4 rounded-full bg-[#ff3c68] shadow-lg shadow-[#ff3c68]/30 hover:scale-125 hover:shadow-xl hover:shadow-[#ff3c68]/50 transition-all duration-300 ease-out"
            title="Settings"
            type="button"
            aria-label="Settings"
          />
        </div>

        {/* ================= MOBILE BUTTON (RIGHT) ================= */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col p-4">
            {navItems.map((item) => (
              <div key={item.label} className="border-b py-2">
                <button
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === item.label ? null : item.label,
                    )
                  }
                  className="flex justify-between w-full text-left font-medium"
                >
                  {item.label}
                  <ChevronDown
                    className={`transition ${
                      activeMobileDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeMobileDropdown === item.label && (
                  <div className="mt-2 ml-3 space-y-2">
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.title}
                        href={drop.href}
                        className="block text-sm text-gray-600"
                      >
                        {drop.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
