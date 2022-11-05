import { Cuadro } from "./Cuadro";
import "./Card.css";
export const Card = () => {
  return (
    <div className="card relative">
      <div className="overflow-hidden rounded-[1rem] w-[22rem] h-[22rem] bg-black grid grid-cols-3 ">
        <Cuadro border={"border-b-8 border-r-8"} icon="xmark" />
        <Cuadro border={"border-b-8 border-r-8"} icon="circle" />
        <Cuadro border={"border-b-8"} icon="circle" />
        <Cuadro border={"border-b-8 border-r-8"} icon="circle" />
        <Cuadro border={"border-b-8 border-r-8"} icon="xmark" />
        <Cuadro border={"border-b-8 "} icon="circle" />
        <Cuadro border={"border-r-8"} icon="xmark" />
        <Cuadro border={"border-r-8"} icon="xmark" />
        <Cuadro icon="xmark" />
      </div>
    </div>
  );
};
