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
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const GeminiHeader = ({
  title,
  subtitle,
  className = "",
  titleClassName = "",
  subtitleClassName = "",
}: HeaderProps) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${className}`}>
      <h1
        className={`flex items-center gap-3 font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ${titleClassName}`}
      >
        {title}
      </h1>

      {subtitle && (
        <p
          className={`mt-4 text-sm sm:text-base md:text-lg text-gray-500 ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default GeminiHeader;
