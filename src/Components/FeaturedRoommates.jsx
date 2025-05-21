import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Box, CircularProgress } from '@mui/material';

const FeaturedRoommates = () => {
  const [featuredRoommates, setFeaturedRoommates] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFeatured = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://server-iota-khaki.vercel.app/featured/availability");
        const data = await res.json();
        setFeaturedRoommates(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadFeatured();
  }, []);
console.log(featuredRoommates);
  const handleSeeMore = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <Fade>
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
              Featured <span className="text-purple-600">Roommates</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with available roommates who match your preferences and
              lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "auto",
                }}
              >
                <CircularProgress color="primary" size={60} thickness={4} />
              </Box>
            ) : (
              featuredRoommates.map((roommate) => (
                <div
                  key={roommate.id}
                  className="overflow-hidden transition-all duration-300 self-start hover:shadow-lg border border-purple-100 rounded-lg"
                >
                  <div className="h-60 overflow-hidden">
                    <img
                      src={roommate.image}
                      alt={roommate.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-xl text-purple-900">
                          {roommate.title}
                        </h3>
                        <p className="text-gray-500">Location: {roommate.location}</p>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {roommate.availability && 'Available'}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-purple-900">
                        ${roommate?.rent}/month
                      </span>
                      <span className="text-purple-600">
                        {roommate.roomType}
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                      {roommate?.description}
                    </p>

                    <button
                      onClick={() => handleSeeMore(roommate._id)}
                      className="w-full cursor-pointer border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors px-4 py-2 rounded flex justify-center items-center gap-2"
                    >
                      See more
                      <span className="ml-1">→</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default FeaturedRoommates;
