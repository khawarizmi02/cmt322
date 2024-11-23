'use client';
import React, { useState } from 'react';
import NewsHeader from './NewsHeader';
import NewsNavigation from './NewsNavigation';
import NewsCard from './NewsCard';
import ArenaSection from './ArenaSection';

const NewsLayout = () => {
  const [activeSection, setActiveSection] = useState('ARTICLES');

  // Sample news data - replace with your actual data
  const featuredNews = {
    imageUrl: '/api/placeholder/800/400',
    category: 'FEATURED',
    title: 'Championship Celebration Highlights',
    description:
      'Witness the incredible moments as the team celebrates their victory',
  };

  const regularNews = [
    {
      imageUrl: '/api/placeholder/400/250',
      category: 'MATCH REPORT',
      title: 'Semifinal Match Analysis',
      description: 'Detailed breakdown of the thrilling semifinal match',
    },
    {
      imageUrl: '/api/placeholder/400/250',
      category: 'DREAM TEAM',
      title: 'Top Players of the Week',
      description: "See who made it to this week's dream team lineup",
    },
    {
      imageUrl: '/api/placeholder/400/250',
      category: 'MATCH PREVIEW',
      title: 'Upcoming Finals Preview',
      description: 'Everything you need to know about the upcoming finals',
    },
    {
      imageUrl: '/api/placeholder/400/250',
      category: 'ARTICLES',
      title: 'Behind the Scenes',
      description: 'Exclusive look at team preparations and strategies',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NewsHeader />
      <NewsNavigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NewsCard {...featuredNews} isFeatured={true} />

          {regularNews.map((news, index) => (
            <NewsCard key={index} {...news} />
          ))}
        </div>

        <ArenaSection />
      </main>
    </div>
  );
};

export default NewsLayout;
