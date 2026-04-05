type SectionHeaderProps = {
  title: string;
  description: string;
  align?: "left" | "center";
  maxWidth?: string;
};

export default function TextBlock({
  title,
  description,
  align = "left",
  maxWidth = "max-w-7xl",
}: SectionHeaderProps) {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
      <div className={`mx-auto ${maxWidth}`}>
        {/* Wrapper */}
        <div
          className={`flex flex-col lg:flex-row gap-6 lg:gap-10 ${
            align === "center"
              ? "items-center text-center"
              : "items-start text-left"
          }`}
        >
          {/* Title */}
          <h3 className="w-full lg:w-1/2 text-2xl sm:text-3xl xl:text-4xl font-semibold text-gray-900 leading-snug tracking-tight">
            {title}
          </h3>

          {/* Paragraph */}
          <p className="w-full lg:w-1/2 text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
