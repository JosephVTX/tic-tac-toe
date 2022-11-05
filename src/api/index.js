const API_HOST = import.meta.env.VITE_API_HOST + "/api";

export const getGames = () => {
  return fetch(API_HOST + "/game").then((res) => res.json());
};

export const getGameById = (id) => {
  return fetch(API_HOST + "/game/" + id).then((res) => res.json());
};

export const createGame = (user) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return fetch(API_HOST + "/game", {
    method: "POST",
    headers,
    body: JSON.stringify({ user }),
    mode: "no-cors",
  }).then((res) => res.json());
};
