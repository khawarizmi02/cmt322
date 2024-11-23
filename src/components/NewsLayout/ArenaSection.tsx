import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ArenaSection = () => {
  return (
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
  );
};

export default ArenaSection;
