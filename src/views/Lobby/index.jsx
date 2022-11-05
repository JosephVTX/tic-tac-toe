import { useAtom } from "jotai";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createGame, getGameById, getGames, joinGame } from "../../api";
import { gamesAtom, userAtom } from "../../store";

export const Lobby = () => {
  const [games, setGames] = useAtom(gamesAtom);
  const [user, setUser] = useAtom(userAtom);
  const [creating, setCreating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getGames().then(({ data: { data }, error }) => {
      if (error) {
        alert(error);
      } else {
        setGames(
          data.games
            .filter((game) => game.status === "CREATED")
            .filter((game) => !game.users[1])
        );
      }
    });
  }, []);

  const create = async () => {
    setCreating(true);
    if (!creating) {
      const {
        data: { data },
        error,
      } = await createGame(user);
      if (error) {
        alert(error);
      } else {
        const game = data.game;
        navigate("/game/" + game.id);
      }
      setCreating(false);
    }
  };

  const join = async (idGame) => {
    const {
      data: { data },
    } = await getGameById(idGame);
    if (!data) return;
    const game = data.game;
    const iAmThere = game.users.find((u) => u?.nickname === user.nickname);
    if (!iAmThere) {
      const { error } = await joinGame(user, idGame);
      if (error) return;
    }
    navigate("/game/" + game.id);
  };

  return (
    <div>
      <h1>Lobby - {user.nickname}</h1>
      <button onClick={() => setUser(null)}>Cerrar sesión</button>
      <div>
        <input type="text" />
        <button onClick={create}>Create Game</button>
      </div>

      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <strong>{game.id}</strong>
            <span className="mx-4">{game.users[0].nickname}</span>
            <button
              onClick={() => join(game.id)}
              className={`border-yellow-500 border-[2px] px-2`}
            >
              Join
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
