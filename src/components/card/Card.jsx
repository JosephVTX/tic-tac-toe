import { Cuadro } from './Cuadro';
import './Card.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAtom } from 'jotai';
import { socket } from '../../api/socket';
import { userAtom } from '../../store';

export const Card = () => {

  const params = useParams();
  const idGame = params.id;
  const [user] = useAtom(userAtom);

  useEffect(() => {
    socket.on("moved", (data) => {
      console.log(data)
    })
  }, [])

  // turno = true => J1 => X
  // turno = false => J2 => O
  const [turno, setTurno] = useState(true);
  const [tableDisabled, setTableDisabled] = useState(false);

  const [game, setGame] = useState([
    { id: 1, skin: null, border: 'border-[#FCDA73]', isSelected: false },
    { id: 2, skin: null, border: 'border-[#FCDA73]', isSelected: false },
    { id: 3, skin: null, border: 'border-[#FCDA73]', isSelected: false },
    { id: 4, skin: null, border: 'border-[#FCDA73]', isSelected: false },
    { id: 5, skin: null, border: 'border-[#FCDA73]', isSelected: false },
    { id: 6, skin: null, border: 'border-[#FCDA73]', isSelected: false },
    { id: 7, skin: null, border: 'border-[#FCDA73]', isSelected: false },
    { id: 8, skin: null, border: 'border-[#FCDA73]', isSelected: false },
    { id: 9, skin: null, border: 'border-[#FCDA73]', isSelected: false },
  ]);

  const handleClick = (id) => {
    if (game[id - 1].isSelected) return;

    let index;
    const newGame = game.map((item) => {
      if (item.id === id) {
        index = id - 1;
        if (turno) {
          item.skin = 'xmark';
        } else {
          item.skin = 'circle';
        }
        item.border = 'border-[#FCDA73]';
        item.isSelected = true;
      }
      return item;
    });
    const row = Math.floor(index / 3)
    const cell = index % 3;
    socket.emit("move", {idGame, user, row, cell})
    setGame(newGame);
    setTurno(!turno);
  };

  const handleWin = () => {
    const win = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    win.forEach((item) => {
      const [a, b, c] = item;
      if (
        game[a - 1].skin === 'xmark' &&
        game[b - 1].skin === 'xmark' &&
        game[c - 1].skin === 'xmark'
      ) {
        alert('Gana X');
        setTableDisabled(true);
      }
      if (
        game[a - 1].skin === 'circle' &&
        game[b - 1].skin === 'circle' &&
        game[c - 1].skin === 'circle'
      ) {
        alert('Gana O');
        setTableDisabled(true);
      }
    });
  };

  useEffect(() => {
    handleWin();
  }, [game]);

  return (
    <div className={`card relative ${tableDisabled ? 'hidden' : 'block'}`}>
      <div className="overflow-hidden rounded-[1rem] w-[22rem] h-[22rem] bg-black grid grid-cols-3 ">
        {game.map((item) => (
          <Cuadro
            key={item.id}
            border={item.border}
            skin={item.skin}
            handler={handleClick}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
