import * as request from "../lib/request";

const baseurl = "http://localhost:3030/data/games";

export const getAll = async () => {
  const result = await request.get(baseurl);

  return Object.values(result);
};

export const getOne = async (gameId) => {
  const result = await request.get(`${baseurl}/${gameId}`);

  return result;
};

export const create = async (gameData) => {
  const result = await request.post(baseurl, gameData);

  return result;
};
