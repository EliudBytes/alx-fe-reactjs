// src/services/githubService.test.js
import axios from 'axios';
import { fetchUserData } from './githubService';

jest.mock('axios');

describe('fetchUserData', () => {
  it('calls the correct GitHub API endpoint and returns data', async () => {
    const mockData = { login: 'octocat' };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchUserData('octocat');

    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/octocat');
    expect(result).toEqual(mockData);
  });

  it('throws when username is empty', async () => {
    await expect(fetchUserData('')).rejects.toThrow();
  });
});
