import { Cuadro } from "./Cuadro";
import "./Card.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { socket } from "../../api/socket";
import { userAtom } from "../../store";
import { getGameById } from "../../api";

export const Card = () => {
  const params = useParams();
  const idGame = params.id;
  const [user] = useAtom(userAtom);
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fn = async () => {
      const {
        data: { data },
      } = await getGameById(idGame);
      if (!data) return;
      setGame(data.game);
      socket.on("moved", (game) => {
        setGame(game);
      });
    };
    fn();
  }, []);

  return (
    <div className={`card relative ${false ? "hidden" : "block"}`}>
      <div className="overflow-hidden rounded-[1rem] w-[22rem] h-[22rem] bg-black grid grid-cols-3 ">
        {game &&
          game.board.map((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <Cuadro
                key={"" + rowIndex + cellIndex}
                skin={cell}
                row={rowIndex}
                cell={cellIndex}
              />
            ))
          )}
      </div>
    </div>
  );
};
