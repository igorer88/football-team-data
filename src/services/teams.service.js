import { axios } from '@/configs/axios.config';

export const getAllTeams = async (limit, offset) => {
  try {
    const teamsFeed = await axios.get(`/teams?limit=${limit}&offset=${offset}`);

    return Promise.resolve(teamsFeed);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTeam = async teamId => {
  try {
    const teamFeed = await axios.get(`/teams/${teamId}`);

    return Promise.resolve(teamFeed);
  } catch (error) {
    return Promise.reject(error);
  }
};
