import { useState } from "react";


export const Cuadro = ({border}) => {


 
  const [icon, setIcon] = useState(false)

  return <div onClick={()=> setIcon(!icon)} className={`box-content shadow-[0_0_1.625rem_#FCDA73] ${border} border-[#FCDA73]  flex items-center justify-center  relative `}>

    {<img className="absolute transition-all duration-500" src={`../icons/${icon  ? 'xmark' : 'circle'}.svg`} alt="xmark" />}

  </div>;
};
