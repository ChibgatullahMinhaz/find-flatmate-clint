import { useState, useEffect, use } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/Context/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const DetailsPage = () => {
  const { Id } = useParams();
  const { user } = use(AuthContext);
  const [listing, setListingDetails] = useState(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [contactVisible, setContactVisible] = useState(false);
  const navigate = useNavigate();

  const isOwnListing = listing?.email === user?.email;

  useEffect(() => {
    if (listing?.totalLikes) {
      setLikeCount(listing.totalLikes);
    }
  }, [listing]);

  useEffect(() => {
    fetch(`http://localhost:9000/FindFlatPostById/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setListingDetails(data);
        console.log(data);
      });
  }, [Id]);

  const handleLikes = () => {
    if (isOwnListing) {
      toast.warning("you cannot like own post");
      return;
    }
    fetch(`http://localhost:9000/postLikes/${Id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          setLikeCount((prev) => prev + 1);
          setContactVisible(true);
          setLiked(true);
        }
      });
  };
  const handleDeletePost = () => {
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
              navigate('/')
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
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow p-6">
          <div className="max-w-4xl mx-auto  shadow-md rounded-lg overflow-hidden">
            <img
              src={listing?.image}
              alt="listing"
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h1 className="text-3xl font-bold mb-2">{listing?.title}</h1>
              <p className="text-gray-500">
                Location: {listing?.location} • Room Type: {listing?.roomType} •
                Posted on {listing?.createdAt}{" "}
              </p>

              <hr className="my-4" />

              <p className="text-gray-500 mb-4">{listing?.description}</p>

              <div className="mb-4">
                <strong>Lifestyle Preferences:</strong>
                <ul className="list-disc ml-6 mt-2 text-gray-500">
                  {listing?.lifestyle?.map((pref, i) => (
                    <li key={i}>{pref}</li>
                  ))}
                </ul>
              </div>

              <p className="mb-4">
                <strong>Listed By:</strong> {listing?.name || "UnKnown"}{" "}
              </p>

              <div className="mt-6">
                <button
                  onClick={handleLikes}
                  className={`px-4 py-2 cursor-pointer rounded ${
                    liked
                      ? "bg-green-500 text-white"
                      : "bg-purple-600 text-white"
                  }`}
                >
                  {liked ? "Liked" : "Like"}
                </button>

                <div className="mt-2 text-purple-700 font-bold">
                  {likeCount} people interested in this person
                </div>
              </div>

              {contactVisible && (
                <div className="mt-6 p-4 rounded">
                  <h3 className="font-semibold mb-1">Contact Information</h3>
                  <p>{listing.contactInfo}</p>
                </div>
              )}

              {isOwnListing && (
                <div className="mt-6">
                  <Link to={`/updatePost/${listing?._id}`}>
                    <button className="mr-2 cursor-pointer px-4 py-2 bg-yellow-500 text-white rounded">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={handleDeletePost}
                    className="cursor-pointer px-4 py-2 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DetailsPage;
