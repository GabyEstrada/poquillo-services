
import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  isExternal?: boolean;
  isDark?: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  isExternal = true,
  isDark = false
}) => {
  const bgClass = isDark ? "bg-pink-50" : "bg-black text-white";
  const primaryBtnClass = isDark 
    ? "bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 transition duration-300 text-lg"
    : "bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 transition duration-300 text-lg";
  
  const secondaryBtnClass = isDark
    ? "bg-white border border-black text-black font-medium py-3 px-8 transition duration-300 hover:bg-gray-50 text-lg"
    : "bg-transparent hover:bg-white hover:text-black border border-white text-white font-medium py-3 px-8 transition duration-300 text-lg";

  const PrimaryButton = () => {
    if (isExternal) {
      return (
        <a 
          href={primaryButtonLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={primaryBtnClass}
        >
          {primaryButtonText}
        </a>
      );
    }
    return (
      <Link to={primaryButtonLink} className={primaryBtnClass}>
        {primaryButtonText}
      </Link>
    );
  };

  const SecondaryButton = () => {
    if (!secondaryButtonText || !secondaryButtonLink) return null;
    
    if (isExternal) {
      return (
        <a 
          href={secondaryButtonLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={secondaryBtnClass}
        >
          {secondaryButtonText}
        </a>
      );
    }
    return (
      <Link to={secondaryButtonLink} className={secondaryBtnClass}>
        {secondaryButtonText}
      </Link>
    );
  };

  return (
    <section className={`py-16 px-6 md:px-12 lg:px-24 ${bgClass}`}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton />
          <SecondaryButton />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
