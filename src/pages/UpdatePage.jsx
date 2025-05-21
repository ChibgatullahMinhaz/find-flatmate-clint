import { use, useEffect, useState } from "react";
import { toast } from "react-toastify";
import lifestylePreferences from "../Utilities/utilities";
import { AuthContext } from "../Context/Context/AuthContext";
import Swal from "sweetalert2";
import { useParams } from "react-router";

const UpdatePage = () => {
  const { user } = use(AuthContext);
  const { Id } = useParams();
  const [lifestyle, setLifestyle] = useState(lifestylePreferences);
  const [existing, setExisting] = useState(null);

  useEffect(() => {
    fetch(`https://server-iota-khaki.vercel.app/FindFlatPostById/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setExisting(data);
      });
  }, [Id]);

  const handleCheckboxChange = (id) => {
    const previousLifestyle = (prev) => {
      return prev.map((pref) =>
        pref.id === id ? { ...pref, checked: !pref.checked } : pref
      );
    };
    setLifestyle(previousLifestyle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let { availability, ...data } = Object.fromEntries(formData);
    const lifestyle = formData.getAll("lifestylePreferences");
    if (availability) {
      availability = true;
    } else {
      availability = false;
    }
    const listingData = {
      ...data,
      email: user?.email,
      totalLikes: 0,
      name: user?.displayName,
      createdAt: new Date().toLocaleDateString(),
      availability,
      lifestyle,
    };

    fetch(`https://server-iota-khaki.vercel.app/UpdateFlatPost/${Id}`, {
      method: "puT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(listingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged && data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Post has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <main className="flex-grow py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className=" shadow-md rounded-lg p-6">
          <h2 className="text-2xl  text-center font-bold mb-2">
            Add Roommate Listing Post
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Fill out the form below to create a new roommate listing
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium">
                Listing Title *
              </label>
              <input
                type="text"
                name="title"
                defaultValue={existing?.title}
                placeholder="e.g., Cozy Room Available in Downtown"
                className="w-full p-2 border rounded"
                required
              />
            </div>

            {/* Location & Rent */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Location *</label>
                <input
                  type="text"
                  name="location"
                  defaultValue={existing?.location}
                  placeholder="e.g., San Francisco"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Monthly Rent ($) *
                </label>
                <input
                  type="number"
                  name="rent"
                  defaultValue={existing?.rent}
                  placeholder="e.g., 1200"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-sm font-medium">Room Type *</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="roomType"
                    value="Single"
                    defaultValue={existing?.roomType}
                  />{" "}
                  Single
                </label>
                <label>
                  <input
                    type="radio"
                    name="roomType"
                    value="Shared"
                    defaultValue={existing?.roomType}
                  />{" "}
                  Shared
                </label>
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium">Image URL *</label>
              <input
                type="text"
                name="image"
                defaultValue={existing?.image}
                placeholder="https://example.com/image.jpg"
                className="w-full p-2 border rounded"
              />
            </div>

            {/* Lifestyle Preferences */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Lifestyle Preferences
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {lifestyle.map((pref) => (
                  <label
                    key={pref.id}
                    className="flex items-center gap-2 text-sm"
                  >
                    <input
                      type="checkbox"
                      name="lifestylePreferences"
                      defaultValue={existing?.lifestylePreferences}
                      value={pref.label}
                      checked={pref.checked}
                      onChange={() => handleCheckboxChange(pref.id)}
                    />
                    {pref.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium">Description *</label>
              <textarea
                name="description"
                defaultValue={existing?.description}
                placeholder="Describe the room, amenities, neighborhood, etc."
                className="w-full p-2 border rounded"
                rows="4"
                required
              />
            </div>

            {/* Contact Info */}
            <div>
              <label className="block text-sm font-medium">
                Contact Information *
              </label>
              <textarea
                name="contactInfo"
                defaultValue={existing?.contactInfo}
                placeholder="How should someone contact you?"
                className="w-full p-2 border rounded"
                rows="2"
                required
              />
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <input type="checkbox" name="availability" />
              <label htmlFor="availability" className="text-sm font-medium">
                This listing is currently available
              </label>
            </div>

            {/* User Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  value={user?.displayName}
                  readOnly
                  className="w-full p-2 border text-gray-900 bg-gray-100 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="w-full p-2 border text-gray-900 bg-gray-100 rounded"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
            >
              Update Now
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default UpdatePage;
