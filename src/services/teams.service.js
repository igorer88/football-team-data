import axios from '@/configs/axios.config';

export const getAllTeams = async (limit = 500, offset = 0) => {
  try {
    const params = {
      limit,
      offset
    };
    const teamsFeed = await axios.get(`/teams`, { params });

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
