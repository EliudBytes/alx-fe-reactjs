import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 max-w-lg mx-auto mt-8"
    >
      <h2 className="text-2xl font-bold text-center">GitHub User Search</h2>

      {/* Username */}
      <input
        type="text"
        placeholder="Search by username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Location */}
      <input
        type="text"
        placeholder="Location (e.g., Nairobi)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Min Repos */}
      <input
        type="number"
        placeholder="Minimum Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default Search;

