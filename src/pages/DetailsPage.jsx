import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Dummy Header & Footer
const Header = () => <header className="p-4 bg-purple-600 text-white">Header</header>;
const Footer = () => <footer className="p-4 bg-gray-100 text-center">Footer</footer>;

const MOCK_LISTINGS = [
  {
    id: "1",
    title: "Sunny Room in Downtown Apartment",
    location: "San Francisco, CA",
    rent: 1200,
    roomType: "Single",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    availability: true,
    createdAt: "2023-05-15T08:00:00Z",
    description: "Sun-filled modern apartment...",
    lifestylePreferences: ["Non-Smoker", "Professional", "Clean", "Social"],
    contactInfo: "Email: john@example.com | Phone: (123) 456-7890",
    likes: 12,
    userName: "John Doe"
  },
];

const DetailsPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const currentUser = "Jane Smith";
  const isOwnListing = listing?.userName === currentUser;

  useEffect(() => {
    setTimeout(() => {
      const found = MOCK_LISTINGS.find(item => item.id === id);
      setListing(found || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleLike = () => {
    if (isOwnListing || liked || !listing) return;
    setListing({ ...listing, likes: (listing.likes || 0) + 1 });
    setLiked(true);
    setContactVisible(true);
    alert("Liked!");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">Loading...</main>
        <Footer />
      </div>
    );
  }

  if (!listing) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">Listing Not Found</main>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(listing.createdAt).toLocaleDateString();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img src={listing.image} alt="listing" className="w-full h-64 object-cover" />

          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{listing.title}</h1>
            <p className="text-gray-600">{listing.location} • {listing.roomType} • Posted on {formattedDate}</p>

            <hr className="my-4" />

            <p className="text-gray-800 mb-4">{listing.description}</p>

            <div className="mb-4">
              <strong>Lifestyle Preferences:</strong>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                {listing.lifestylePreferences?.map((pref, i) => (
                  <li key={i}>{pref}</li>
                ))}
              </ul>
            </div>

            <p className="mb-4"><strong>Listed By:</strong> {listing.userName}</p>

            <div className="mt-6">
              <button
                onClick={handleLike}
                disabled={liked || isOwnListing}
                className={`px-4 py-2 rounded ${
                  liked
                    ? "bg-green-500 text-white"
                    : isOwnListing
                    ? "bg-gray-400 text-white"
                    : "bg-purple-600 text-white"
                }`}
              >
                {liked ? "Liked" : isOwnListing ? "Your Listing" : "Like Listing"}
              </button>

              <div className="mt-2 text-purple-700 font-bold">
                Likes: {listing.likes}
              </div>
            </div>

            {contactVisible && (
              <div className="mt-6 p-4 bg-gray-100 rounded">
                <h3 className="font-semibold mb-1">Contact Information</h3>
                <p>{listing.contactInfo}</p>
              </div>
            )}

            {isOwnListing && (
              <div className="mt-6">
                <Link to={`/update/${listing.id}`}>
                  <button className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded">Update</button>
                </Link>
                <button className="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DetailsPage;
