import axios from "axios";

export const API_HOST = import.meta.env.VITE_API_HOST + "/api";

export const getGames = () => {
  return axios.get(API_HOST + "/game");
};

export const getGameById = (id) => {
  return axios.get(API_HOST + "/game/" + id);
};

export const createGame = (user) => {
  return axios.post(API_HOST + "/game", { user });
};

export const joinGame = (user, id) => {
  return axios.put(API_HOST + "/game/join/" + id, { user });
};
