
import { useParams } from "react-router-dom";
import { Buttom } from "./../../components/buttom/Buttom";
import { Card } from "./../../components/card/Card";
import { Display } from "./../../components/display/Display";

export const Game = () => {
  const params = useParams();
  console.log(params)
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <Display turn={1} />
      <Card />
      <div className="flex justify-center gap-4">
        <div className="border-[6px] border-[#FF98FF] shadow-[0_0_1.2rem_#FF98FF] rounded-full overflow-hidden">
          <Buttom content={"Reiniciar"} />
        </div>
        <div className="border-[6px] border-[#78E16C] shadow-[0_0_1.2rem_#78E16C] rounded-full overflow-hidden">
          <Buttom content={"Nuevo Oponente"} />
        </div>
      </div>
    </main>
  );
};
