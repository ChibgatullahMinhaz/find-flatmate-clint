import { use, useState } from "react";
import { toast } from "react-toastify";
import lifestylePreferences from "../Utilities/utilities";
import { AuthContext } from "../Context/Context/AuthContext";

const AddRoommatePage = () => {
  const { user } = use(AuthContext);
  console.log(user);
  const [lifestyle, setLifestyle] = useState(lifestylePreferences);

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
      availability,
      lifestyle,
      
    };
    console.log(listingData);

    toast.success("Your listing has been successfully created!");
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
                  <input type="radio" name="roomType" value="Single" /> Single
                </label>
                <label>
                  <input type="radio" name="roomType" value="Shared" /> Shared
                </label>
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="block text-sm font-medium">Image URL *</label>
              <input
                type="text"
                name="image"
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
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded"
            >
              Create Listing
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddRoommatePage;
