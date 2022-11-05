export const Display = ({turn}) => {
  return (
    <div className="rounded-md shadow-[0_0_20px_#FB8FFF] border-[#FB8FFF] bg-black border-[5px] h-[3.125rem] w-[21rem] grid place-content-center pb-2">
        <h2 className="text-[#4FEAFB] text-[24px]">{turn == false ? 'Esperando Jugador' : 'Tu turno' }</h2>
    </div>
  )
}