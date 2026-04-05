import { ReactNode } from "react";

// export default GeminiHeader;

type HeaderProps = {
  subtitle?: string;
  title: ReactNode;
  Logo?: string;
  description?: string;
  className?: string;
  subtitleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const GeminiHeader = ({
  subtitle,
  title,
  Logo,
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
        className={`font-medium text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl ${titleClassName}`}
      >
        {title}
      </h1>

      {/* Logo */}
      {Logo && (
        <div className="mt-4 flex items-center justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-56 sm:w-68 lg:w-80 object-contain"
          />
        </div>
      )}

      {description && (
        <p
          className={`max-w-3xl lg:max-w-4xl mt-2 lg:mt-4 text-base sm:text-lg g:text-xl text-gray-500 leading-relaxed ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default GeminiHeader;
