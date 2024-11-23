'use client';
import React, { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';
// pages/news.tsx or any other page
import NewsLayoutComponent from '@/components/NewsLayout';

const NewsPage: React.FC = () => {
  return <NewsLayoutComponent />;
};

const NewsLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4">
          <h1 className="py-6 text-4xl font-bold text-center">
            MPL MY
            <span className="block text-orange-500">NEWS</span>
          </h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <NavButton active>ARTICLES</NavButton>
            <NavButton>MATCH REPORT</NavButton>
            <NavButton>DREAM TEAM</NavButton>
            <NavButton>MATCH PREVIEW</NavButton>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured News Card */}
          <Card className="col-span-1 md:col-span-2 lg:col-span-2">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src="/api/placeholder/800/400"
                  alt="Featured news"
                  className="w-full h-[400px] object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <div className="text-white">
                    <span className="bg-orange-500 px-2 py-1 rounded text-sm">
                      FEATURED
                    </span>
                    <h2 className="text-2xl font-bold mt-2">
                      Championship Celebration Highlights
                    </h2>
                    <p className="mt-2 text-gray-200">
                      Witness the incredible moments as the team celebrates
                      their victory
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regular News Cards */}
          {[1, 2, 3, 4].map((index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <img
                  src={`/api/placeholder/400/250`}
                  alt={`News ${index}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-orange-500 text-sm font-medium">
                    MATCH REPORT
                  </span>
                  <h3 className="font-bold mt-2">Latest Tournament Updates</h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    Get the latest updates from the tournament matches and
                    player performances
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Arena Section */}
        <div className="mt-8">
          <Card>
            <CardContent className="p-0">
              <img
                src="/api/placeholder/1200/300"
                alt="Indoor Arena"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

// Navigation Button Component

interface NavButtonProps {
  children: ReactNode;
  active?: boolean;
}

const NavButton = ({ children, active }: NavButtonProps) => (
  <button
    className={`py-4 px-6 text-sm font-medium relative ${
      active
        ? 'text-orange-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:h-1 before:bg-orange-500'
        : 'text-gray-600 hover:text-orange-500'
    }`}
  >
    {children}
  </button>
);

export default NewsPage;
