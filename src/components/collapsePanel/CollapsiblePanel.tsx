import React, { useState } from "react";

type Section = {
  id: string;
  title: string;
  content: React.ReactNode;
  defaultOpen?: boolean;
};

type CollapsiblePanelProps = {
  sections: Section[];
};

const CollapsiblePanel: React.FC<CollapsiblePanelProps> = ({ sections }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const initialState: Record<string, boolean> = {};
      sections.forEach((section) => {
        initialState[section.id] = section.defaultOpen || false;
      });
      return initialState;
    }
  );

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <div
          key={section.id}
          className="border border-gray-300 rounded-md shadow-sm"
        >
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full px-4 py-2 text-left bg-gray-100 text-gray-900 font-semibold flex justify-between items-center"
          >
            <span>{section.title}</span>
            <svg
              className={`h-5 w-5 transform ${
                openSections[section.id] ? "rotate-180" : ""
              } transition-transform`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openSections[section.id] && (
            <div className="p-4 text-gray-700 bg-white">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollapsiblePanel;