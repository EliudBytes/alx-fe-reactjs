// src/services/githubService.js
import axios from 'axios';

/**
 * Fetch GitHub user data by username.
 * Exports a named function fetchUserData (ALX check expects this name).
 */
export async function fetchUserData(username) {
  if (!username) {
    throw new Error('Username is required');
  }

  const url = `https://api.github.com/users/${encodeURIComponent(username)}`;

  const response = await axios.get(url);
  return response.data;
}
