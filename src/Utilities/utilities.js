 const lifestylePreferences = [
  { id: "non-smoker", label: "Non-Smoker", checked: false },
  { id: "pet-friendly", label: "Pet Friendly", checked: false },
  { id: "early-riser", label: "Early Riser", checked: false },
  { id: "night-owl", label: "Night Owl", checked: false },
  { id: "vegetarian", label: "Vegetarian", checked: false },
  { id: "student", label: "Student", checked: false },
  { id: "professional", label: "Professional", checked: false },
  { id: "clean", label: "Clean", checked: false },
  { id: "social", label: "Social", checked: false },
  { id: "quiet", label: "Quiet", checked: false },
];
export default lifestylePreferences;

export const slides = [
    {
      id: 1,
      title: "Find Your Perfect Roommate Match",
      description:
        "Our smart matching system helps you find roommates with compatible lifestyles, schedules, and preferences.",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
      buttonText: "Start Matching",
      buttonLink: "/BrowseListing",
    },
    {
      id: 2,
      title: "Safe & Trusted Community",
      description:
        "Join thousands of verified users who have successfully found their ideal living arrangements through our platform.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3wT99HSPTRGAPEQqVJRU0_xoqkQuxXtsyAvv-qL8mSMpKp6mWG0fW9I0Lvg69HiYULU&usqp=CAU",
      buttonText: "Browse Listings",
      buttonLink: "/BrowseListing",
    },
    {
      id: 3,
      title: "Share Costs, Save Money",
      description:
        "Split rent, utilities and living expenses with a compatible roommate and save up to 50% on your monthly housing costs.",
      image:
        "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=",
      buttonText: "Create Listing",
      buttonLink: "/Add-to-Find-Roommate",
    },
    {
      id: 4,
      title: "Find Roommates Nearby",
      description:
        "Discover potential roommates in your preferred neighborhoods and locations with our location-based search.",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
      buttonText: "Explore Areas",
      buttonLink: "/BrowseListing",
    },
  ];



export const MOCK_LISTINGS = [
    {
      id: "1",
      title: "Sunny Room in Downtown Apartment",
      location: "San Francisco, CA",
      rent: 1200,
      roomType: "Single",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      availability: true,
      createdAt: "2023-05-15T08:00:00Z"
    },
    {
      id: "2",
      title: "Cozy Room in Shared House",
      location: "Austin, TX",
      rent: 800,
      roomType: "Shared",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      availability: true,
      createdAt: "2023-05-14T10:30:00Z"
    },
    {
      id: "3",
      title: "Modern Loft Looking for Roommate",
      location: "New York, NY",
      rent: 1500,
      roomType: "Single",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      availability: true,
      createdAt: "2023-05-13T14:15:00Z"
    },
    {
      id: "4",
      title: "Room in House with Garden",
      location: "Portland, OR",
      rent: 950,
      roomType: "Single",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      availability: false,
      createdAt: "2023-05-12T09:45:00Z"
    },
    {
      id: "5",
      title: "Student Housing Near University",
      location: "Boston, MA",
      rent: 850,
      roomType: "Shared",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      availability: true,
      createdAt: "2023-05-11T16:20:00Z"
    },
    {
      id: "6",
      title: "Room in Beachside Apartment",
      location: "Miami, FL",
      rent: 1100,
      roomType: "Single",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      availability: true,
      createdAt: "2023-05-10T11:00:00Z"
    },
    {
      id: "7",
      title: "Downtown Studio Looking for Roommate",
      location: "Chicago, IL",
      rent: 900,
      roomType: "Shared",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      availability: true,
      createdAt: "2023-05-09T13:25:00Z"
    },
    {
      id: "8",
      title: "Room in Quiet Neighborhood",
      location: "Seattle, WA",
      rent: 1050,
      roomType: "Single",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      availability: true,
      createdAt: "2023-05-08T09:15:00Z"
    }
  ];



  export const tips = [
    {
      id: 1,
      title: "Communication is Key",
      description:
        "Set clear expectations about noise levels, guests, and shared spaces from the start.",
      icon: "fas fa-comments", 
    },
    {
      id: 2,
      title: "Respect Privacy",
      description:
        "Always knock before entering someone's room and establish boundaries.",
      icon: "fas fa-door-closed",
    },
    {
      id: 3,
      title: "Create a Cleaning Schedule",
      description:
        "Divide responsibilities and create a fair system for household chores.",
      icon: "fas fa-broom",
    },
  ];
  
  export const reasons = [
    {
      title: "Smart Matching",
      description:
        "Our algorithm helps you find roommates with compatible lifestyles and preferences.",
    },
    {
      title: "Verified Listings",
      description:
        "All listings are verified to ensure safety and authenticity.",
    },
    {
      title: "Easy Communication",
      description:
        "Connect directly with potential roommates through our secure platform.",
    },
    {
      title: "Detailed Profiles",
      description:
        "View comprehensive profiles to make informed decisions.",
    },
  ];
  