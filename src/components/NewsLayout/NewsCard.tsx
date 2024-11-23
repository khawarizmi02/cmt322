import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const NewsCard = ({
  imageUrl = '/api/placeholder/400/250',
  category = 'MATCH REPORT',
  title = 'Latest Tournament Updates',
  description = 'Get the latest updates from the tournament matches and player performances',
  isFeatured = false,
}) => {
  if (isFeatured) {
    return (
      <Card className="col-span-1 md:col-span-2 lg:col-span-2">
        <CardContent className="p-0">
          <div className="relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-[400px] object-cover rounded-t-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <div className="text-white">
                <span className="bg-orange-500 px-2 py-1 rounded text-sm">
                  FEATURED
                </span>
                <h2 className="text-2xl font-bold mt-2">{title}</h2>
                <p className="mt-2 text-gray-200">{description}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <span className="text-orange-500 text-sm font-medium">
            {category}
          </span>
          <h3 className="font-bold mt-2">{title}</h3>
          <p className="text-gray-600 mt-2 text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
