//SHow all sports
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import { SportsListDetails } from '@/data/mock-sportslist';
import {
  SportsListDetailsCopy,
  SportsListCopy,
} from '@/data/mock-sportslist-copy';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';

const Sports: React.FC = () => {
  const router = useRouter();

  const handleClick = (sport: string, category?: string) => {
    if (!category) {
      router.push(`/guest/sports/${sport.toLowerCase()}`);
      return;
    }

    router.push(
      `/guest/sports/${sport.toLowerCase()}?category=${category}`
    );
  };

  const sport_list_string = SportsListDetailsCopy.map(
    (sport) => sport.title
  ).join(', ');

  return (
    <div className="px-4">
      <section className="bg-gray-100 shadow-md rounded-lg p-6 m-8">
        <h1 className="text-3xl font-bold mb-4">SUKAD Event Sports List</h1>
        <p className="text-lg mb-4">
          The SUKAD event this year features an exciting lineup of sports,
          showcasing the best talent from various categories. The sports list
          includes: {sport_list_string}.
        </p>
        <p className="text-lg">
          Each sport has multiple categories and events, ensuring a diverse and
          competitive atmosphere. Explore the details of each sport, including
          the event schedule, participating teams, and venues, to stay updated
          on all the action.
        </p>
      </section>
      {SportsListDetailsCopy.map((sport) => (
        <div>
          <div className="px-4 pt-4">
            <button
              title="SportsList"
              className="text-[#654321] flex flex-row gap-2 w-[160px]"
              onClick={() => handleClick(sport.title)}
            >
              <h1 className="text-xl font-medium capitalize">{sport.title}</h1>
              <div className="pt-1.5">
                <FaArrowRight />
              </div>
            </button>
          </div>
          <div className="flex p-4">
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex gap-4">
                {sport.categories?.map((category) => (
                  <div
                    className="w-[200px] h-[150px]"
                    onClick={() => handleClick(sport.title, category.category)}
                  >
                    <Card className="w-full h-full flex flex-col">
                      <CardHeader className="p-2 space-y-2 flex-shrink-0">
                        <CardTitle className="text-lg">
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-cols justify-center">
                        <AspectRatio ratio={16 / 9} className="w-full h-full">
                          <Image
                            src={`${category.image}`}
                            alt={category.category}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sports;

// <div key={sport.id} onClick={() => handleClick(sport.title)}>
//   {sport.categories?.map((category) => (
//     <div>
//       {/* <img src={category.image} alt={sport.title} /> */}
//       <div>{category.category}</div>
//     </div>
//   ))}
// </div>
