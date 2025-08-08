// src/components/Search.jsx
import React, { useState } from 'react';

export default function Search({ onResults }) {
  const [query, setQuery] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [location, setLocation] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // async function that fetches users from GitHub Search API
  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      // Build the GitHub search query with optional filters
      let q = `${query}`;
      if (minRepos) q += ` repos:>=${minRepos}`;
      if (location) q += ` location:${location}`;

      const token = import.meta.env.VITE_GITHUB_TOKEN; // optional: set in .env if you have one
      const headers = token ? { Authorization: `token ${token}` } : {};

      const res = await fetch(
        `https://api.github.com/search/users?q=${encodeURIComponent(q)}&per_page=30`,
        { headers }
      );

      if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

      const data = await res.json();
      const items = data.items || [];

      setUsers(items);
      if (typeof onResults === 'function') onResults(items);
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          className="flex-1 p-2 border rounded"
          placeholder="Search GitHub users (e.g. eliud)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="px-4 py-2 rounded bg-blue-600 text-white" type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className="flex gap-2 mb-4">
        <input
          className="p-2 border rounded flex-1"
          placeholder="min repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value.replace(/[^\d]/g, ''))}
        />
        <input
          className="p-2 border rounded flex-1"
          placeholder="location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      {error && <div className="text-red-600 mb-2">{error}</div>}

      {/* show message when there are no results yet */}
      {users.length === 0 && !loading && <div className="text-sm text-gray-600">No results yet. Try a query above.</div>}

      {/* render results using map */}
      {users.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {users.map((u) => (
            <li key={u.id} className="p-3 border rounded flex items-center gap-3">
              <img src={u.avatar_url} alt={u.login} className="w-12 h-12 rounded-full" />
              <div>
                <a href={u.html_url} target="_blank" rel="noreferrer" className="font-medium">
                  {u.login}
                </a>
                <div className="text-xs text-gray-500">ID: {u.id}</div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* conditional rendering using && */}
      {users.length > 0 && <div className="mt-4 text-sm text-gray-600">{users.length} results</div>}
    </div>
  );
}

