// const GeminiHeader = () => {
//   return (
//     <div className="flex justify-center items-center sm:mt-4 md:mt-4">
//       <h1 className="flex items-center gap-3 text-center font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
//         What are you looking to automate?
//       </h1>
//     </div>
//   );
// };

// export default GeminiHeader;

type HeaderProps = {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const GeminiHeader = ({
  subtitle,
  title,
  description,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
  descriptionClassName = "",
}: HeaderProps) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 text-center ${className}`}
    >
      {subtitle && (
        <p
          className={`text-base sm:text-lg md:text-xl text-gray-700 ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}

      <h1
        className={`flex items-center font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${titleClassName}`}
      >
        {title}
      </h1>

      {description && (
        <p
          className={`max-w-lg text-sm sm:text-base md:text-lg text-gray-500 ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default GeminiHeader;
