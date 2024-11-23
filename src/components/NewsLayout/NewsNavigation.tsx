import React from 'react';

interface NavButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`py-4 px-6 text-sm font-medium relative ${
      active
        ? 'text-orange-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:bg-orange-500'
        : 'text-gray-600 hover:text-orange-500'
    }`}
  >
    {children}
  </button>
);

interface NewsNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const NewsNavigation: React.FC<NewsNavigationProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const sections = ['ARTICLES', 'MATCH REPORT', 'DREAM TEAM', 'MATCH PREVIEW'];

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8 overflow-x-auto">
          {sections.map((section) => (
            <NavButton
              key={section}
              active={activeSection === section}
              onClick={() => onSectionChange(section)}
            >
              {section}
            </NavButton>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NewsNavigation;
