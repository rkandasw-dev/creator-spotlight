export interface Creator {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  subscribers: string;
  subscriberCount: number;
  niche: string;
  engagement: number;
  avgViews: string;
  topShorts: {
    views: string;
    thumbnail: string;
  }[];
  pastBrands: string[];
  specialties: string[];
  whyBrandsLove: string;
  audience: {
    age: string;
    gender: string;
    location: string;
  };
  bestTimeToPost: string;
  videoUrl?: string;
}

export const creators: Creator[] = [
  {
    id: "1",
    username: "@maya.creates",
    displayName: "Maya Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    subscribers: "2.4M",
    subscriberCount: 2400000,
    niche: "Lifestyle",
    engagement: 8.7,
    avgViews: "850K",
    topShorts: [
      { views: "12M", thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=350&fit=crop" },
      { views: "8.5M", thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&h=350&fit=crop" },
      { views: "6.2M", thumbnail: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=200&h=350&fit=crop" },
    ],
    pastBrands: ["Glossier", "Lululemon", "Oatly"],
    specialties: ["Get-ready-with-me", "Day-in-the-life storytelling", "Authentic product moments"],
    whyBrandsLove: "Feels like your friend, not an ad.",
    audience: { age: "18-34", gender: "72% Female", location: "US, UK, Canada" },
    bestTimeToPost: "6 PM EST",
  },
  {
    id: "2",
    username: "@techbro.official",
    displayName: "Marcus Tech",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    subscribers: "1.8M",
    subscriberCount: 1800000,
    niche: "Tech",
    engagement: 7.2,
    avgViews: "620K",
    topShorts: [
      { views: "9M", thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=350&fit=crop" },
      { views: "5.8M", thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=350&fit=crop" },
      { views: "4.1M", thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=200&h=350&fit=crop" },
    ],
    pastBrands: ["Samsung", "NordVPN", "Anker"],
    specialties: ["Tech reviews", "Unboxing content", "Trending audio integration"],
    whyBrandsLove: "Makes complex tech feel accessible and exciting.",
    audience: { age: "18-44", gender: "68% Male", location: "US, Germany, India" },
    bestTimeToPost: "12 PM EST",
  },
  {
    id: "3",
    username: "@foodie.jules",
    displayName: "Jules Kitchen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    subscribers: "3.1M",
    subscriberCount: 3100000,
    niche: "Food",
    engagement: 9.4,
    avgViews: "1.2M",
    topShorts: [
      { views: "18M", thumbnail: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&h=350&fit=crop" },
      { views: "11M", thumbnail: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=200&h=350&fit=crop" },
      { views: "8M", thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=350&fit=crop" },
    ],
    pastBrands: ["HelloFresh", "KitchenAid", "Whole Foods"],
    specialties: ["Quick recipes", "Kitchen hacks", "Satisfying food content"],
    whyBrandsLove: "Every video makes you hungry to try.",
    audience: { age: "25-44", gender: "65% Female", location: "US, Australia, UK" },
    bestTimeToPost: "5 PM EST",
  },
  {
    id: "4",
    username: "@fit.with.alex",
    displayName: "Alex Fitness",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    subscribers: "890K",
    subscriberCount: 890000,
    niche: "Fitness",
    engagement: 11.2,
    avgViews: "420K",
    topShorts: [
      { views: "5M", thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=200&h=350&fit=crop" },
      { views: "3.2M", thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&h=350&fit=crop" },
      { views: "2.8M", thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=350&fit=crop" },
    ],
    pastBrands: ["Gymshark", "MyProtein", "Peloton"],
    specialties: ["Quick workouts", "Fitness motivation", "Form tutorials"],
    whyBrandsLove: "Inspires action, not just likes.",
    audience: { age: "18-34", gender: "55% Male", location: "US, UK, Brazil" },
    bestTimeToPost: "7 AM EST",
  },
  {
    id: "5",
    username: "@comedy.central.kim",
    displayName: "Kim Laughs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    subscribers: "4.2M",
    subscriberCount: 4200000,
    niche: "Comedy",
    engagement: 12.8,
    avgViews: "2.1M",
    topShorts: [
      { views: "32M", thumbnail: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=200&h=350&fit=crop" },
      { views: "24M", thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=350&fit=crop" },
      { views: "18M", thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=350&fit=crop" },
    ],
    pastBrands: ["Netflix", "Spotify", "DoorDash"],
    specialties: ["Relatable humor", "Trending audio integration", "Character sketches"],
    whyBrandsLove: "Pure entertainment that people share.",
    audience: { age: "16-34", gender: "58% Female", location: "US, Canada, UK" },
    bestTimeToPost: "8 PM EST",
  },
  {
    id: "6",
    username: "@beauty.by.nina",
    displayName: "Nina Glow",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face",
    subscribers: "1.6M",
    subscriberCount: 1600000,
    niche: "Beauty",
    engagement: 9.8,
    avgViews: "780K",
    topShorts: [
      { views: "11M", thumbnail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=350&fit=crop" },
      { views: "7.5M", thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200&h=350&fit=crop" },
      { views: "5.8M", thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=350&fit=crop" },
    ],
    pastBrands: ["Fenty Beauty", "Sephora", "Olaplex"],
    specialties: ["Get-ready-with-me", "Product reviews", "Transformation content"],
    whyBrandsLove: "Authentic beauty that converts.",
    audience: { age: "18-34", gender: "88% Female", location: "US, UK, Mexico" },
    bestTimeToPost: "7 PM EST",
  },
  {
    id: "7",
    username: "@gaming.with.dev",
    displayName: "DevPlays",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    subscribers: "2.9M",
    subscriberCount: 2900000,
    niche: "Gaming",
    engagement: 8.1,
    avgViews: "1.4M",
    topShorts: [
      { views: "22M", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=350&fit=crop" },
      { views: "15M", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=200&h=350&fit=crop" },
      { views: "10M", thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=200&h=350&fit=crop" },
    ],
    pastBrands: ["Razer", "PlayStation", "Monster Energy"],
    specialties: ["Epic gaming moments", "Game tutorials", "Trending audio integration"],
    whyBrandsLove: "Commands attention in a scroll-happy world.",
    audience: { age: "13-34", gender: "75% Male", location: "US, Japan, Brazil" },
    bestTimeToPost: "9 PM EST",
  },
  {
    id: "8",
    username: "@travel.with.sam",
    displayName: "Samira Explores",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    subscribers: "1.2M",
    subscriberCount: 1200000,
    niche: "Travel",
    engagement: 10.5,
    avgViews: "560K",
    topShorts: [
      { views: "8M", thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&h=350&fit=crop" },
      { views: "5.5M", thumbnail: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=200&h=350&fit=crop" },
      { views: "4.2M", thumbnail: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=200&h=350&fit=crop" },
    ],
    pastBrands: ["Airbnb", "Away", "Delta"],
    specialties: ["Hidden gems", "Travel hacks", "Day-in-the-life storytelling"],
    whyBrandsLove: "Makes viewers book their next trip.",
    audience: { age: "25-44", gender: "62% Female", location: "US, UK, Germany" },
    bestTimeToPost: "11 AM EST",
  },
];

export const niches = ["All", "Lifestyle", "Tech", "Food", "Fitness", "Comedy", "Beauty", "Gaming", "Travel"];
export const audienceSizes = ["All Sizes", "Under 1M", "1M - 3M", "3M+"];
export const vibes = ["All Vibes", "Energetic", "Chill", "Educational", "Funny", "Inspirational"];
