export const Cuadro = ({ border, skin = null, handler, id }) => {
  return (
    <div
      onClick={() => handler(id)}
      className={`box-content shadow-[0_0_1.625rem_#FCDA73] ${border} border-[#FCDA73]  flex items-center justify-center  relative `}
    >
      {skin && (
        <img
          className="absolute transition-all duration-500"
          src={`../icons/${skin}.svg`}
          alt="xmark"
        />
      )}
    </div>
  );
};
