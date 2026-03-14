"use client";
import React from "react";

const GoogleAIFooter: React.FC = () => {
  return (
    <footer
      className="bg-white text-[#202124] border-t border-[#dadce0]"
      role="contentinfo"
    >
      <div className=" mx-auto px-6 lg:px-20">
        {/* Social Links */}
        <div className="pt-20 pb-6 flex items-center gap-6 border-b border-[#dadce0] lg:border-none">
          <div className="text-2xl font-medium">Follow us</div>
          <a
            href="https://x.com/Googleai/?utm_source=ai.google&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
            className="hover:text-[#1a73e8] transition-colors"
          >
            <span className="text-[26px] font-black">𝕏</span>
          </a>
        </div>

        {/* Main Footer */}
        <div className="pt-10 pb-12">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Title */}
            <div className="lg:w-[280px]">
              <h2 className="text-[28px] leading-[1.15] font-medium">
                Making AI helpful
                <br className="hidden lg:block" /> for everyone
              </h2>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 flex-1">
              {/* Products */}
              <div>
                <div className="mb-4">
                  <div className="text-xl font-semibold">Products</div>
                  <div className="mt-2 text-base text-[#5f6368] leading-relaxed">
                    Discover how AI can be helpful, from work to everyday life
                  </div>
                </div>

                <div className="space-y-2 text-base">
                  <a
                    href="https://ai.google/products/#for-knowledge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    For knowledge
                  </a>
                  <a
                    href="https://ai.google/products/#for-creativity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    For creativity
                  </a>
                  <a
                    href="https://ai.google/products/#for-productivity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    For productivity
                  </a>
                  <a
                    href="https://ai.google/products/#for-students"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    For students
                  </a>
                  <a
                    href="https://ai.google/products/#for-experimenting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    For experimenting
                  </a>
                </div>

                <a
                  href="https://ai.google/products/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-base font-medium hover:underline"
                >
                  Explore products →
                </a>
              </div>

              {/* Build */}
              <div>
                <div className="mb-4">
                  <div className="text-xl font-semibold">Build</div>
                  <div className="mt-2 text-base text-[#5f6368] leading-relaxed">
                    Get started building with cutting-edge AI models and tools
                  </div>
                </div>

                <div className="space-y-2 text-base">
                  <a
                    href="https://ai.google/build/#start-building-with-google-deepmind-models"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Start building
                  </a>
                  <a
                    href="https://ai.google/build/#code-with-ai-assistance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Code with AI assistance
                  </a>
                  <a
                    href="https://ai.google/build/#leverage-frameworks-and-tools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Leverage frameworks and tools
                  </a>
                </div>

                <a
                  href="https://ai.google/build/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-base font-medium hover:underline"
                >
                  Build with Google AI →
                </a>
              </div>

              {/* Research */}
              <div>
                <div className="mb-4">
                  <div className="text-xl font-semibold">Research</div>
                  <div className="mt-2 text-base text-[#5f6368] leading-relaxed">
                    Tackling the most challenging problems in computer science
                  </div>
                </div>

                <div className="space-y-2 text-base">
                  <a href="/health/" className="block hover:underline">
                    Health
                  </a>
                  <a href="/science/" className="block hover:underline">
                    Science
                  </a>
                  <a href="/sustainability/" className="block hover:underline">
                    Sustainability
                  </a>
                </div>

                <a
                  href="https://ai.google/research/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-base font-medium hover:underline"
                >
                  Explore more research →
                </a>
              </div>

              {/* Responsibility */}
              <div>
                <div className="mb-4">
                  <div className="text-xl font-semibold">Responsibility</div>
                  <div className="mt-2 text-base text-[#5f6368] leading-relaxed">
                    We’re building and deploying AI responsibly
                  </div>
                </div>

                <div className="space-y-2 text-base">
                  <a href="/safety/" className="block hover:underline">
                    Responsibility and safety
                  </a>
                  <a
                    href="/public-policy-perspectives/"
                    className="block hover:underline"
                  >
                    Policy
                  </a>
                  <a
                    href="/building-for-everyone/"
                    className="block hover:underline"
                  >
                    Building for everyone
                  </a>
                  <a href="/societal-impact/" className="block hover:underline">
                    Social impact
                  </a>
                </div>
              </div>

              {/* About */}
              <div>
                <div className="mb-4">
                  <div className="text-xl font-semibold">About</div>
                  <div className="mt-2 text-base text-[#5f6368] leading-relaxed">
                    We’re committed to improving the lives of as many people as
                    possible
                  </div>
                </div>

                <div className="space-y-2 text-base">
                  <a href="/why-ai/" className="block hover:underline">
                    Why AI
                  </a>
                  <a
                    href="https://ai.google/our-ai-journey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Our AI Journey
                  </a>
                  <a href="/principles/" className="block hover:underline">
                    AI Principles
                  </a>
                  <a
                    href="/for-organizations/"
                    className="block hover:underline"
                  >
                    For organizations
                  </a>
                  <a href="/learn-ai-skills/" className="block hover:underline">
                    Learn AI Skills
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#dadce0] py-4 flex flex-col lg:flex-row items-center justify-start gap-60 text-base">
          <a
            href="https://www.google.com/?utm_source=ai.google&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <span className="text-4xl font-normal">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
          </a>

          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center lg:justify-end text-[#5f6368]">
            <a
              href="https://about.google/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              About Google
            </a>
            <a
              href="https://about.google/products/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Google Products
            </a>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Privacy
            </a>
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Terms
            </a>

            <button
              type="button"
              className="hover:underline cursor-pointer"
              onClick={() =>
                alert("Cookies management controls would open here")
              }
            >
              Cookies management controls
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GoogleAIFooter;
