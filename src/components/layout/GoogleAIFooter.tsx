"use client";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa6";

interface FooterLink {
  label: string;
  href: string;
  icon: React.ReactNode;
  hoverColor?: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  href?: string;
}

interface SimpleLink {
  label: string;
  href: string;
  external?: boolean;
}

const GoogleAIFooter: React.FC = () => {
  const socialLinks: FooterLink[] = [
    {
      label: "X",
      href: "https://x.com/Googleai/?utm_source=ai.google&utm_medium=referral",
      icon: <FaXTwitter className="text-xl" />,
      hoverColor: "hover:text-black",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin className="text-xl" />,
      hoverColor: "hover:text-[#0A66C2]",
      external: true,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: <FaInstagram className="text-xl" />,
      hoverColor: "hover:text-[#E4405F]",
      external: true,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      icon: <FaYoutube className="text-xl" />,
      hoverColor: "hover:text-[#FF0000]",
      external: true,
    },
  ];

  const footerColumns: FooterColumn[] = [
    { title: "Workplace", href: "/" },
    { title: "Studio", href: "/" },
    { title: "Lab", href: "/" },
    { title: "Industry News", href: "/" },
    { title: "About", href: "/" },
  ];

  const bottomLinks: SimpleLink[] = [
    {
      label: "Privacy",
      href: "https://policies.google.com/privacy",
      external: true,
    },
  ];

  return (
    <footer
      className="bg-white text-[#202124] border-t border-[#dadce0]"
      role="contentinfo"
    >
      <div className="mx-auto px-6 lg:px-20">
        {/* Social Links */}
        <div className="pt-20 pb-6 flex items-center gap-6 border-b border-[#dadce0] lg:border-none">
          <div className="text-2xl font-medium">Follow us</div>
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className={`text-[#5f6368] ${link.hoverColor || 'hover:text-[#1a73e8]'} transition-all duration-300 hover:scale-110 hover:-translate-y-0.5`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Main Footer */}
        <div className="pt-10 pb-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Title */}
            <div className="w-full lg:w-[280px]">
              <h2 className="text-[28px] leading-[1.15] font-medium">
                Making AI helpful
                <br className="hidden lg:block" /> for everyone
              </h2>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-0 flex-1">
              {footerColumns.map((col, idx) => (
                <div key={idx}>
                  <div className="mb-4">
                    <a
                      href={col.href}
                      className="text-xl font-semibold hover:text-[#1a73e8] transition-colors"
                    >
                      {col.title}
                    </a>{" "}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-[#dadce0] py-4 flex flex-row items-center justify-between text-base">
          <a href="/" className="group flex items-center">
            <img
              src="/logo/Bhobbi-logo.png"
              alt="Bhobhi"
              className="h-6 sm:h-7 lg:h-7 w-auto transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:opacity-80 group-active:scale-95"
            />
          </a>

          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center lg:justify-end text-[#5f6368]">
            {bottomLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GoogleAIFooter;
