import { useState, useEffect, use } from "react";
import { useParams, Link, useLoaderData } from "react-router";
import { PostContext } from "../Context/Context/PostContext";
import { AuthContext } from "../Context/Context/AuthContext";

const DetailsPage = () => {
  const { posts } = use(PostContext);
  const {Id} =useParams();
  const { user } = use(AuthContext);
  const [listing, setListingDetails] = useState(null);
  const [liked, setLiked] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);

  const currentUser = user?.email;
  const isOwnListing = listing?.userName === currentUser;

    useEffect(() => {
      fetch(`http://localhost:9000/FindFlatPostById/${Id}`)
        .then((res) => res.json())
        .then((data) => {
          setListingDetails(data);
          console.log(data);
        });
    },[Id]);

 
 


  return <>
   <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <img src={listing?.image} alt="listing" className="w-full h-64 object-cover" />

          <div className="p-6">
            <h1 className="text-3xl font-bold mb-2">{listing?.title}</h1>
            <p className="text-gray-600">Location: {listing?.location} • Room Type: {listing?.roomType} • Posted on {listing?.createdAt} </p>

            <hr className="my-4" />

            <p className="text-gray-800 mb-4">{listing?.description}</p>

            <div className="mb-4">
              <strong>Lifestyle Preferences:</strong>
              <ul className="list-disc ml-6 mt-2 text-gray-700">
                {listing?.lifestyle?.map((pref, i) => (
                  <li key={i}>{pref}</li>
                ))}
              </ul>
            </div>

            <p className="mb-4"><strong>Listed By:</strong> {listing?.name || 'UnKnown'} </p>

            <div className="mt-6">
              <button
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
                Likes: {listing?.totalLikes}
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
                <Link to={`/update/${listing?.id}`}>
                  <button className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded">Update</button>
                </Link>
                <button className="px-4 py-2 bg-red-600 text-white rounded">Delete</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  </>;
};

export default DetailsPage;
