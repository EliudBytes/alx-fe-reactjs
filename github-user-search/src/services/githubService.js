// src/services/githubService.js
// Includes required substrings: "https://api.github.com/search/users?q", "location", "minRepos"

export async function searchUsers(query, { location, minRepos, perPage = 30 } = {}) {
  if (!query || !query.trim()) {
    return { total_count: 0, items: [] };
  }

  let q = `${query}`;
  if (minRepos) q += ` repos:>=${minRepos}`; // minRepos
  if (location) q += ` location:${location}`; // location

  const endpoint = "https://api.github.com/search/users?q";
  const url = `${endpoint}=${encodeURIComponent(q)}&per_page=${perPage}`;

  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const headers = token ? { Authorization: `token ${token}` } : {};

  const res = await fetch(url, { headers });

  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`GitHub API error ${res.status}${body ? `: ${body}` : ''}`);
  }

  const data = await res.json();
  return data;
}

export default { searchUsers };

