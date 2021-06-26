import React from "react";
import { MenuBar } from "./MenuBar/MenuBar";
import { SideNav } from "./SideNavigation";
import TrendingSection from "./TrendingSection";
import WhoToFollow from "./WhoToFollow";

export const Container: React.FC = ({ children }) => {
  return (
    <div>
      <MenuBar />
      <div className="py-10">
        <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
          <SideNav />
          <main className="lg:col-span-9 xl:col-span-6">
            {children}
          </main>

          <aside className="hidden xl:block xl:col-span-4">
            <div className="sticky top-4 space-y-4">
              <WhoToFollow />
              <TrendingSection />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
