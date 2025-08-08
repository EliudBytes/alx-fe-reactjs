import React, { useState } from "react";
import Search from "./components/Search";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);

  const handleSearch = async (params) => {
    const results = await searchUsers(params);
    setUsers(results);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Search onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mb-3"
            />
            <h3 className="text-lg font-bold">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2"
            >
              View Profile
            </a>
            {/* Extra info placeholder (requires extra API call for details) */}
            <p className="text-gray-500 text-sm">Location & repos to be fetched</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

