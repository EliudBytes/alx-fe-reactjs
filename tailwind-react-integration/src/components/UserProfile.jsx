import React from 'react';

function UserProfile({ user }) {
  return (
    <div className="mx-auto p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm bg-white rounded shadow">
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className="rounded-full mx-auto w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover"
      />
      <h1 className="mt-4 text-center font-bold text-lg sm:text-lg md:text-xl text-gray-900">
        {user.name}
      </h1>
      <p className="mt-2 text-center text-gray-700 text-sm sm:text-sm md:text-base">
        {user.bio}
      </p>
    </div>
  );
}

export default UserProfile;
