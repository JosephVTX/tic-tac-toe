import { atom } from "jotai";

const strAtomBase = atom(
  localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
);

export const userAtom = atom(
  (get) => get(strAtomBase),
  (get, set, userUser) => {
    set(strAtomBase, userUser);
    localStorage.setItem("user", JSON.stringify(userUser));
  }
);

export const gamesAtom = atom([]);
