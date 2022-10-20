import { axios } from '@/configs/axios.config';

export const getAllTeamsFeed = async (limit, offset) => {
  try {
    const teamsFeed = await axios.get(`/teams?limit=${limit}&offset=${offset}`);

    return Promise.resolve(teamsFeed);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getTeamFeed = async teamId => {
  try {
    const teamFeed = await axios.get(`/teams/${teamId}`);

    return Promise.resolve(teamFeed);
  } catch (error) {
    return Promise.reject(error);
  }
};
