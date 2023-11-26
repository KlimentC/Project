import { useParams } from "react-router-dom";
import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const create = async (gameId, username, text) => {
  const newComment = await request.post(baseUrl, {
    gameId,
    username,
    text,
  });
  return newComment;
};

export const getAll = async (gameId) => {
  const query = new URLSearchParams({
    where: `gameId="${gameId}"`,
  });
  const result = await request.get(`${baseUrl}?${query}`);

  return Object.values(result).filter((comment) => comment.gameId === gameId);
};
