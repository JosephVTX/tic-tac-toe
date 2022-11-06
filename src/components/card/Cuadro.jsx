import { useAtom } from "jotai";
import { useParams } from "react-router-dom";
import { userAtom } from "../../store";
import { socket } from "../../api/socket";

export const Cuadro = ({ skin = null, row, cell }) => {
  const params = useParams();
  const idGame = params.id;
  const [user] = useAtom(userAtom);

  const goMove = () => {
    const move = { idGame, user, row, cell };
    socket.emit("move", move);
  };

  return (
    <div
      onClick={goMove}
      className={`box-content shadow-[0_0_1.625rem_#FCDA73] border-[#FCDA73]  flex items-center justify-center  relative `}
    >
      {skin !== "VOID" && (
        
          skin == "FIRST" ? 
          <img
          className="absolute transition-all duration-500 h-[75%]"
          src="../icons/xmark.svg"
          alt="xmark"
        />  :

        <img
        className="absolute transition-all duration-500"
        src="../icons/circle.png"
        alt="xmark"
      />
        
      )}
    </div>
  );
};
