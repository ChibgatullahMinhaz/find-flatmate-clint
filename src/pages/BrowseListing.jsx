import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { PostContext } from "../Context/Context/PostContext";
import { Fade } from "react-awesome-reveal";

const BrowseListing = () => {
  const { posts } = useContext(PostContext);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredListings = posts.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Fade>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">Browse All Listings</h1>
              <p className="text-lg text-gray-600">
                Find available roommates that match your preferences
              </p>
            </div>

            <div className="mb-6">
              <div className="max-w-md">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title or location"
                  className="w-full px-4 py-2 border rounded-md border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left">
                  <thead className="border-b">
                    <tr>
                      <th className="px-6 py-3 w-[250px]">Title</th>
                      <th className="px-6 py-3">Location</th>
                      <th className="px-6 py-3">Room Type</th>
                      <th className="px-6 py-3">Rent</th>
                      <th className="px-6 py-3">Availability</th>
                      <th className="px-6 py-3 text-right">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredListings.map((listing) => (
                      <tr key={listing._id} className="border-t">
                        <td className="px-6 py-4 font-medium">
                          {listing.title}
                        </td>
                        <td className="px-6 py-4">{listing.location}</td>
                        <td className="px-6 py-4">{listing.roomType}</td>
                        <td className="px-6 py-4">${listing.rent}/month</td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                              listing.availability
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {listing.availability
                              ? "Available"
                              : "Not Available"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Link to={`/details/${listing._id}`}>
                            <button className="px-4 cursor-pointer py-2 text-sm font-medium border rounded-md border-purple-300 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-500">
                              See More
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {filteredListings.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No listings found matching your search criteria.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </Fade>
  );
};

export default BrowseListing;
