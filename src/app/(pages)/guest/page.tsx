import React from 'react';
import { Inter } from 'next/font/google';
import {
  FaMapMarkerAlt,
  FaBookmark,
  FaBell,
  FaPlay,
  FaArrowRight,
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { NewsDetails } from '@/data/mock-news';
import { SportsListDetails } from '@/data/mock-sportslist';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const inter = Inter({ subsets: ['latin'] });

const GuestHome: React.FC = () => {
  return (
    <div className={`${inter.className} grid grid-cols-1 w-full`}>
      {/* Announcement */}
      <div className="bg-gray-100 p-4 w-full h-96 flex">
        <div className="w-1/2 p-4">
          <h1 className="text-3xl font-bold">WELCOME TO SUKAD PHASE 1</h1>
          <h2 className="text-lg font-bold">Be Ready!!</h2>
          <p className="justify-text">
          We’re thrilled to introduce the ultimate platform for all SUKAD-related activities. 
          This system is designed to enhance your experience by providing seamless event registration, real-time updates, and 
          comprehensive event management. Stay informed with detailed schedules, important notifications, and live score tracking,
           all in one place. You can also access the latest news, updates, and announcements to ensure you never miss out on any 
           exciting moments. Let’s make SUKAD 2024 an unforgettable event filled with fun, competition, and sportsmanship. 
           Join us and be part of this incredible journey!
          </p>
        </div>
        <div className="w-1/3 flex justify-center items-center">
          <Image
            src="/images/football.jpg"
            alt="Football"
            layout="intrinsic"
            width={300}
            height={200}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-80 py-2.5">
        <button className="bg-transparent text-[#654321] px-6 py-3 rounded-md flex items-center gap-2">
          <FaMapMarkerAlt />
          Register Now!
        </button>
        <button className="bg-transparent text-[#654321] px-6 py-3 rounded-md flex items-center gap-2">
          <FaBookmark />
          Upcoming Event!
        </button>
        <button className="bg-transparent text-[#654321] px-6 py-3 rounded-md flex items-center gap-2">
          <FaBell />
          Event List!
        </button>
      </div>

      {/* News */}

      <div className="bg-gray-100 px-4 pt-4">
        <button
          title="News"
          className="text-[#654321] flex flex-row gap-2 w-[160px]"
        >
          <h1 className="text-xl font-medium">News!</h1>
          <div className="pt-1.5">
            <FaArrowRight />
          </div>
        </button>
      </div>
      <div className="flex bg-gray-100 p-4">
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex gap-4">
            {NewsDetails.map((news) => (
              <div className="w-[400px] h-[400px]">
                <Card className="w-full h-full flex flex-col">
                  <CardHeader className="p-4 space-y-2 flex-shrink-0">
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {' '}
                      {/* Added line-clamp-2 */}
                      {news.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 flex-grow flex items-center justify-center">
                    <div className="relative w-full h-[200px]">
                      <Image
                        src={`${news.image}`}
                        alt="Football"
                        layout="fill"
                        objectFit="contain"
                        className="rounded-md"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 flex-shrink-0">
                    <button className="bg-transparent text-[#654321] px-6 py-2 rounded-md flex items-center gap-2 text-sm">
                      <FaPlay />
                      Watch Now!
                    </button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Sports List */}
      <div className="bg-gray-100 px-4 pt-4">
        <button
          title="SportsList"
          className="text-[#654321] flex flex-row gap-2 w-[160px]"
        >
          <h1 className="text-xl font-medium">Sports List!</h1>
          <div className="pt-1.5">
            <FaArrowRight />
          </div>
        </button>
      </div>
      <div className="flex bg-gray-100 p-4 pb-10">
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex gap-4">
            {SportsListDetails.map((sports) => (
              <>
                <div className="w-[200px] h-[250px]">
                  <Card className="w-full h-full flex flex-col">
                    <CardHeader className="p-2 space-y-2 flex-shrink-0">
                      <CardTitle className="text-lg">{sports.title}</CardTitle>
                      <CardDescription className="text-sm line-clamp-2">
                        {' '}
                        {/* Added line-clamp-2 */}
                        {sports.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-2 flex-grow flex items-center justify-center">
                      <div className="relative w-full h-full">
                        <Image
                          src={`${sports.image}`}
                          alt="Football"
                          layout="fill"
                          objectFit="contain"
                          className="rounded-md"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Footer */}
      <footer className="bg-transparent py-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-start">
          {/* Left section with three columns */}
          <div className="flex gap-20">
            {/* Matches Column */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Matches</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/current-matches"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Current Matches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leaderboard"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Leaderboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="/schedule"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Match Schedule
                  </Link>
                </li>
                <li>
                  <Link
                    href="/history"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Match History
                  </Link>
                </li>
              </ul>
            </div>

            {/* Join Us Column */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">Join Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/register"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Register Now
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sukad-history"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    SUKAD History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/volunteer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Volunteer as Helpers
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us Column */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/support"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/developers"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo on the right */}
          <div className="flex items-start">
            <div className="relative w-[350px] h-[140px]">
              <Image
                src="/images/USM_logo.png" // Replace with your logo path
                alt="App Logo"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GuestHome;
