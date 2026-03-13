"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Products", href: "#" },
  { label: "Builds", href: "#" },
  { label: "Research", href: "#" },
  { label: "Responsibility", href: "#" },
  { label: "Societal Impact", href: "#" },
  { label: "About", href: "#" },
];

const featuredItems = [
  {
    title: "Gemini",
    description: "Learn more about our AI",
    href: "#",
  },
  {
    title: "AI Studio",
    description: "Learn more about our AI",
    href: "#",
  },
  {
    title: "Gemma",
    description: "Learn more about our AI",
    href: "#",
  },
  {
    title: "Vertex AI",
    description: "Learn more about our AI",
    href: "#",
  },
  {
    title: "Gemini",
    description: "Learn more about our AI",
    href: "#",
  },
  {
    title: "AI Studio",
    description: "Learn more about our AI",
    href: "#",
  },
  {
    title: "Gemma",
    description: "Learn more about our AI",
    href: "#",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border/50">
      <div className="flex items-center justify-between h-16 px-6 lg:px-20">
        {/* Logo + Dropdown */}
        <div className="relative flex items-center gap-2">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center text-center gap-2 text-lg font-semibold"
          >
            Google AI
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Panel */}
          {dropdownOpen && (
            <div className="absolute top-14 left-0 w-[240px] border bg-white rounded-xl shadow-lg p-2">
              {/* Featured Items */}
              <div className="flex flex-col">
                {featuredItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="px-3 py-1 font-medium rounded-lg hover:bg-secondary transition"
                  >
                    <div className="font-medium">{item.title}</div>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Section Label */}
              <p className="text-xs text-muted-foreground uppercase my-2 px-3 py-2">
                Resources
              </p>

              {/* Additional Links */}
              <div className="flex flex-col">
                {featuredItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="px-3 py-1 rounded-lg hover:bg-secondary transition"
                  >
                    <div className="font-medium">{item.title}</div>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button className="hidden md:flex border items-center gap-2 px-4 py-2 rounded-full">
          <Sparkles className="w-4 h-4" />
          Try Gemini
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="py-2">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
