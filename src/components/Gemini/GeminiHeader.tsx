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
    <div className={`flex flex-col items-center text-center px-4 ${className}`}>
      {subtitle && (
        <p
          className={`mb-2 text-sm sm:text-base lg:text-lg font-medium text-gray-600 tracking-wide ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}

      <h1
        className={`font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight sm:leading-snug max-w-4xl ${titleClassName}`}
      >
        {title}
      </h1>

      {/* Workplace Logo */}

      {description && (
        <p
          className={`max-w-xl lg:max-w-2xl mt-2 lg:mt-4 text-base sm:text-lg g:text-xl text-gray-500 leading-relaxed ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default GeminiHeader;
