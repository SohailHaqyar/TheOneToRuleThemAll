import React from "react";
const tabs = [
  { name: "Recent", href: "#", current: true },
  { name: "Most Liked", href: "#", current: false },
  { name: "Most Answers", href: "#", current: false },
];
export const MobileTabs = () => {
  return (
    <div className="sm:hidden">
      <label htmlFor="question-tabs" className="sr-only">
        Select a tab
      </label>
      <select
        id="question-tabs"
        className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-lightGreen-500 focus:ring-lightGreen-500"
        defaultValue={tabs.find((tab) => tab.current)!.name}
      >
        {tabs.map((tab) => (
          <option key={tab.name}>{tab.name}</option>
        ))}
      </select>
    </div>
  );
};
