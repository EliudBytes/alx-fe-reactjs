import React from "react";

function UserProfile() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-sm mx-auto">
      <img
        src="profile.jpg"  // Replace with your actual image path or URL
        alt="Profile"
        className="rounded-full mx-auto w-32 h-32 hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h2 className="text-xl font-bold mt-4 text-center hover:text-blue-500 transition-colors duration-300 ease-in-out">
        John Doe  {/* Replace with actual user name or prop */}
      </h2>
      {/* Add other profile details here */}
    </div>
  );
}

export default UserProfile;

