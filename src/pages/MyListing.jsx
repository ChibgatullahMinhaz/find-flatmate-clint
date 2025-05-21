import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { Box, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
const MyListing = () => {
  const [MyListing, setMyList] = useState([]);
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const email = user?.email;

  useEffect(() => {
    const loadMyList = async () => {
      try {
        setLoading(true);
        const encodedEmail = encodeURIComponent(email);
        const res = await fetch(
          `https://server-iota-khaki.vercel.app/flatPost/${encodedEmail}`
        );
        const data = await res.json();
        setMyList(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      loadMyList();
    }
  }, [email]);

  const handleDeletePost = (Id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-iota-khaki.vercel.app/DeletePost/${Id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your post has been deleted.",
                icon: "success",
              });
              const remaining = MyListing.filter((list) => list._id !== Id);
              setMyList(remaining);
            }
          });
      }
      if (result.isDismissed) {
        Swal.fire({
          title: "Safe😊!",
          text: "Your post is Safe!",
          icon: "info",
        });
      }
    });
  };

  return (
    <Fade>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow  py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">
                My Listings
              </h1>
            </div>

            <div className=" shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full mx-auto text-sm text-left">
                  <>
                    <thead className=" border-b">
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
                      {loading ? (
                        <>
                          <tr>
                            <td colSpan={6}>
                              {" "}
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "auto",
                                }}
                              >
                                <CircularProgress
                                  color="primary"
                                  size={60}
                                  thickness={4}
                                />
                              </Box>
                            </td>
                          </tr>
                        </>
                      ) : MyListing.length == 0 ? (
                        <>
                          <div className="text-center py-12">
                            <p className="text-gray-500">No listings found.</p>
                          </div>
                        </>
                      ) : (
                        MyListing.map((listing) => (
                          <motion.tr
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0 }}
                            key={listing._id}
                            className="border-t"
                          >
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
                            <td className="flex items-center justify-center gap-x-2 px-3 py-4 text-right">
                              <Link to={`/updatePost/${listing._id}`}>
                                <button className="px-4 py-2 cursor-pointer text-sm font-medium border rounded-md border-purple-300 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-500">
                                  Update
                                </button>
                              </Link>

                              <button
                                onClick={() => handleDeletePost(listing._id)}
                                className="px-4 cursor-pointer py-2 text-sm font-medium border rounded-md border-purple-300 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-500"
                              >
                                Delete
                              </button>
                            </td>
                          </motion.tr>
                        ))
                      )}
                    </tbody>
                  </>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fade>
  );
};

export default MyListing;
