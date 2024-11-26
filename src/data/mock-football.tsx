export interface FootballMatchType {
  id: string;
  teamA: string;
  teamB: string;
  desasiswaA: string;
  desasiswaB: string;
  category: string;
  date: string;
  time: string;
  venue: string;
  status: 'ongoing' | 'upcoming' | 'completed';
  scoreA: number;
  scoreB: number;
}

export const footballCategories = [
  'All Categories',
  "Men's League",
  "Women's League",
  "Mixed League",
  "Inter-School",
  "Professional"
];

export const footballEventDetails = {
  title: "Annual Football Championship",
  about: "A prestigious football tournament featuring top teams from across the region. Showcasing talent, teamwork, and competitive spirit in the beautiful game.",
  image: "/api/placeholder/400/300", // Replace with actual image path
  previousChampion: "Green Eagles FC",
  venue: "Central Sports Stadium"
};

export const footballMatches: FootballMatchType[] = [
  // Ongoing Matches
  {
    id: 'f1',
    teamA: 'Green Eagles',
    teamB: 'Blue Tigers',
    desasiswaA: 'SMA 1 Bandung',
    desasiswaB: 'SMA 2 Jakarta',
    category: "Men's League",
    date: '2024-03-15',
    time: '15:00',
    venue: 'Central Sports Stadium',
    status: 'ongoing',
    scoreA: 1,
    scoreB: 1
  },
  {
    id: 'f2',
    teamA: 'Red Lions',
    teamB: 'Silver Wolves',
    desasiswaA: 'SMK 3 Surabaya',
    desasiswaB: 'SMA 4 Semarang',
    category: "Women's League",
    date: '2024-03-15',
    time: '16:30',
    venue: 'City Football Ground',
    status: 'ongoing',
    scoreA: 0,
    scoreB: 2
  },
  
  // Upcoming Matches
  {
    id: 'f3',
    teamA: 'Golden Hawks',
    teamB: 'Crimson United',
    desasiswaA: 'SMA 5 Yogyakarta',
    desasiswaB: 'SMK 2 Bandung',
    category: "Mixed League",
    date: '2024-03-20',
    time: '14:00',
    venue: 'University Stadium',
    status: 'upcoming',
    scoreA: 0,
    scoreB: 0
  },
  {
    id: 'f4',
    teamA: 'Mountain Rangers',
    teamB: 'Coastal Strikers',
    desasiswaA: 'SMA 6 Medan',
    desasiswaB: 'SMA 7 Makassar',
    category: "Inter-School",
    date: '2024-03-22',
    time: '15:30',
    venue: 'Regional Sports Complex',
    status: 'upcoming',
    scoreA: 0,
    scoreB: 0
  },
  {
    id: 'f5',
    teamA: 'Urban Warriors',
    teamB: 'Rural Champions',
    desasiswaA: 'SMK 1 Jakarta',
    desasiswaB: 'SMA 8 Bali',
    category: "Professional",
    date: '2024-03-25',
    time: '16:00',
    venue: 'National Football Arena',
    status: 'upcoming',
    scoreA: 0,
    scoreB: 0
  },
  
  // Completed Matches
  {
    id: 'f6',
    teamA: 'Thunder Strikers',
    teamB: 'Lightning Bolts',
    desasiswaA: 'SMA 9 Surabaya',
    desasiswaB: 'SMK 4 Bandung',
    category: "Men's League",
    date: '2024-03-10',
    time: '15:00',
    venue: 'City Football Ground',
    status: 'completed',
    scoreA: 3,
    scoreB: 2
  },
  {
    id: 'f7',
    teamA: 'Rose United',
    teamB: 'Phoenix FC',
    desasiswaA: 'SMA 10 Jakarta',
    desasiswaB: 'SMK 5 Semarang',
    category: "Women's League",
    date: '2024-03-12',
    time: '16:30',
    venue: 'Central Sports Stadium',
    status: 'completed',
    scoreA: 1,
    scoreB: 1
  },
  {
    id: 'f8',
    teamA: 'Steel Wolves',
    teamB: 'Fire Dragons',
    desasiswaA: 'SMA 11 Yogyakarta',
    desasiswaB: 'SMK 6 Medan',
    category: "Mixed League",
    date: '2024-03-14',
    time: '14:00',
    venue: 'University Stadium',
    status: 'completed',
    scoreA: 2,
    scoreB: 4
  }
];