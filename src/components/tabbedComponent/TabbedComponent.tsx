import React, { useState } from 'react';

interface Tab {
  key: string;
  label: string;
  content: React.ReactNode;
}

interface TabbedComponentProps {
  tabs: Tab[];
  activeKey?: string;
}

const TabbedComponent: React.FC<TabbedComponentProps> = ({ tabs, activeKey }) => {
  const [activeTab, setActiveTab] = useState<string>(activeKey || tabs[0].key);

  const handleTabClick = (key: string) => {
    setActiveTab(key);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleTabClick(tab.key)}
            className={`flex-1 py-2 text-center font-semibold text-gray-600 hover:bg-gray-100 ${
              activeTab === tab.key ? 'border-b-2 border-blue-500 text-blue-500' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-4 bg-white border border-gray-300 rounded-b-md">
        {tabs.map((tab) =>
          activeTab === tab.key ? (
            <div key={tab.key} className="text-gray-700">
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default TabbedComponent;